"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const sections = [
    {
      title: "Getting Started",
      links: [{ href: "/components/introduction", label: "Introduction" }],
    },
    {
      title: "Installation",
      links: [
        { href: "/components/install-nextjs", label: "Install Next.js" },
        { href: "/components/install-tailwind", label: "Install Tailwind CSS" },
      ],
    },
    {
      title: "All Components",
      links: [
        {
          href: "/components/animated-grid-bg",
          label: "Animated Grid Background",
        },
        { href: "/components/animated-card", label: "Animated Card" },
        { href: "/components/magnetic-icons", label: "Magnetic Icons" },
        { href: "/components/awards-carousel", label: "Awards Carousel" },
        { href: "/components/magical-bento-grid", label: "Magical Bento Grid" },
        { href: "/components/simple-bento-grid", label: "Simple Bento Grid" },
        { href: "/components/infinite-tunnel", label: "Infinite Tunnel" },
        { href: "/components/macos-dock", label: "macOS Dock" },
        { href: "/components/team-carousel", label: "Team Carousel" },
        { href: "/components/modern-sidebar", label: "Modern Sidebar" },
        { href: "/components/image-carousel", label: "Image Carousel" },
        { href: "/components/swipe-cards", label: "Swipe Cards" },
        { href: "/components/image-zoom", label: "Image Zoom" },
        { href: "/components/glitch-image", label: "Glitch Image" },
        {
          href: "/components/scrollable-photo-gallery",
          label: "Scrollable Photo Gallery",
        },
        { href: "/components/retro-navigation", label: "Retro Navigation" },
      ].sort((a, b) => a.label.localeCompare(b.label)),
    },
    {
      title: "Text Effects",
      links: [
        { href: "/components/staggered-text", label: "Staggered Text" },
        { href: "/components/encrypted-text", label: "Encrypted Text" },
        { href: "/components/mysterious-text", label: "Mysterious Text" },
        { href: "/components/typewriter-text", label: "Typewriter Text" },
      ],
    },
  ];

  return (
    <div className="min-h-lvh p-10">
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <div className="pb-2 font-bold text-xl">{section.title}</div>
          <div className="flex flex-col">
            {section.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="mb-2 text-neutral-400 text-md hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const HeaderM = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <main className="relative visible md:invisible">
      <div className="header min-h-20 md:min-h-14 bg-black/50 backdrop-blur-3xl grid grid-cols-2 md:grid-cols-6 fixed z-20">
        <div className="flex content-center items-center">
          <Link href="/" className="flex content-center items-center mx-10">
            <Image className="invert" src="/1.svg" width={150} height={0} />
          </Link>
        </div>
        <div
          className="flex justify-end h-full items-center pr-14 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <Image className="invert" src="/menu.svg" width={30} height={0} />
        </div>
      </div>
      {toggle && (
        <div className="fixed top-[4.8rem] inset-0 z-50 bg-black overflow-y-auto text-white">
          <Sidebar />
        </div>
      )}
    </main>
  );
};

export default HeaderM;
