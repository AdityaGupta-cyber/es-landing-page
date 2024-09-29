/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import LogoAnimation from "./LogoAnimation";
import Image from "next/image";
import localFont from "next/font/local";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});

export default function Menu() {
  return (
    <nav
      className={`z-50 fixed h-[50%] inset-0 bg-[#FF7600] text-white py-8 px-6 md:px-12 overflow-auto 4 ${BlackMango.className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <div
            onClick={() => {
              window.open("/about", "_self");
            }}
            className="block mb-2 text-[50px] font-light overflow-hidden mt-10 bg-white text-[#433631] w-fit px-10 cursor-pointer"
          >
            ABOUT
          </div>
          <div
            onClick={() => {
              window.open("/", "_self");
            }}
            className="block text-[50px] font-light overflow-hidden mt-10  bg-white text-[#433631] w-fit px-10 cursor-pointer"
          >
            PORTFOLIO
          </div>
        </div>
        <div className="mb-4 md:mb-0 text-md font-sans">
          <p className="mb-1">Say Hello</p>
          <p className="mb-1">es@gmail.com</p>
          <p>+91 7778899910</p>
          <p className="mt-2 max-w-xs">
            302, Eastern Court, Plot No 12 Sindhi Society, Chembur Mumbai -71
          </p>
        </div>
        <div className="text-right">
          <Image src="/logo.svg" width={340} height={340} alt="alt" />
        </div>
      </div>
    </nav>
  );
}
