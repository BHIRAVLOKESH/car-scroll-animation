"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const carRef = useRef(null);
  const trackRef = useRef(null);

  const headline = "WELCOME ITZFIZZ";

  useGSAP(() => {
    // Initial Intro Animation
    const tl = gsap.timeline();

    tl.to(".char", {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
    })
      .to(".stat-card", {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.4)",
      }, "-=0.6");

    // Scroll-based Animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=2500",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    scrollTl
      .to(trackRef.current, {
        scaleX: 1,
        ease: "none",
      })
      .to(carRef.current, {
        x: "110vw",
        ease: "power1.inOut",
      }, 0)
      .to(".char", {
        opacity: 0.1,
        stagger: 0.02,
        y: -10,
        filter: "blur(10px)",
      }, 0)
      .to(".stat-card", {
        opacity: 0,
        y: -100,
        stagger: 0.05,
        filter: "blur(5px)",
      }, 0)
      .from(".next-section-hint", {
        opacity: 0,
        y: 50,
        duration: 1,
      }, "-=0.5");

  }, { scope: container });

  return (
    <main ref={container} className="relative bg-background text-foreground selection:bg-accent selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 hero-gradient pointer-events-none" />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

        {/* Statistics Layer */}
        <div ref={statsRef} className="absolute inset-0 pointer-events-none z-20">
          <div className="container mx-auto h-full relative">
            <StatCard
              percentage="58%"
              description="Increase in performance"
              className="top-[12%] left-[5%] sm:left-[10%] border-accent/20"
            />
            <StatCard
              percentage="23%"
              description="Reduced Latency"
              className="bottom-[22%] left-[8%] sm:left-[15%] border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            />
            <StatCard
              percentage="99.9%"
              description="System Uptime"
              className="top-[8%] right-[5%] sm:right-[12%] border-purple-500/20"
            />
            <StatCard
              percentage="40%"
              description="Faster response time"
              className="bottom-[18%] right-[8%] sm:right-[15%] border-orange-500/20"
            />
          </div>
        </div>

        {/* Visual Content */}
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Animated Headline */}
          <div ref={headlineRef} className="text-center mb-32 select-none">
            <h1 className="text-[12vw] sm:text-[10vw] font-display font-bold leading-none text-white flex justify-center flex-wrap gap-x-12">
              {headline.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="whitespace-nowrap flex gap-x-4 sm:gap-x-8">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="char">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Car Track Experience */}
          <div className="w-full h-[2px] relative flex items-center max-w-5xl">
            {/* Infinite Track Line */}
            <div className="absolute inset-x-[-100vw] h-[1px] bg-white/10" />

            {/* Active Track Progress */}
            <div
              ref={trackRef}
              className="absolute left-[-100vw] right-0 h-[3px] bg-accent shadow-[0_0_15px_rgba(69,219,125,0.6)] origin-left scale-x-0"
            />

            {/* Car Container */}
            <div ref={carRef} className="absolute left-[-400px] z-30 pointer-events-none">
              <div className="relative group">
                <Image
                  src="/images/top view car.png"
                  alt="Premium Automobile"
                  width={450}
                  height={250}
                  className="object-contain drop-shadow-[0_20px_50px_rgba(69,219,125,0.3)] rotate-90 scale-75 sm:scale-100 transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                {/* Car Glow */}
                <div className="absolute inset-0 bg-accent/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-30 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Transition Hint */}
      <section className="h-screen flex items-center justify-center p-6 bg-black">
        <div className="next-section-hint text-center">
          <h2 className="text-4xl sm:text-7xl font-display font-bold text-white mb-6 uppercase tracking-widest opacity-50">
            Evolution <span className="text-accent italic">Defined</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the future of automotive digital interaction through scroll-driven storytelling.
          </p>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="p-8 border-t border-white/5 text-center text-white/20 text-sm tracking-[0.2em] font-light uppercase">
        © 2026 ITZFIZZ · Premium Experience
      </footer>
    </main>
  );
}

function StatCard({ percentage, description, className = "" }) {
  return (
    <div className={`stat-card absolute w-56 sm:w-64 p-6 glass rounded-[2rem] opacity-0 translate-y-20 scale-90 flex flex-col gap-1 transition-all duration-700 hover:border-white/40 hover:bg-white/10 ${className}`}>
      <span className="text-xs font-bold text-accent/60 tracking-[0.3em] uppercase mb-1">Impact</span>
      <h3 className="text-4xl sm:text-5xl font-bold font-display text-white">{percentage}</h3>
      <p className="text-[10px] sm:text-xs font-semibold text-white/50 leading-relaxed uppercase tracking-wider">{description}</p>

      {/* Decorative accent */}
      <div className="absolute top-4 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
      </div>
    </div>
  );
}