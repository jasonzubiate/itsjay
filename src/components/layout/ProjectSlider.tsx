"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Project } from "../feature/projects";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function ProjectSlider({ projects }: { projects: Project[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    if (isClient && sliderRef.current) {
      initializeCards();
    }
  }, [isClient, sliderRef]);

  const initializeCards = () => {
    const cards = gsap.utils.toArray(".card") as HTMLElement[];

    gsap.to(cards, {
      y: (i) => 0 + 20 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current as HTMLDivElement;
    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    const lastCard = cards.pop();

    if (lastCard) {
      gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.5,
        ease: "power3.out",
        onStart: () => {
          setTimeout(() => {
            slider.prepend(lastCard);
            initializeCards();
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000);
            setIsAnimating(false);
          }, 300);
        },
      });
    }
  };

  return (
    <>
      <div className="overflow-hidden w-screen h-full" onClick={handleClick}>
        <div
          ref={sliderRef}
          className="slider absolute top-[5vh] w-screen h-full overflow-hidden"
        >
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <div className="card-info">
                <div className="card-item">
                  <p>{project.date}</p>
                </div>
                <div className="card-item">
                  <p>{project.title}</p>
                </div>
                <div className="card-item">
                  <p>{project.link}</p>
                </div>
              </div>

              <div className="video-player">
                <ReactPlayer
                  url={project.video}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playing
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
