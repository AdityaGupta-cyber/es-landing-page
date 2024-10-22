import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});
export default function Navbar({ dark }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 space-y-1 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div
          className={`w-6 h-0.5 ${
            isMenuOpen ? "bg-[#FBFEF9]" : dark ? "bg-[#FBFEF9]" : "bg-[#433631]"
          } transition-transform ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 ${
            isMenuOpen ? "bg-[#FBFEF9]" : dark ? "bg-[#FBFEF9]" : "bg-[#433631]"
          } transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6 h-0.5 ${
            isMenuOpen ? "bg-[#FBFEF9]" : dark ? "bg-[#FBFEF9]" : "bg-[#433631]"
          } transition-transform ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>
      <div className="fixed top-3 left-6">
        <header className="p-6">
          <h1
            className={`text-[#ff6b35] text-xl ${BlackMango.className} tracking-wider overflow-hidden`}
          >
            <Image
              src="/logo1.png"
              width="150"
              height="150"
              className="-mt-5"
              alt=""
            />
          </h1>
        </header>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, marginTop: -1009 }}
              animate={{ opacity: 1, marginTop: 0 }}
              exit={{ opacity: 0, marginTop: -1000 }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
