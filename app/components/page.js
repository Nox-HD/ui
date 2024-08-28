'use client'
import Image from "next/image";
import Element from "./animated-card/element";
import Link from "next/link";
import MagneticIcons from "./magnetic-icons/element";
import { motion, AnimatePresence } from "framer-motion";

export default function DocsHome() {
    return (
      <motion.div   initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}  >
        <article className="prose prose-slate prose-invert prose-lg pb-12">
          <h1>All Components</h1>
        </article>
        <div className="grid grid-cols-2 gap-10">
          <Link href='/components/animated-card'>
            <div className="rounded-xl">
              <div className="border min-w-full min-h-96 rounded-lg p-1 overflow-hidden">
                <motion.div whileHover={{ scale: 1.03}}  transition={{ duration: 0.2 }} >
                  <Image src="/1.png" width={1000} height={1000} alt="animated-card" />
                </motion.div>
              </div>
              <div className="p-5"> 
                <h1 className="text-3xl font-bold">Animated Card</h1>
                <p className="pt-2">Colorful Gradient Animation & Text Fade-in when Hovering</p>
              </div>
            </div>
          </Link>
          <Link href='/components/magnetic-icons'>
            <div className="rounded-xl">
              <div className="border min-w-full min-h-96 rounded-lg p-1 overflow-hidden">
              <motion.div whileHover={{ scale: 1.03}} transition={{ duration: 0.2 }} >
                  <Image src="/2.png" width={1000} height={1000} alt="magnetic icons"/>
                </motion.div>
              </div>
              <div className="p-5"> 
                <h1 className="text-3xl font-bold">Magnetic Icons</h1>
                <p className="pt-2">Interactive icons with magnetic hover effects.</p>
              </div>
            </div>
          </Link>
          <Link href='/components/macos-dock'>
            <div className="rounded-xl">
              <div className="border min-w-full min-h-96 rounded-lg p-1 overflow-hidden">
              <motion.div whileHover={{ scale: 1.03}} transition={{ duration: 0.2 }} >
                  <Image src="/3.png" width={1000} height={1000} alt="macos dock"/>
              </motion.div>
              </div>
              <div className="p-5"> 
                <h1 className="text-3xl font-bold">macOS Dock</h1>
                <p className="pt-2">The modern dock displayed in macOS Sierra and above</p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div> 
    );
  }