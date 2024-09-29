"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Vibration2 from "./Vibration2";

const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});

export default function Scarlet() {
  const [knowMore, setKnowMore] = useState(false);
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("small-laptop");
      } else {
        setScreenSize("large");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKnowMore = () => {
    setTimeout(() => {
      setKnowMore(true);
      controls3.start({
        scale: 1,
        position: "relative",
        x: 0,
        y: 0,
      });
    }, 2100);
    if (screenSize === "mobile") {
      controls3.start({
        x: 0,
        y: "-50vh",
        scale: 1,
        position: "absolute",
        zIndex: 40,
      });
    } else if (screenSize === "small-laptop") {
      controls3.start({
        x: "22vw",
        y: "5vh",
        scale: 1.1,
        position: "absolute",
        zIndex: 40,
      });
    } else {
      controls3.start({
        x: "22vw",
        y: "5vh",
        scale: 1.2,
        position: "absolute",
        zIndex: 40,
      });
    }

    controls4.start({ opacity: 1, top: 0 });
  };

  return (
    <div
      className={`${BlackMango.className}  relative z-0 top-0 min-h-screen w-full bg-[#f8f7f4] text-[#433631] flex flex-col p2`}
    >
      <main className="relative flex-grow flex p-4 sm:p-6 lg:p-12 max-w-[2000px] mx-auto">
        <div className="w-full mx-auto flex flex-col items-center lg:flex-row lg:mt-[10vh] xl:mt-[20vh] justify-between gap-44">
          <div className="w-full mb-8 lg:mb-0">
            <AnimatePresence>
              {" "}
              <motion.div
                className="text-4xl overflow-hidden sm:text-5xl lg:text-6xl xl:text-8xl mb-4 tracking-wide z-10 relative min-w-fit"
                animate={controls3}
                initial={{ scale: 1, position: "relative", x: 0, y: 0 }}
                exit={{
                  scale: 1,
                  position: "relative",
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 2 }}
              >
                SCARLET <br /> ELEGANCE
              </motion.div>
            </AnimatePresence>
            {knowMore ? (
              <div className="relative w-screen min-w-screen">
                <Vibration2 />
              </div>
            ) : (
              <>
                <div className="flex gap-6">
                  <div className="bg-[#FF7600] mt-2 h-[1px] w-[50%]"></div>
                  <p className="overflow-hidden text-[#FF7600] mb-4 text-xs sm:text-sm tracking-widest w-fit">
                    LOGO
                  </p>
                </div>
                <p className="mb-6 max-w-md text-xs sm:text-sm leading-relaxed font-sans text-[#43363199]">
                  LUMIÈRE ELEGANCE IS A DISTINGUISHED LUXURY FURNITURE BRAND
                  THAT EMBODIES THE PINNACLE OF SOPHISTICATION AND ARTISANAL
                  CRAFTSMANSHIP.
                </p>
                <button
                  className="inline-block font-semibold text-sm sm:text-base border border-[#ff6b35] text-[#433631] px-4 sm:px-6 py-2 rounded-full hover:bg-[#ff6b35] hover:text-white transition-colors tracking-wider"
                  onClick={handleKnowMore}
                >
                  KNOW MORE
                </button>
              </>
            )}
          </div>
          {!knowMore && (
            <div className="w-[50%] overflow-visible lg:mt-[10vw] xl:mt-0">
              <div className="relative overflow-visible h-[80vh] z-10 w-[38vw] cursor-pointer">
                <motion.img
                  src="/33.png"
                  animate={controls7}
                  onClick={() => {
                    controls7
                      .start({
                        left: ["0%", "-100%"],
                      })
                      .then(() => {
                        controls7.start({ left: "0%", zIndex: 0 });
                        controls5.start({
                          zIndex: [5, 5, 10],
                        });
                        controls6.start({
                          zIndex: [0, 0, 5],
                        });
                      });
                  }}
                  className="absolute left-[0%] top-[0%] w-[96%] h-auto z-[0] origin-center"
                  alt="Luxury interior with round wooden table and chandelier"
                  width={500}
                  height={500}
                />
                <motion.img
                  src="/22.png"
                  animate={controls6}
                  onClick={() => {
                    controls6
                      .start({
                        left: ["0%", "-100%"],
                      })
                      .then(() => {
                        controls6.start({ left: "0%", zIndex: 0 });
                        controls7.start({
                          zIndex: [5, 5, 10],
                        });
                        controls5.start({
                          zIndex: [0, 0, 5],
                        });
                      });
                  }}
                  className="absolute left-[0%] top-[0%] w-[98%] h-auto z-[5] origin-center"
                  alt="Luxury interior with round wooden table and chandelier"
                  width={500}
                  height={500}
                />
                <motion.img
                  initial={{ filter: "blur(10px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  src="/11.png"
                  animate={controls5}
                  onClick={() => {
                    controls5
                      .start({
                        left: ["0%", "-100%"],
                      })
                      .then(() => {
                        controls5.start({ left: "0%", zIndex: 0 });
                        controls6.start({
                          zIndex: [5, 5, 10],
                        });
                        controls7.start({
                          zIndex: [0, 0, 5],
                        });
                      });
                  }}
                  className="absolute left-[0%] top-[0%] w-[100%] h-auto z-10 origin-center"
                  alt="Luxury interior with round wooden table and chandelier"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          )}
          <AnimatePresence>
            {!knowMore && (
              <motion.div
                animate={controls4}
                className="fixed bg-[#E8E2DF] z-20 h-screen w-screen top-0 left-0"
                transition={{ duration: 2 }}
                initial={{ top: "100%", left: 0, opacity: 0 }}
                exit={{ top: "100%", left: 0, opacity: 0 }}
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Navbar />
    </div>
  );
}
