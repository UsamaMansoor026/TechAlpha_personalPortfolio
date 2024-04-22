import React, { useState } from "react";
import { links } from "./Constants";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const checkIfNavOpen = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  return (
    <div className="z-50 relative">
      <nav
        className={`flex flex-col md:flex-row justify-between items-start md:items-center 
      ${
        openNav ? "bg-white" : "bg-white"
      } fixed left-0 right-0 top-0 py-4 md:py-5 lg:py-6 rounded-[40px] px-8 lg:px-16 w-full`}
      >
        <h1 className="uppercase cursor-pointer font-Neue text-4xl">
          portfolio
        </h1>

        {/* Hamburger Menu */}
        <div
          className="text-4xl block md:hidden absolute right-4 text-my-fontColor hover:text-black duration-200"
          onClick={() => setOpenNav(!openNav)}
        >
          <ion-icon name={`${openNav ? "close" : "menu"}`}></ion-icon>
        </div>
        <div
          className={`${
            openNav
              ? "flex opacity-[1] -translate-y-[0] mt-7 font-semibold"
              : "hidden opacity-[0] -translate-y-[400px]"
          } md:flex flex-col md:flex-row items-center md:opacity-[1] md:-translate-y-[0%] duration-700 justify-between gap-9 md:mt-0 md:font-normal`}
        >
          {/* Links */}
          <ul className="flex flex-col md:flex-row items-center gap-5">
            {links.map((link) => (
              <li
                key={link.id}
                className="capitalize font-Poppins text-base lg:text-lg text-my-fontColor hover:text-black hover:underline duration-200"
              >
                <a href={`#${link.url}`} onClick={checkIfNavOpen}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              className="text-2xl text-my-fontColor hover:text-black duration-200"
              href="www.linkedin.com/in/usama-mansoor-22ba92220"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="text-2xl text-my-fontColor hover:text-black duration-200"
              href="https://github.com/usamamansoor026"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
