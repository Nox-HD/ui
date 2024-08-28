'use client'
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from 'framer-motion';

export default function InstallShadCN() {
    
    const codeString = `const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
}`
    
    return (
      <motion.article   initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}   className="prose prose-slate prose-invert prose-lg">

            <h1>Install and Configure ShadCN</h1>
            <p>Follow these steps to install and set up ShadCN in your project.</p>

            <div>
                <h2>1. Initialize ShadCN</h2>
                <p>
                    Run the ShadCN CLI command to set up your project:
                </p>
                <SyntaxHighlighter
                    language="powershell"
                    style={atomDark}
                    customStyle={{
                        borderRadius: "10px",
                        padding: "25px",
                        width: "80%"
                    }}
                >
                    {`npx shadcn-ui@latest init`}
                </SyntaxHighlighter>
            </div>

            <div>
                <h2>2. Configure components.json</h2>
                <p>
                    You will be asked a few questions to configure `components.json`. Choose the options based on your preferences:
                </p>
                <SyntaxHighlighter
                    language=""
                    style={atomDark}
                    customStyle={{
                        borderRadius: "10px",
                        padding: "25px",
                        width: "80%"
                    }}
                >
                    {`Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? › no / yes`}
                </SyntaxHighlighter>
            </div>

            <div>
                <h2>3. Configure Tailwind in \`tailwind.config.js\`</h2>
                <SyntaxHighlighter
                    language="jsx"
                    style={atomDark}
                    customStyle={{
                        borderRadius: "10px",
                        padding: "25px",
                        width: "80%"
                    }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <div>
                <h2>4. App Structure</h2>
                <p>
                    Here&apos;s a recommended structure for your Next.js app:
                </p>
                <SyntaxHighlighter
                    language="bash"
                    style={atomDark}
                    customStyle={{
                        borderRadius: "10px",
                        padding: "25px",
                        width: "80%"
                    }}
                >
                    {`├── app
│   ├── layout.jsx
│   └── page.jsx
├── components
│   ├── ui
│   │   ├── alert-dialog.jsx
│   │   ├── button.jsx
│   │   ├── dropdown-menu.jsx
│   │   └── ...
│   ├── main-nav.jsx
│   ├── page-header.jsx
│   └── ...
├── lib
│   └── utils.js
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── jsconfig.json`}
                </SyntaxHighlighter>
            </div>
        </motion.article>
    );
}
