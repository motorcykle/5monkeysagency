import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.from(
        ".animated-word",
        {
          opacity: 0, // Start with opacity 0
          x: "100vw", // Start from 100% of the viewport width (off-screen to the right)
          y: "100vh", // Start from 100% of the viewport height (off-screen from the bottom)
          ease: "power2.inOut", // Smooth easing for entry
          duration: 1.5, // Duration of animation
        },
        0
      );
  
      // End state: move to the center with full opacity
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1, // End with full opacity
          x: "0", // End at the original horizontal position (center)
          y: "0", // End at the original vertical position (center)
          ease: "power2.inOut", // Smooth easing for reset
          duration: 1.5, // Duration for final state
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section className="min-h-screen w-screen relative">
      <div className="py-24 px-2 flex flex-col items-center gap-5 max-w-4xl mx-auto text-center">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to 5monkeys
        </p>

        {/* Single Text Animation */}
        <div
          ref={containerRef}
          className="animated-title flex items-center justify-center relative min-h-40 w-full text-center text-7xl uppercase leading-[.8] text-black sm:px-32 md:text-[6rem]"
        >
          <span className="animated-word special-font font-zentry font-black opacity-0 transform absolute top-0">
            This <b>i</b>s <b>h</b>ow <br /> w<b>e</b> do i<b>t</b>.
          </span>
        </div>

        <div className="space-y-2 font-circular-web text-lg">
          <p>
            For more than a decade, we have helped startups and incumbents grow
            like crazy by using our carefully balanced blend of digital
            strategy, software engineering, and open source software.
          </p>
          <p className="text-gray-500 mt-1">
            We are a team of 20+ senior software engineers, designers, and
            digital strategists delivering scalable digital platforms for large
            e-commerce players and ambitious startups.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen relative" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
          <img
            src="/src/assets/files/vlcsnap-2016-02-08-16h47m14s146.png"
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
