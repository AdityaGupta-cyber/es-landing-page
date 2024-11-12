"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import ScrollPlayVideo from "@/components/ScrollPlayVideo";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
const CR = localFont({
  src: "../pages/fonts/CR.otf",
});
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
        className={`bg-[#433631] mx-0 px-0 flex justify-center min-h-screen w-full ${BlackMango.className} text-[#433631]`}
      >
        <div className="py-8 w-full">
          <div className="w-full px-4 max-w-6xl  md:w-[60%] lg:w-[65%] mx-auto">
            <Header />
          </div>
          <div className="h-[20px] md:h-[200px] lg:h-[200px]" />
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
    <header className="relative  mb-12 mt-20 md:mt-[200px] lg:mt-[300px] text-[#433631]">
      <Image
        src={placeholderImages[currentImageIndex]}
        id="ekant"
        alt="Ekant Singh"
        width={2000}
        height={2000}
        className="w-full h-auto object-cover"
        ref={imageRef}
      />
      <div className="absolute bg-transparent bg-white text-center px-7 py-3 md:p-8 lg:p-10 -top-6 md:-top-32 lg:-top-40 -left-3 md:-left-20 lg:-left-28 right-0 text-[#433631] ,w-full w-fit rounded-full">
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
      <div className="absolute bg-transparent  bg-white text-center px-4 py-4 md:px-16 md:py-8 lg:px-20 lg:py-10 -bottom-10 md:-bottom-32 lg:-bottom-40 -right-3 md:-right-20 lg:-right-28 text-[#433631] w-fit rounded-full">
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
    <main className="relative bg-[#FBFEF9] text-[#433631] md:p-[100px] md:pt-0 lg:pt-0 lg:p-[135px] pb-0 gap-10 md:gap-20 lg:gap-40 overflow-clip justify-start items-start">
      <LeftColumn />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-0 justify-start items-start justify-items-start">
        <div className="w-full md:w-[1200px] lg:w-[1200px] 2xl:w-[400px] h-[0px] md:-ml-24 lg:-ml-[00px] top-0 overflow-visible"></div>
        <Image
          src="/separator.png"
          alt="Separator"
          width={6000}
          height={6000}
          className="hidden lg:ml-40 lg:mr-12 xl:ml-10 xl:mr-12  md:block w-[20px] ml-10 h-auto object-cover my-8 pt-20 -mt-[700px] lg:-mt-[400px]"
        />
        <RightColumn />
        <MobColumn />
      </div>
    </main>
  );
}

function RightColumn() {
  return (
    <div className="md:-mt-[300px] xl:ml-0 max-w-[800px]">
      <h2
        className={`text-2xl p-4 md:p-0 md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 mx-auto w-fit`}
      >
        EYES OF IMAGINATION
      </h2>
      <p className="mb-6 p-4 text-center md:p-0 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] float-none mx-auto my-4 md:my-8 lg:my-12 leading-relaxed font-sans">
        Ekant Singh envision THE world where his thoughts IDEATE THE
        extraordinary work of PASSION. the unwavering commitment OF elegance and
        innovation, he seeks to create pieces that are not only unreal &
        captivating but also unparalleled in their ability to evoke emotion{"'"}
        s THAT ARE inspirational. Through his design{"'"}s, painting{"'"}S and
        styling, he aim{"'"}s to bring his artistic vision to life, crafting
        timeless creations that leave EVER lasting impressions.
      </p>

      <ParallaxBanner
        className="para w-full h-auto object-cover my-8 pt-10 md:pt-12 lg:pt-16 aspect-square md:aspect-[756/406]"
        layers={[
          {
            speed: -10,
            children: (
              <Image
                src="/about1.png"
                alt="Elegant table in a luxurious setting"
                layout="fill"
                objectFit="cover"
              />
            ),
          },
        ]}
      />
      <MobColumn1 />
      <h2
        className={`text-2xl p-4 md:p-0 md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 mt-10 md:mt-16 lg:mt-24 w-fit mx-auto text-center`}
      >
        IN A WORLD FULL OF CREATIVE POSSIBILITY
      </h2>
      <p className="mb-6 p-4 md:p-0 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] mx-auto text-center my-4 md:my-8 lg:my-12 leading-relaxed font-sans">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-12 lg:mt-16">
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
      <div className="pb-10 p-4 md:p-0 md:pb-[80px] lg:pb-[100px] flex justify-center text-center flex-col items-center h-fit">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 mt-10 md:mt-16 lg:mt-24`}
        >
          YOU LIVE AFTER <br />
          YOU DIE
        </h2>
        <p className="mb-16 md:mb-0 text-xs xl:text-sm max-w-full md:max-w-[300px] lg:max-w-[400px] my-4 md:my-8 lg:my-12 leading-relaxed font-sans">
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
        </p>
      </div>
      <section className="px-10 md:px-0 w-full flex justify-center  flex-col items-center max-w-[100%] mb-40 md:my-36 lg:my-40 text-center">
        <h3
          className={`${CR.className} text-xl md:text-lg lg:text-3xl font-light leading-snug mb-4 uppercase`}
        >
          Attraction and affection have their own defination, Security and
          safety posses their own reasons.
        </h3>
        <p
          className={`text-sm w-full md:text-lg font-normal text-right max-w-[800px] xl:max-w-[1200px] tracking-widest font-sans text-[#FF7600]`}
        >
          - EKANT SINGH
        </p>
      </section>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="hidden md:block w-full md:w-[56%] lg:w-[500px] -ml-0 md:-ml-24 lg:-ml-36 -mt-4 sticky top-0 overflow-visible h-screen">
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
          speed: -50,
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
          speed: -50,
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
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <Link
          href="https://www.instagram.com/ekantsingh/"
          className="text-white hover:text-[#FF7600] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
      <p className="text-sm text-white">
        &copy; 2023 Ekant Singh. All rights reserved.
      </p>
    </footer>
  );
}
