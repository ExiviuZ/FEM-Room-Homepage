import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute p-[2rem] flex items-center w-[100%] z-[1] sm:gap-[4rem]">
      <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
        <img src="images/icon-hamburger.svg" alt="" />
      </button>
      <img src="images/logo.svg" className="mx-auto" alt="" />
      <div
        className={`flex fixed sm:static bg-app-white w-[100%] py-[2rem] px-[1.5rem] left-0 items-center justify-between ${
          isOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        } transition-all sm:bg-transparent sm:static sm:translate-x-[0] sm:text-app-white after:absolute after:content-[''] after:h-[100vh] after:w-[100%] after:bg-[rgba(0,0,0,0.4)] after:top-[100%] after:backdrop-blur-[2px] after:left-0 after:transition-all after:opacity-0 ${
          isOpen ? "after:opacity-[1]" : ""
        } sm:after:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="sm:hidden">
          <img src="images/icon-close.svg" alt="" />
        </button>
        <ul className="flex gap-[2rem] font-[400]">
          <li className="relative before:content-[''] before:h-[3px] before:w-[0] before:mx-auto before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-black sm:before:bg-white hover:before:w-[80%]  before:transition-all ">
            <a href="#">home</a>
          </li>
          <li className="relative before:content-[''] before:h-[3px] before:w-[0] before:mx-auto before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-black sm:before:bg-white hover:before:w-[80%]  before:transition-all ">
            <a href="#">shop</a>
          </li>
          <li className="relative before:content-[''] before:h-[3px] before:w-[0] before:mx-auto before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-black sm:before:bg-white hover:before:w-[80%]  before:transition-all ">
            <a href="#">about</a>
          </li>
          <li className="relative before:content-[''] before:h-[3px] before:w-[0] before:mx-auto before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-black sm:before:bg-white hover:before:w-[80%]  before:transition-all ">
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
