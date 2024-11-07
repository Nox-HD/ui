"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

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
        { href: "/components/animated-nav-bar", label: "Animated Navbar" },
        {
          href: "/components/scrollable-photo-gallery",
          label: "Scrollable Photo Gallery",
        },
        {
          href: "/components/retro-navigation",
          label: "Retro Navigation",
        },
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
    <div className="h-screen">
      <div className="flex flex-col py-24 pl-16 space-y-2 overflow-auto overflow-x-hidden">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="pb-2 -ml-2 font-bold">{section.title}</div>
            <div className="flex flex-col">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className={`
                    relative mb-2 text-sm transition-all duration-300 ease-in-out
                    hover:text-[#365377] hover:translate-x-3
                    ${
                      pathname === link.href + "/"
                        ? "text-[#365377] translate-x-3 before:absolute before:-left-4 before:top-0 before:h-full before:w-1 before:bg-[#365377] before:rounded-r-lg"
                        : "text-neutral-400"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
