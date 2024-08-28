'use client'
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from 'framer-motion';

export default function InstallTailwind() {
  return (
    <motion.article   initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}   className="prose prose-slate prose-invert prose-lg">

      <h1>Install Tailwind CSS</h1>
      <p>Follow these steps to install Tailwind CSS in your Next.js project.</p>

      <div>
        <h2>1. Install Tailwind CSS</h2>
        <p>
          Begin by installing Tailwind CSS and its peer dependencies using npm or yarn:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            npm install -D tailwindcss postcss autoprefixer
        </SyntaxHighlighter>
        <p>
          Or if you&apos;re using yarn:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            yarn add -D tailwindcss postcss autoprefixer
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>2. Initialize Tailwind CSS</h2>
        <p>
          Next, initialize Tailwind CSS by generating a `tailwind.config.js` and `postcss.config.js` file:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            npx tailwindcss init -p
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>3. Configure Tailwind in your CSS</h2>
        <p>
          Open your `tailwind.config.js` file and add the paths to all of your template files:
        </p>
        <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
{`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>4. Add Tailwind to your CSS</h2>
        <p>
          Create a CSS file (e.g., `globals.css`) in your `styles` folder and add the following lines to include Tailwind&apos;s base, components, and utilities:
        </p>
        <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>5. Import the CSS File</h2>
        <p>
          Finally, import the `globals.css` file in your `pages/_app.js` file:
        </p>
        <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
{`import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;`}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>6. Start Your Development Server</h2>
        <p>
          You can now start your development server to see Tailwind CSS in action:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            npm run dev
        </SyntaxHighlighter>
        <p>
          Or, if you are using yarn:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            yarn dev
        </SyntaxHighlighter>
      </div>

      <p>
        Tailwind CSS should now be up and running in your Next.js project. You can start using Tailwind classes to style your components!
      </p>
    </motion.article>
  );
}
