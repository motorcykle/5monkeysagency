
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { GiMonkey } from "react-icons/gi";
import { useWindowScroll } from "react-use";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      headerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!headerRef.current) return;
    
    gsap.to(headerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <section className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo + Welcome */}
          <section className="flex items-center gap-7">
            <GiMonkey className="w-10 h-10 text-violet-50" />
            <div 
              className="group relative z-10 overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black md:flex hidden items-center justify-center gap-1"
            >
              <p className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-230%] group-hover:skew-y-12">
                  Welcome to 5Monkeys agency!
                </span>
                <span className="absolute translate-y-[164%] skew-y-14 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Welcome to 5Monkeys agency! 
                </span>
              </p>
            </div>
          </section>

          {/* Nav links */}
          <section className="flex h-full items-center">
            <div className="hidden md:block">
              <a className="nav-btn" href="#about">About</a>
              <a className="nav-btn" href="#contact">Contact</a>
            </div>
          </section>
        </nav>
      </section>
    </header>
  );
}