"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import ScrollPlayVideo from "@/components/ScrollPlayVideo";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});

// Array of placeholder images
const placeholderImages = ["/ekant.png", "/ekant2.png", "/ekant3.png"];

export default function Page() {
  const dark = true;

  return (
    <ParallaxProvider>
      <div
        className={`bg-[#433631] mx-0 px-0 flex justify-center min-h-screen w-full text-white ${BlackMango.className}`}
      >
        <div className="py-8 w-full">
          <div className="w-full px-4 max-w-6xl  md:w-[60%] lg:w-[65%] mx-auto">
            <Header />
          </div>
          <MainContent />
          <Footer />
        </div>
        <Navbar dark={dark} />
      </div>
    </ParallaxProvider>
  );
}

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % placeholderImages.length
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <header className="relative  mb-12 mt-20 md:mt-[200px] lg:mt-[300px]">
      <Image
        src={placeholderImages[currentImageIndex]}
        id="ekant"
        alt="Ekant Singh"
        width={2000}
        height={2000}
        className="w-full h-auto object-cover"
        ref={imageRef}
      />
      <div className="absolute bg-transparent bg-white text-center px-7 py-3 md:p-8 lg:p-10 -top-6 md:-top-32 lg:-top-40 -left-3 md:-left-20 lg:-left-28 right-0 text-black ,w-full w-fit rounded-full">
        <span className="text-sm md:text-4xl lg:text-5xl font-bold tracking-wide">
          MEET
        </span>{" "}
        <span
          className={`text-xl md:text-5xl lg:text-[65px] text-[#FF7600] font-extrabold md:font-light mb-2 ${playfair.className}`}
        >
          EKANT SINGH,
        </span>
        <h2 className="text-xs md:text-4xl lg:text-5xl font-bold md:font-light tracking-wide">
          A ROVING INDUSTRIAL <br className="hidden md:inline" /> DESIGNER
        </h2>
      </div>
      <div className="absolute bg-transparent  bg-white text-center px-4 py-4 md:px-16 md:py-8 lg:px-20 lg:py-10 -bottom-10 md:-bottom-32 lg:-bottom-40 -right-3 md:-right-20 lg:-right-28 text-black w-fit rounded-full">
        <span className="text-xs md:text-4xl lg:text-5xl font-bold tracking-wide">
          THE MASTERS OF <br />
          BRINGING
        </span>{" "}
        <br />
        <span
          className={`text-lg md:text-6xl lg:text-[75px] text-[#FF7600] font-extrabold md:font-light mb-2 ${playfair.className}`}
        >
          ART TO LIFE
        </span>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <main className="relative overflow-visible bg-[#FBFEF9] text-black mt-20 md:mt-[200px] lg:mt-[300px] md:p-[100px] lg:p-[135px] pb-0 gap-10 md:gap-20 lg:gap-40 ">
      <LeftColumn />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 justify-start">
        <div className="w-full md:w-[600px] lg:w-[1000px] h-[0px] md:-ml-24 lg:-ml-36 top-0 overflow-visible"></div>
        <Image
          src="/separator.png"
          alt="Separator"
          width={6000}
          height={6000}
          className="hidden md:block w-[20px] h-auto object-cover my-8 pt-20 -mt-[600px] lg:-mt-[950px]"
        />
        <RightColumn />
        <MobColumn />
      </div>
    </main>
  );
}

