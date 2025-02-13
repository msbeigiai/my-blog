const n=`---
title: "Advanced Markdown Example"
date: "2023-10-01"
excerpt: "This is an example of advanced Markdown rendering."
coverImage: "/images/example-cover.jpg"
tags:
  - Markdown
  - React
---

This is an example of rendering **Markdown** content with advanced features.

## Code Block Example

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
\`\`\`

---

### Dependencies

Ensure you have the following dependencies installed:

\`\`\`bash
npm install react-markdown remark-gfm react-syntax-highlighter
\`\`\`
`;export{n as default};
