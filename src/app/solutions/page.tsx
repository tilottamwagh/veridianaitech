"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Solutions() {
  const solutions = [
    {
      id: "voice-agents",
      title: "AI Voice Agents",
      icon: Bot,
      description: "Deploy human-like conversational AI that seamlessly handles inbound inquiries, outbound outreach, and complex customer support scenarios 24/7.",
      features: [
        "Natural language understanding",
        "Multi-language support",
        "CRM integration (Salesforce, HubSpot)",
        "Emotion and sentiment analysis"
      ]
    },
    {
      id: "process-automation",
      title: "Intelligent Process Automation",
      icon: Zap,
      description: "Eliminate repetitive manual tasks. Our intelligent RPA bots learn your workflows and execute them with 100% accuracy and zero downtime.",
      features: [
        "Invoice & document processing",
        "Data entry & migration",
        "Automated reporting",
        "Workflow orchestration"
      ]
    },
    {
      id: "enterprise-software",
      title: "Custom Enterprise Software",
      icon: Cpu,
      description: "When off-the-shelf solutions fail, we build highly scalable, secure, and performant custom software tailored to your operational needs.",
      features: [
        "Cloud-native architecture",
        "Microservices design",
        "Legacy system modernization",
        "Advanced analytics dashboards"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-600/5 rounded-[100%] blur-3xl"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 relative z-10"
        >
          Our <span className="text-gold-500">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto relative z-10"
        >
          Comprehensive AI and automation capabilities designed to modernize your infrastructure and multiply your workforce&apos;s output.
        </motion.p>
      </div>

      {/* Solutions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-navy-900 border border-gold-500/30 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">{solution.title}</h2>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3 pt-4">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--text-muted)]">
                      <CheckCircle2 className="w-5 h-5 text-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                  >
                    Discuss this solution <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-[rgba(100,150,255,0.1)] bg-navy-900 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
                  {/* Decorative Elements replacing actual screenshots */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-8 flex flex-col gap-4 opacity-50">
                       <div className="h-8 w-1/3 bg-[rgba(100,150,255,0.05)] rounded-md"></div>
                       <div className="flex-1 bg-[rgba(100,150,255,0.05)] rounded-xl flex items-center justify-center">
                          <solution.icon className="w-24 h-24 text-[var(--text)]/10" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