function RightColumn() {
  return (
    <div className="md:-mt-[500px] lg:-mt-[800px]">
      <h2
        className={`text-2xl p-4 md:p-0  md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6`}
      >
        EYES OF IMAGINATION
      </h2>
      <p className="mb-6 p-4 md:p-0 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] float-none md:float-right my-4 md:my-12 lg:my-20 leading-relaxed font-sans">
        Ekant Singh envision THE world where his thoughts IDEATE THE
        extraordinary work of PASSION. the unwavering commitment OF elegance and
        innovation, he seeks to create pieces that are not only unreal &
        captivating but also unparalleled in their ability to evoke emotion{"'"}
        s THAT ARE inspirational. Through his design{"'"}s, painting{"'"}S and
        styling, he aim{"'"}s to bring his artistic vision to life, crafting
        timeless creations that leave EVER lasting impressions.
      </p>
      <ParallaxBanner
        className="para w-full h-auto object-cover my-8 pt-10 md:pt-16 lg:pt-20 aspect-[756/406]"
        layers={[{ image: "/about1.png", speed: -10 }]}
      />
      <MobColumn1 />
      <h2
        className={`text-2xl p-4 md:p-0  md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 mt-10 md:mt-20 lg:mt-40`}
      >
        IN A WORLD FULL OF CREATIVE POSSIBILITY
      </h2>
      <p className="mb-6 p-4 md:p-0 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] my-4 md:my-12 lg:my-20 leading-relaxed font-sans">
        I{"'"}ve always had an insatiable appetite for turning the unusual into
        art. As an industrial designer, I see potential in materials others
        might overlook. My vision pushes me to transcend conventional design
        boundaries.
        <br />
        <br />
        With every piece I create, I{"'"}m not just solving a problem - I{"'"}m
        telling a story. I challenge myself to break my own benchmarks, always
        seeking that spark of originality that will breathe life into an object.
        For me, design isn{"'"}t just a job - it{"'"}s a journey of constant
        reinvention and creative exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-16 lg:mt-20">
        <Image
          src="/about2.png"
          alt="Design example 1"
          width={300}
          height={250}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/about3.png"
          alt="Design example 2"
          width={300}
          height={250}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="pb-10 p-4 md:p-0 md:pb-[100px] lg:pb-[135px] flex justify-center text-center flex-col items-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 mt-10 md:mt-20 lg:mt-40`}
        >
          YOU LIVE AFTER <br />
          YOU DIE
        </h2>
        <p className="mb-6 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] my-4 md:my-12 lg:my-20 leading-relaxed font-sans">
          If you{"'"}ve written your love from the heart and you really mean the
          words that you have written then no matter you remain or depart, your
          picture of words would never be forgotten.
          <br />
          <br /> Man dissolves away but his art stays, like magic that has never
          ending days, it will live on forever. <br />
          <br />
          It will be immortal, but it would come to life from a heart of a
          mortal.
          <br />
          <br /> No matter, we remain or are forgotten but our art would
          flourish and remain.
          <br /> <br />
        </p>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="hidden md:block w-full md:w-[56%] lg:w-[500px] -ml-0 md:-ml-24 lg:-ml-36 -mt-4 md:-mt-[100px] lg:-mt-[135px] sticky top-0 overflow-visible">
      <ScrollPlayVideo src="/aboutpic.mp4" />
    </div>
  );
}

function MobColumn1() {
  return (
    <ParallaxBanner
      style={{ aspectRatio: "1.5" }}
      className="mt-10 block md:hidden"
      layers={[
        {
          speed: -100,
          children: (
            <div className="block md:hidden w-full md:w-[56%] lg:w-[500px] -ml-0 md:-ml-24 lg:-ml-36 -mt-52 md:-mt-[100px] lg:-mt-[135px] sticky top-0 overflow-visible">
              <ScrollPlayVideo src="/aboutpic.mp4" />
            </div>
          ),
        },
      ]}
    />
  );
}

function MobColumn() {
  return (
    <ParallaxBanner
      style={{ aspectRatio: "1/1.7" }}
      className="-mt-20 block md:hidden"
      layers={[
        {
          speed: -100,
          children: (
            <div className="block md:hidden w-full md:w-[56%] lg:w-[500px] -ml-0 md:-ml-24 lg:-ml-36 -mt-52 md:-mt-[100px] lg:-mt-[135px] sticky top-0 overflow-visible">
              <ScrollPlayVideo src="/aboutpic.mp4" />
            </div>
          ),
        },
      ]}
    />
  );
}

function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-400">
      <p>&copy; 2023. All rights reserved.</p>
    </footer>
  );
}
