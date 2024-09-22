import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const sections = [
    {
      title: 'Getting Started',
      links: [
        { href: '/components/introduction', label: 'Introduction' },
      ],
    },
    {
      title: 'Installation',
      links: [
        { href: '/components/install-nextjs', label: 'Install Next.js' },
        { href: '/components/install-tailwind', label: 'Install Tailwind CSS' },
      ],
    },
    {
      title: 'All Components',
      links: [
        { href: '/components/animated-grid-bg', label: 'Animated Grid Background' },
        { href: '/components/animated-card', label: 'Animated Card' },
        { href: '/components/magnetic-icons', label: 'Magnetic Icons' },
        { href: '/components/awards-carousel', label: 'Awards Carousel' },
        { href: '/components/magical-bento-grid', label: 'Magical Bento Grid' },
        { href: '/components/simple-bento-grid', label: 'Simple Bento Grid' },
        { href: '/components/infinite-tunnel', label: 'Infinite Tunnel' },
        { href: '/components/macos-dock', label: 'macOS Dock' },
        { href: '/components/team-carousel', label: 'Team Carousel' },
        { href: '/components/modern-sidebar', label: 'Modern Sidebar' },
        { href: '/components/image-carousel', label: 'Image Carousel' },
        { href: '/components/swipe-cards', label: 'Swipe Cards' },
      ].sort((a, b) => a.label.localeCompare(b.label)), // Sort links alphabetically by label
    },
    {
      title: 'Text Effects',
      links: [
        { href: '/components/staggered-text', label: 'Staggered Text' },
        { href: '/components/encrypted-text', label: 'Encrypted Text' },
      ],
    },
  ];

  return (
    <div className="h-screen">
      <div className="flex flex-col py-24 pl-16 space-y-2 overflow-auto overflow-x-hidden">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="pb-2 -ml-2 font-bold">{section.title}</div>
            <div className="flex flex-col"> {/* Removed extra spacing to keep layout as requested */}
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="mb-2 text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3" // Adjusted margin to provide spacing
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
