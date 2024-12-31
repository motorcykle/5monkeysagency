import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

export default function Hero () {
  // useGSAP(() => {
  //   gsap.set("#vid-frame", {
  //     clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
  //     borderRadius: "0% 0% 40% 10%",
  //   });
  //   gsap.from("#vid-frame", {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     borderRadius: "0% 0% 0% 0%",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#vid-frame",
  //       start: "center center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });
  // });

  useGSAP(() => {
    gsap.set("#vid-frame", {
      clipPath: "polygon(10% 0, 90% 0, 80% 100%, 5% 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#vid-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: "#vid-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  
  return <section className="relative h-dvh w-screen overflow-x-hidden">
    {/* Hero vid bg */}
    <div id="vid-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75">
      <div>
        <video
          src={"/files/videoplayback.mp4"}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover scale-150 object-center pointer-events-none"
        />
      </div>

      {/* Hero Content */}

      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            5MO<b>N</b>EKYS
          </h1>

          <p className="mb-5 max-w-64 font-robert-regular text-xl text-blue-100">
            A Digital Agency in Stockholm.
          </p>

          <a href={"#contact"}>
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

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
        <b>A</b>GENCY
      </h1>
    </div>

    {/* Hero under text */} 
    <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
      <b>A</b>gency
    </h1>
  </section>
}