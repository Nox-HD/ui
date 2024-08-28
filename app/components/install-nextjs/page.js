'use client'
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from 'framer-motion';

export default function InstallNextJS() {
  return (
    <motion.article   initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}   className="prose prose-slate prose-invert prose-lg">

      <h1>Install Next.js</h1>
      <p>Follow these steps to install and set up Next.js in your project.</p>

      <div>
        <h2>1. Create a New Next.js Project</h2>
        <p>
          First, make sure you have Node.js and npm or yarn installed. Then, you can create a new Next.js project using the following command:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            npx create-next-app@latest my-nextjs-app
        </SyntaxHighlighter>
        <p>
          Replace my-nextjs-app with your desired project name.
        </p>
      </div>

      <div>
        <h2>2. Navigate to Your Project Directory</h2>
        <p>
          Once the project is created, navigate into your project directory using:
        </p>
        <SyntaxHighlighter language="powershell" style={atomOneDark} customStyle={{
          backgroundColor: "#18181b",
          borderRadius: "10px",
          padding: "25px",
          width: "80%"
        }}>
            cd my-nextjs-app
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>3. Start the Development Server</h2>
        <p>
          To start the development server and see your Next.js app in action, run:
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
        <p>
          Your app will be available at <a href="http://localhost:3000">http://localhost:3000</a>.
        </p>
      </div>

      <div>
        <h2>4. Explore Your Next.js Project</h2>
        <p>
          Your Next.js project structure will include:
        </p>
        <p>
          <span>pages/:</span> Contains your page components.
        </p>
        <p>
          <span>public/:</span> Static files like images.
        </p>
        <p>
          <span>styles/:</span> CSS and styling files.
        </p>
      </div>
    </motion.article>
  );
}
