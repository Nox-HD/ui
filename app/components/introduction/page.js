'use client'
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div   initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}  >
      <article className="prose prose-slate prose-invert prose-lg">
      <h1>Welcome to NoxHD UI</h1>
      <p>An Open-Source Commitment by NoxHD</p>
        <div>
          <h2>Our Mission</h2>
          <p>
            At NoxHD, we believe in the power of open-source collaboration to drive innovation. NoxHD UI is more than just a collection of components—it&apos;s a commitment to enhancing the front-end development experience through community-driven solutions.
          </p>

          <div>
            <h2>Our Technology Stack</h2>
            <p>
              NoxHD UI leverages a modern tech stack to provide robust and efficient components. Here are the key technologies we use:
            </p>
            <ul>
              <li><strong>React</strong>: A popular library for building user interfaces with a component-based architecture.</li>
              <li><strong>Next.js</strong>: A React framework that enables server-side rendering, static site generation, and more.</li>
              <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for building custom designs quickly and efficiently.</li>
              <li><strong>Framer Motion</strong>: A powerful library for animations and transitions in React applications.</li>
              <li><strong>ShadCN UI</strong>: A component library that provides pre-built, customizable UI components.</li>
            </ul>
          </div>
          
          <h2>Empowering Developers</h2>
          <p>
            We designed NoxHD UI to be a versatile toolkit for developers. Whether you&apos;re an experienced developer or just starting out, our library aims to streamline your workflow and enhance your creativity. Our components are built to be both functional and visually appealing, helping you create stunning interfaces with ease.
          </p>
          
          <h2>A Resource for Students</h2>
          <p>
            For students and learners, NoxHD UI serves as an educational tool, offering a hands-on approach to understanding modern UI design. We hope that our library will be a valuable resource in your studies, providing practical examples and best practices in front-end development.
          </p>
          
          <h2>Future Aspirations</h2>
          <p>
            NoxHD UI is just the beginning. We dream of expanding our library to support other frameworks and platforms, continuously adapting to the evolving needs of the development community. Our goal is to create a living resource that grows with its users and their feedback.
          </p>
          
          <h2>Join the Movement</h2>
          <p>
            We invite you to be a part of this exciting journey. Your contributions, feedback, and ideas are vital to shaping the future of NoxHD UI. Together, we can build something extraordinary that benefits the entire community.
          </p>
          
          <h2>Our Commitment</h2>
          <p>
            Our commitment extends beyond just providing tools; we aim to foster a vibrant and supportive community around NoxHD UI. By collaborating and sharing knowledge, we can collectively drive progress and achieve new heights in front-end development.
          </p>
        </div>
      </article>
    </motion.div>
  );
}
