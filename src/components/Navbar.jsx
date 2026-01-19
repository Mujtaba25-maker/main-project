import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { label: "Overview", id: "CourseIntro" },
  { label: "Curriculum", id: "CourseCurriculum" },
  { label: "Instructor", id: "InstructorSection" },
  { label: "Testimonials", id: "AlumniCompanies" },
  { label: "Pricing", id: "CourseCurriculum" },
  { label: "FAQ", id: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && window.scrollY >= section.offsetTop - 140) {
          setActive(link.id);
        }
      });

      // Hero section active when at top
      if (window.scrollY < 200) {
        setActive("HeroSection");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between">

        {/* LOGO → SCROLL TO HERO */}
        <div
          onClick={() => scrollTo("HeroSection")}
          className={`font-bold text-lg cursor-pointer flex items-center gap-2 transition ${
            active === "HeroSection"
              ? "text-purple-600"
              : "hover:text-purple-600"
          }`}
        >
          🎓 Educore
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`cursor-pointer transition ${
                active === link.id
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <button className="hidden lg:flex items-center bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2.5 rounded-lg text-sm font-medium">
          Enroll Now
          <FaArrowRight className="ml-3 bg-white text-black p-1 w-5 h-5 rounded" />
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden mt-3 bg-white rounded-xl shadow-md px-6 py-6 max-w-7xl mx-auto">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`cursor-pointer transition ${
                  active === link.id
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
