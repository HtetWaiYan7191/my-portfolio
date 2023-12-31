import { useState} from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`py-3 md:py-1 ${
        isMenuOpen ? `bg-inherit` : `bg-slate-900/80 backdrop-blur-sm`
      } fixed left-0 top-0 w-full  z-30 `}
    >
      <div
        className={`mobile-menu-bar md:hidden flex justify-end   ${
          isMenuOpen ? `opacity-50` : `flex`
        }`}
      >
        <BiMenuAltRight
          className="text-sky-500 text-5xl me-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div
        className={`menu-list-container flex flex-row-reverse z-20 justify-between  bg-slate-800/95 backdrop-blur-sm  ${
          isMenuOpen ? "left-[0]" : "-left-100"
        }`}
      >
        <div className="cross-container flex justify-end mt-4 me-3">
          <RxCross1
            className="text-4xl text-sky-700 hover:text-sky-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <ul className="list-container text-sky-700 font-semibold py-5 flex flex-col ">
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#introduction-section">Introduction</a>
          </li>
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#about-me-section">About Me</a>
          </li>
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#skill-section">Skills</a>
          </li>
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#project-section">Projects</a>
          </li>
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#testimonial-section">Testimonials</a>
          </li>
          <li className=" hover:text-sky-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#contact-me-section">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex bg-slate-900/50 md:justify-evenly ">
        <ul id="navList" className="list-container text-sky-700 py-2 flex flex-row">
          <li>
            <a href="#introduction-section" className="hover:text-sky-400">Introduction</a>
          </li>
          <li>
            <a href="#about-me-section"className="hover:text-sky-400">About Me</a>
          </li>
          <li>
            <a href="#skill-section"className="hover:text-sky-400">Skills</a>
          </li>
          <li>
            <a href="#project-section"className="hover:text-sky-400">Projects</a>
          </li>
          <li>
            <a href="#testimonial-section"className="hover:text-sky-400">Testimonials</a>
          </li>
          <li>
            <a href="#contact-me-section"className="hover:text-sky-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
