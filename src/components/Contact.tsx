import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const ImageClipBox = ({ src, clipClass }: { src: string, clipClass: string} ) => (
  <div className={clipClass + " opacity-55"}>
    <img src={src} />
  </div>
);

export default function Contact () {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% bottom",
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
          duration: 1, // Duration of animation
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
          duration: 1, // Duration for final state
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return <section className="py-24" id="contact">
    <div ref={containerRef} className="container relative overflow-hidden rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden mx-auto max-w-7xl">
      <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
        <ImageClipBox
          src="/img/MV5BNDNjZjJkZjItNGRhMS00ZTM0LWE5NDAtMTRhZDI5NjY0YzExXkEyXkFqcGc@._V1_.jpg"
          clipClass="contact-clip-path-1"
        />
        <ImageClipBox
          src="/img/MV5BYTBhODU3YmEtMTFjMi00YTg2LTgwMzUtYWU3NGVhNjVlMGYxXkEyXkFqcGc@._V1_.jpg"
          clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
        />
      </div>

      <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        <ImageClipBox
          src="/img/vlcsnap-2016-02-08-16h37m00s154.png"
          clipClass="absolute md:scale-125"
        />
        <ImageClipBox
          src="/img//img/MV5BYTBhODU3YmEtMTFjMi00YTg2LTgwMzUtYWU3NGVhNjVlMGYxXkEyXkFqcGc@._V1_.jpg"
          clipClass="sword-man-clip-path md:scale-125"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className=" font-general text-[10px] uppercase">
        Get in touch!
        </p>

        <div
          className="flex   items-center font-zentry justify-center relative min-h-12 md:min-h-36 my-5 w-full text-center text-3xl uppercase leading-[.8] text-blue-50 md:text-[6rem]"
        >
          <span className="animated-word special-font font-zentry font-black opacity-0 transform absolute top-0">
            hello@5monkeys.<b>se</b>
          </span>
        </div>

        <a href="mailto:hello@5monkeys.se">
          <button className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-yellow-300 flex-center gap-1">
            <TiLocationArrow />
            <p className="relative inline-flex overflow-hidden font-general text-xs uppercase">
              <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                contact us
              </span>
              <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                contact us
              </span>
            </p>
          </button>
        </a>
      </div>
    </div>
  </section>
}
