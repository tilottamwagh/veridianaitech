"use client";

import { useEffect, useRef, useState } from "react";

// Animated counter hook
function useCounter(target: number, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return value;
}

// Animated SVG line chart
function LiveLineChart({ color = "#c5a059", height = 80 }: { color?: string; height?: number }) {
  const [points, setPoints] = useState<number[]>([20, 45, 30, 60, 40, 70, 55, 80, 60, 75, 65, 90]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => {
        const next = [...prev.slice(1), Math.floor(30 + Math.random() * 60)];
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const w = 280;
  const h = height;
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / 100) * h}`).join(" ");
  const fillPts = `0,${h} ${pts} ${w},${h}`;

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="overflow-visible">
      <defs>
        <linearGradient id={`grad-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPts} fill={`url(#grad-${color.replace("#","")})`} className="transition-all duration-700" />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-700" />
      {/* Live dot */}
      <circle
        cx={w}
        cy={h - (points[points.length - 1] / 100) * h}
        r="4"
        fill={color}
        className="transition-all duration-700"
      >
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Bar chart
function LiveBarChart() {
  const stages = ["Prospect","Qualified","Proposal","Negotiation","Closed Won"];
  const [bars, setBars] = useState([85, 79, 130, 22, 130]);
  const vals = ["$3.2M","$1.5M","$2.8M","$1.5M","$1.5M"];
  useEffect(() => {
    const t = setInterval(() => {
      setBars(prev => prev.map(v => Math.max(15, Math.min(140, v + Math.floor((Math.random() - 0.5) * 12)))));
    }, 2000);
    return () => clearInterval(t);
  }, []);
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-1.5 h-28 w-full">
      {bars.map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[8px] text-[#c5a059] font-bold">{vals[i]}</span>
          <div
            className="w-full rounded-sm transition-all duration-700"
            style={{ height: `${(b / max) * 90}%`, background: "linear-gradient(to top, #a07030, #c5a059)" }}
          />
          <span className="text-[7px] text-gray-500 text-center leading-tight">{stages[i]}</span>
        </div>
      ))}
    </div>
  );
}

// Scrolling call log
const callLogs = [
  { time: "10:45 AM", type: "Outbound", contact: "Alice Wu", company: "Apex Dynamics", dur: "14 min", note: "Highly interested — Enterprise Tier", color: "#c5a059" },
  { time: "10:15 AM", type: "Inbound", contact: "David Lee", company: "Tech Solutions", dur: "9 min", note: "Follow-up scheduled", color: "#4ade80" },
  { time: "09:52 AM", type: "Outbound", contact: "Sara Khan", company: "BlueWave Inc.", dur: "7 min", note: "Demo booked for Friday", color: "#c5a059" },
  { time: "09:30 AM", type: "Inbound", contact: "Mark Ray", company: "Orion Group", dur: "12 min", note: "Pricing query resolved", color: "#4ade80" },
];

// Donut ring
function DonutRing({ pct, color, label }: { pct: number; color: string; label: string }) {
  const r = 28, circ = 2 * Math.PI * r;
  const [anim, setAnim] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAnim(pct), 400);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#1f1f1f" strokeWidth="7" />
        <circle
          cx="36" cy="36" r={r} fill="none"
          stroke={color} strokeWidth="7"
          strokeDasharray={circ}
          strokeDashoffset={circ - (anim / 100) * circ}
          strokeLinecap="round"
          transform="rotate(-90 36 36)"
          style={{ transition: "stroke-dashoffset 1.5s ease" }}
        />
        <text x="36" y="40" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">{pct}%</text>
      </svg>
      <span className="text-[9px] text-gray-400 text-center leading-tight">{label}</span>
    </div>
  );
}

