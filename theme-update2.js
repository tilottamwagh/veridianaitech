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
  'src/app/terms/page.tsx',
  'src/app/layout.tsx'
];

const replacements = [
  { regex: /card-dark/g, replacement: 'glass-card' },
  { regex: /ghost-btn/g, replacement: 'btn-outline' },
  { regex: /bg-black text-white/g, replacement: 'text-[var(--text)]' },
  { regex: /text-white/g, replacement: 'text-[var(--text)]' },
  { regex: /bg-black/g, replacement: 'bg-[var(--navy)]' },
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
