'use client'
import { useEffect } from "react";

export default function NavWithCursor() {
  useEffect(() => {
    const links = document.querySelectorAll("nav > .link");
    const cursor = document.querySelector(".cursor");

    const animateLink = (e) => {
      const span = e.target.querySelector("span");
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = e.target;

      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      span.style.transform = e.type === "mouseleave" ? "" : `translate(${xMove}px, ${yMove}px)`;
    };

    const editCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    links.forEach((link) => {
      link.addEventListener("mousemove", animateLink);
      link.addEventListener("mouseleave", animateLink);
    });
    window.addEventListener("mousemove", editCursor);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mousemove", animateLink);
        link.removeEventListener("mouseleave", animateLink);
      });
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 relative overflow-hidden">
      <nav className="flex flex-col md:flex-row justify-around items-center absolute inset-0">
      <ul className="flex flex-col md:flex-row justify-around items-center">
        {links.map((link, index) => (
          <li key={index} className="text-white text-xl md:text-2xl uppercase font-semibold tracking-wide">
            <a
              href={link.href}
              className="hover:text-gray-400 transition duration-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      </nav>
      <div className="cursor fixed w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"></div>
      <style jsx>{`
        .cursor {
          transform: translate(-50%, -50%);
          transition: transform 0.3s ease;
        }
        .link:hover ~ .cursor {
          transform: translate(-50%, -50%) scale(8);
        }
        .link span {
          display: inline-block;
          transition: transform 0.1s linear;
        }
      `}</style>
    </div>
  );
}