export default function LiveDashboard() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Ticker values that increment
  const [pipeline, setPipeline] = useState(12.4);
  const [leads, setLeads] = useState(672);
  const [opps, setOpps] = useState(241);
  const [timeSaved, setTimeSaved] = useState(68.4);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setPipeline(v => parseFloat((v + (Math.random() * 0.08 - 0.02)).toFixed(1)));
      setLeads(v => v + Math.floor(Math.random() * 3));
      setOpps(v => v + Math.floor(Math.random() * 2));
      setTimeSaved(v => parseFloat(Math.min(99, v + Math.random() * 0.3).toFixed(1)));
    }, 2000);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="w-full rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#0d0d0d] shadow-2xl shadow-black/60"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#111] border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#c5a059] flex items-center justify-center text-black font-black text-xs">AI</div>
          <span className="text-white font-bold text-sm">Veridianaitech CRM</span>
          <span className="text-[10px] px-2 py-0.5 bg-[#c5a059]/20 text-[#c5a059] rounded-full font-bold">● LIVE</span>
        </div>
        <div className="flex gap-4 text-gray-500 text-xs font-medium">
          {["Dashboard","Pipeline","Leads","Reports"].map(t => (
            <span key={t} className={t === "Dashboard" ? "text-[#c5a059]" : ""}>{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center">
            <span className="text-[8px] text-[#c5a059]">●</span>
          </div>
          <span className="text-gray-500 text-xs">Admin</span>
        </div>
      </div>

      <div className="p-5">
        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-black text-sm tracking-wide">CRM INSIGHTS & PIPELINE OVERVIEW</h3>
          <span className="text-[10px] text-gray-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            Live · Updated just now
          </span>
        </div>

        {/* Top metric cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {/* Pipeline value with mini chart */}
          <div className="col-span-1 bg-[#131313] rounded-xl p-3 border border-white/5">
            <p className="text-gray-500 text-[9px] uppercase tracking-wider mb-1">Deal Pipeline Value</p>
            <p className="text-white font-black text-xl">${pipeline}M</p>
            <div className="mt-2"><LiveLineChart color="#c5a059" height={50} /></div>
          </div>

          {/* Other metrics */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
              <p className="text-gray-500 text-[9px] mb-0.5">Active Opportunities</p>
              <p className="text-white font-black text-lg">
                {opps} <span className="text-green-400 text-[10px] font-bold">+12%</span>
              </p>
            </div>
            <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
              <p className="text-gray-500 text-[9px] mb-0.5">Deal Pipeline Value</p>
              <p className="text-white font-black text-lg">$4.2M</p>
            </div>
          </div>

          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
              <p className="text-gray-500 text-[9px] mb-0.5">Leads in Funnel</p>
              <p className="text-white font-black text-lg">
                {leads} <span className="text-green-400 text-[10px] font-bold">+8%</span>
              </p>
            </div>
            <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
              <p className="text-gray-500 text-[9px] mb-0.5">Time Saved</p>
              <p className="text-white font-black text-lg">{timeSaved}%</p>
            </div>
          </div>

          {/* Donut rings */}
          <div className="col-span-1 grid grid-cols-2 gap-2">
            <div className="bg-[#131313] rounded-xl p-2 border border-white/5 flex items-center justify-center">
              <DonutRing pct={70} color="#c5a059" label="AI Automation efficiency" />
            </div>
            <div className="bg-[#131313] rounded-xl p-2 border border-white/5 flex items-center justify-center">
              <DonutRing pct={95} color="#4ade80" label="Workflow accuracy" />
            </div>
          </div>
        </div>

        {/* Middle row: bar chart + line chart */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
            <p className="text-white text-[10px] font-bold mb-3">DEAL STAGE PIPELINE</p>
            <LiveBarChart />
          </div>
          <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white text-[10px] font-bold">MONTHLY PIPELINE PERFORMANCE</p>
            </div>
            <div className="flex justify-between text-[8px] text-gray-600 mb-1">
              {["Jan","Feb","Mar","Apr","May","Jun"].map(m => <span key={m}>{m}</span>)}
            </div>
            <LiveLineChart color="#c5a059" height={90} />
            <div className="flex justify-between text-[8px] text-gray-600 mt-1">
              {["$0","$2.5M","$5M","$7.5M","$10M","$12.8M"].map(v => <span key={v}>{v}</span>)}
            </div>
          </div>
        </div>

        {/* Bottom: lead scoring + call logs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white text-[10px] font-bold">LEAD SCORING PANEL</p>
              <span className="text-[8px] text-[#c5a059]">Sort by High Score ▼</span>
            </div>
            <div className="space-y-1.5">
              {[
                { score: 94, name: "Sarah Chen", co: "Innovate Solutions", close: "Close 10" },
                { score: 89, name: "John Doe", co: "NexaCorp", close: "Oct 57" },
                { score: 82, name: "Sean Doe", co: "Engagement", close: "Oct 20" },
                { score: 80, name: "Mark Ray", co: "NexaCorp", close: "Oct 0" },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#c5a059] font-black text-[10px] w-5">{l.score}</span>
                  <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[8px] text-[#c5a059] font-bold flex-shrink-0">{l.name[0]}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[9px] font-medium truncate">{l.name}</p>
                    <p className="text-gray-500 text-[8px] truncate">{l.co}</p>
                  </div>
                  <div className="w-12 h-0.5 bg-[#c5a059]/30 rounded-full flex-shrink-0">
                    <div className="h-full bg-[#c5a059] rounded-full" style={{ width: `${l.score}%` }} />
                  </div>
                  <span className="text-[8px] text-gray-500 flex-shrink-0">{l.close}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#131313] rounded-xl p-3 border border-white/5">
            <p className="text-white text-[10px] font-bold mb-2">RECENT CALL LOGS</p>
            <div className="space-y-2 overflow-hidden" style={{ maxHeight: 100 }}>
              {callLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 text-[9px] border-b border-white/5 pb-1.5">
                  <span className="text-gray-500 w-12 flex-shrink-0">{log.time}</span>
                  <span className="font-bold flex-shrink-0" style={{ color: log.color }}>{log.type}</span>
                  <span className="text-gray-400 truncate">{log.contact} · {log.company}</span>
                  <span className="text-gray-600 flex-shrink-0">{log.dur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
