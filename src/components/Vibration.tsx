"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import localFont from "next/font/local";
import { useState, useEffect, useRef } from "react";
import Vibration2 from "./Vibration2";

const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});

const products = [
  {
    title: "VIBRATION",
    description: "Luxurious red armchair for sophisticated interiors.",
  },
  {
    title: "SCARLET ELEGANCE",
    description: "Plush blue sofa perfect for relaxation and style.",
  },
  {
    title: "BLOOMSCAPE",
    description: "Verdant green lounger bringing nature indoors.",
  },
];

interface TextPosition {
  x: number;
  y: number;
  opacity: number;
  rotate: number;
}

export default function Vibration() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [current, setCurrent] = useState(-1);
  const [start, setStart] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEntering, setIsEntering] = useState(false); // New state for entering animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const [knowMore, setKnowMore] = useState(false);
  const [fixedText, setFixedText] = useState(products[0].title);
  const [isKnowMore, setIsKnowMore] = useState(false);
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const [screenSize, setScreenSize] = useState("large");
  const [rotation, setRotation] = useState(0);
  const images = [
    <div
      key={4}
      className="relative overflow-visible h-[80vh] z-10 w-[38vw] cursor-pointer"
    >
      <motion.img
        src="/333.png"
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
        src="/222.png"
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
        src="/111.png"
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
    </div>,

    <div
      key={2}
      className="relative overflow-visible h-[80vh] z-10 w-[38vw] cursor-pointer"
    >
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
    </div>,
    <div
      key={1}
      className="relative overflow-visible h-[80vh] z-10 w-[38vw] cursor-pointer"
    >
      <motion.img
        src="/3.png"
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
        src="/1.png"
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
        src="/2.png"
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "blur(0px)" }}
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
    </div>,
  ];
  const radius = 200; // Increased radius for a larger circle
  const containerSize = radius * 2 + 56;
  useEffect(() => {
    const handleScroll = (): void => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = 1 - rect.bottom / rect.height;
      console.info("lol", scrollPosition);
      if (scrollPosition > 0.24 && scrollPosition < 0.25) {
        window.scrollTo({
          top: 350,
        });
      } else if (scrollPosition > 0.38 && scrollPosition < 0.4) {
        window.scrollTo({
          top: 610,
        });
      } else if (scrollPosition > 0.6 && scrollPosition < 0.61) {
        window.scrollTo({
          top: 1500,
        });
      }

      if (scrollPosition > 0.12 && scrollPosition < 0.22) {
        window.scrollTo({
          top: 350,
        });
      } else if (scrollPosition > 0.31 && scrollPosition < 0.32) {
        window.scrollTo({
          top: 610,
        });
      } else if (scrollPosition > 0.5 && scrollPosition < 0.52) {
        window.scrollTo({
          top: 1500,
        });
      }
      if (scrollPosition > 0 && !start) {
        setStart(true);
      }
      const newRotation = scrollPosition;
      // Adjust the divisor to control rotation speed
      setRotation(newRotation - 0.2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeIndex == 0 && current != 0 && start) {
      setCurrent(0);

      window.scrollTo({
        top: 350,
      });
    } else if (activeIndex == 1 && current != 1) {
      setCurrent(1);
      window.scrollTo({
        top: 610,
      });
    } else if (activeIndex == 2 && current != 2) {
      setCurrent(2);
      window.scrollTo({
        top: 1500,
      });
    }
  }, [activeIndex, start]);

  const calculatePosition = (index: number): TextPosition => {
    const rotate = -(rotation * 300) % 8;
    const x = -rotation * 200 + index;
    const y = -rotation * 4400 + index * 700;
    console.info(x, y);
    const opacity = 1; // Visible on the left side

    return { x, y, opacity, rotate };
  };

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
    setFixedText(products[activeIndex].title);
    window.history.pushState(
      null,
      products[activeIndex].title,
      `/${activeIndex}`
    );
    setIsKnowMore(true);
    setTimeout(() => {
      setKnowMore(true);
      window.scrollTo({
        top: 10,
      });
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

        y: "3vh",
        scale: 1.2,
        position: "absolute",
        zIndex: 40,
      });
    }

    controls4.start({ opacity: 1, top: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !start) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - rect.bottom / rect.height;
      console.info("sp", scrollProgress);
      let newIndex = 0;
      if (activeIndex == -1) {
        newIndex = 0;
      } else {
        newIndex =
          scrollProgress > 0 && scrollProgress <= 0.26 && activeIndex <= 1
            ? 0
            : scrollProgress >= 0.43 && activeIndex >= 1
            ? 2
            : 1;
        console.info("ni", newIndex);
      }

      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < products.length
      ) {
        setIsTransitioning(true);
        setIsEntering(false); // Trigger entering animation
        setTimeout(() => {
          setIsTransitioning(false);
          setIsEntering(true);
          setActiveIndex(newIndex);

          // Reset entering animation after update
        }, 300);
        setTimeout(() => {
          setIsTransitioning(false);
          setIsEntering(false);

          // Reset entering animation after update
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, start]);

  return (
    <div
      className="relative  min-h-screen h-[220vh] w-full bg-white"
      ref={sectionRef}
    >
      {" "}
      <div
        className={`${BlackMango.className}  sticky z-0 top-0 min-h-screen w-full bg-[#f8f7f4] text-[#433631] flex flex-col p1 overflow-hidden`}
      >
        <main className="flex-grow flex p-4 sm:p-6 lg:p-12 max-w-[2000px] lg:ml-20 xl:ml-20">
          <div
            className={`${
              knowMore ? "mt-[200px]" : "lg:mt-[10vh] xl:mt-[7vh]"
            } w-full mx-auto flex flex-col items-center lg:flex-row justify-between gap-44`}
          >
            <div className="w-full mb-8 lg:mb-0">
              <AnimatePresence>
                {" "}
                <motion.div
                  className={`text-4xl overflow-hidden sm:text-5xl lg:text-6xl xl:text-8xl mb-4 tracking-wide z-10 relative min-w-fit lg:-mt-20 xl:mt-0 origin-center`}
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
                  {isKnowMore ? (
                    <>{fixedText}</>
                  ) : (
                    <h2
                      className={`ease-in-out title ${
                        isTransitioning ? "transition-out" : ""
                      } ${
                        isEntering ? "transition-in" : ""
                      } text-4xl overflow-hidden sm:text-5xl lg:text-6xl xl:text-[80px] mb-4 tracking-wide z-10 relative lg:w-[350px] xl:w-[550px] break-words`}
                    >
                      {products[activeIndex]?.title}
                    </h2>
                  )}
                </motion.div>
              </AnimatePresence>
              {knowMore ? (
                <div className="relative flex justify-center">
                  <Vibration2 />
                </div>
              ) : (
                <>
                  <div className="flex gap-6">
                    <div className="bg-[#FF7600] mt-2 h-[1px] w-[200px]"></div>
                    <p className="overflow-hidden text-[#FF7600] mb-4 text-xs sm:text-sm tracking-widest w-fit">
                      LOGO
                    </p>
                  </div>
                  <p className="mb-6 max-w-md lg:text-xs xl:text-sm sm:text-sm leading-relaxed font-sans text-[#43363199]">
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
              <div className="sticky lg:-right-40 lg:ml-56 xl:ml-0 xl:-right-10  overflow-visible lg:mt-[10vw] xl:mt-0">
                <div
                  className={`relative`}
                  style={{
                    width: `${containerSize}px`,
                    height: `${containerSize}px`,
                  }}
                >
                  {images.map((text, index) => {
                    const { x, y, opacity, rotate } = calculatePosition(index);

                    return (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                        style={{
                          left: `${x - 150}px`,
                          top: `${y}px`,
                          opacity,
                          transform: `rotate(${rotate}deg)`,
                        }}
                      >
                        {text}
                      </div>
                    );
                  })}
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
      </div>
    </div>
  );
}
