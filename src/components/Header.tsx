"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GeistMono } from "geist/font/mono";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Header() {
  const slider = useRef<HTMLDivElement>(null);
  const content1 = useRef<HTMLDivElement>(null);
  const content2 = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (content1.current && content2.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(content1.current, { xPercent: xPercent });
      gsap.set(content2.current, { xPercent: xPercent });
      xPercent += 0.025 * direction;
    }
    requestAnimationFrame(animate);
  };

  return (
    <header className="flex flex-col gap-1 w-full max-w-[500px] mx-auto">
      <nav className="flex items-center justify-center w-full py-2 rounded-md bg-neutral-200 bg-opacity-80">
        <a
          href="https://x.com/itsjay_us"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium hover:text-neutral-600 transition-colors duration-300"
        >
          @itsjay.us
        </a>
      </nav>
      <div className="flex item-center w-full rounded-md py-2 bg-neutral-200 bg-opacity-80 overflow-hidden relative">
        <div
          className="absolute left-0 top-0 h-full w-12 z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(229, 229, 229, 0) 0%, rgba(229, 229, 229, 1) 90%)",
          }}
        />

        <div ref={slider} className="flex relative">
          <p
            ref={content1}
            className={`${GeistMono.className} text-xs text-neutral-500 whitespace-nowrap`}
          >
            HTML, SASS, React, Next.js, Typescript, Prisma, Tailwind CSS, GSAP,
            Framer Motion, Contentful, Vercel, Figma, Supabase,{" "}
          </p>

          <p
            ref={content2}
            className={`${GeistMono.className} text-xs text-neutral-500 whitespace-nowrap absolute left-full`}
          >
            HTML, SASS, React, Next.js, Typescript, Prisma, Tailwind CSS, GSAP,
            Framer Motion, Contentful, Vercel, Figma, Supabase,{" "}
          </p>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-12 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(229, 229, 229, 0) 0%, rgba(229, 229, 229, 1) 90%)",
          }}
        />
      </div>
    </header>
  );
}
