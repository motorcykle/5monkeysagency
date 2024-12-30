import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState, ReactNode, MouseEvent } from "react";

// could create objects instead { img_src: string, website: string } but this is good
const clientsLinks: string[] = [
  "https://www.5monkeys.se/_app/assets/ginatricot.af215c48.svg",
  "https://www.5monkeys.se/_app/assets/obayaty.f16740fe.svg",
  "https://www.5monkeys.se/_app/assets/reasonstudios.17c01ff0.svg",
  "https://www.5monkeys.se/_app/assets/dn.b8d0cd89.svg",
  "https://www.5monkeys.se/_app/assets/arkivet.8988184a.svg",
  "https://www.5monkeys.se/_app/assets/bolist.fafc50db.svg",
  "https://www.5monkeys.se/_app/assets/wallism.2cc238ff.svg",
  "https://www.5monkeys.se/_app/assets/mojang.5fe5762d.svg",
];

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      "#title p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% bottom",
          toggleActions: "play none none none",
        },
      }
    );

  });

  return (
    <section ref={containerRef} className="relative bg-black">
      <div className="mx-auto max-w-7xl py-16 px-4">
        <div id="title">
          <p className="font-circular-web text-lg md:text-xl text-blue-50">
            Some of our clients
          </p>
          <p className="max-w-md font-circular-web text-base md:text-lg text-zinc-500 opacity-50">
            Check out some of our clients that we've served.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full min-h-[50dvh] gap-4 py-12">
          {clientsLinks.map((client) => (
            <BentoTilt key={client}>
              <div className="relative size-full min-h-[4rem]">
                <img
                  src={client}
                  className="absolute left-0 top-0 size-full min-h-[4rem] md:p-6 lg:p-8 p-3 object-contain object-center cursor-pointer"
                  alt="Client logo"
                />
              </div>
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
}

interface BentoTiltProps {
  children: ReactNode;
}

function BentoTilt({ children }: BentoTiltProps) {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || window.innerWidth < 768) return; // Disable tilt for touch devices

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 50;
    const tiltY = (relativeX - 0.5) * -50;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className=" overflow-hidden rounded-md transition-transform duration-300 ease-out bg-blue-50"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}
