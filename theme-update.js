const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/about/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/solutions/page.tsx',
  'src/app/solutions/ai-powered-crm/page.tsx',
  'src/app/solutions/document-processing/page.tsx',
  'src/app/solutions/sales/page.tsx',
  'src/app/solutions/support/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/terms/page.tsx'
];

const replacements = [
  { regex: /bg-black/g, replacement: 'bg-[var(--navy)]' },
  { regex: /bg-\[#080808\]/g, replacement: 'bg-[var(--navy-2)]' },
  { regex: /bg-\[#111\]/g, replacement: 'bg-[var(--navy-3)]' },
  { regex: /bg-\[#131313\]/g, replacement: 'bg-[var(--navy-3)]' },
  { regex: /text-\[#c5a059\]/g, replacement: 'text-[var(--teal)]' },
  { regex: /text-\[#c9a96e\]/g, replacement: 'text-[var(--teal)]' },
  { regex: /border-\[#c5a059\]/g, replacement: 'border-[var(--teal)]' },
  { regex: /border-\[#c9a96e\]/g, replacement: 'border-[var(--teal)]' },
  { regex: /bg-\[#c5a059\]/g, replacement: 'bg-[var(--teal)]' },
  { regex: /bg-\[#c9a96e\]/g, replacement: 'bg-[var(--teal)]' },
  { regex: /gold-btn/g, replacement: 'btn-primary' },
  { regex: /btn-gold/g, replacement: 'btn-primary' },
  { regex: /section-label/g, replacement: 'eyebrow' },
  { regex: /section-title/g, replacement: 'h-section' },
  { regex: /text-gray-400/g, replacement: 'text-[var(--text-muted)]' },
  { regex: /text-gray-300/g, replacement: 'text-[var(--text-muted)]' },
  { regex: /text-white/g, replacement: 'text-[var(--text)]' },
  { regex: /border-white\/10/g, replacement: 'border-[rgba(100,150,255,0.1)]' },
  { regex: /border-white\/\[0\.06\]/g, replacement: 'border-[rgba(100,150,255,0.06)]' },
  { regex: /border-white\/\[0\.04\]/g, replacement: 'border-[rgba(100,150,255,0.04)]' },
  { regex: /border-white\/5/g, replacement: 'border-[rgba(100,150,255,0.05)]' },
  { regex: /bg-white\/5/g, replacement: 'bg-[rgba(100,150,255,0.05)]' },
  { regex: /text-white\/40/g, replacement: 'text-[var(--text-muted)]' },
  { regex: /text-white\/60/g, replacement: 'text-[var(--text-muted)]' },
  { regex: /text-white\/80/g, replacement: 'text-[var(--text)]' },
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
