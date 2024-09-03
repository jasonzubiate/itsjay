"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { GeistMono } from "geist/font/mono";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StackSlider() {
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
      xPercent += 0.01 * direction;
    }
    requestAnimationFrame(animate);
  };

  return (
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
          className={`${GeistMono.className} text-xs text-neutral-500 whitespace-nowrap uppercase pr-1.5`}
        >
          HTML, SASS, React, Next.js, Typescript, Prisma, Tailwind CSS, GSAP,
          Framer Motion, Contentful, Vercel, Figma, Supabase,
        </p>

        <p
          ref={content2}
          className={`${GeistMono.className} text-xs text-neutral-500 whitespace-nowrap uppercase absolute left-full pr-1.5`}
        >
          HTML, SASS, React, Next.js, Typescript, Prisma, Tailwind CSS, GSAP,
          Framer Motion, Contentful, Vercel, Figma, Supabase,
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
  );
}
