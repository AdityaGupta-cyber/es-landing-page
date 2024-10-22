"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import localFont from "next/font/local";
import { useState, useEffect, useRef } from "react";
import CaseStudy from "./CaseStudy";
import Navbar from "./Navbar";

const BlackMango = localFont({
  src: "../pages/fonts/BlackMango-SemiBold.otf",
});

const products = [
  {
    title: "VIBRATION",
    description: `life and living all not equal
flames and fire are not in same sequel

`,
  },
  {
    title: "SCARLET ELEGANCE",
    description: `attraction and have there own defination
security and saftey posses there own reason
`,
  },
  {
    title: "BLOOMSCAPE",
    description: `attraction and have there own defination
security and saftey posses there own reason

`,
  },
  {
    title: "CLAW CONSOLE",
    description: `life and living all not equal
flames and fire are not in same sequel

`,
  },
  {
    title: "COURTSIDE COMFORT",
    description: `shine and grace are not the same
there is difference between smooth and plane
`,
  },
  {
    title: "REVIVED GLORY",
    description: `attraction and have there own defination
security and saftey posses there own reason
`,
  },
  {
    title: "TIGER EYE",
    description: `poison and venom have different------
earth and glob have different dencity
`,
  },
];

interface TextPosition {
  x: number;
  y: number;
  opacity: number;
  rotate: number;
}

export default function Home({ id }: any) {
  const [isMd, setIsMd] = useState(false);
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    // Define media queries for 'sm' and 'md' screen sizes
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const smQuery = window.matchMedia("(max-width: 640px)");

    // Handlers to update state when media queries change
    const handleMdChange = (e) => setIsMd(e.matches);
    const handleSmChange = (e) => setIsSm(e.matches);

    // Set initial value
    setIsMd(mdQuery.matches);
    setIsSm(smQuery.matches);

    // Add event listeners
    mdQuery.addListener(handleMdChange);
    smQuery.addListener(handleSmChange);

    // Cleanup
    return () => {
      mdQuery.removeListener(handleMdChange);
      smQuery.removeListener(handleSmChange);
    };
  }, []);

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

  const [screenSize, setScreenSize] = useState("large");
  const [rotation, setRotation] = useState(0);
  const [dark, setDark] = useState(true);
  function stopTouchScroll() {
    // Prevent the default touchmove event to stop scrolling
    sectionRef.current?.addEventListener(
      "touchstart",
      function (event) {
        event.preventDefault(); // Stops scrolling on touch interaction
      },
      { passive: false }
    );

    sectionRef.current?.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault(); // Prevent momentum scroll during touch move
      },
      { passive: false }
    );
  }

  // Updated to have unique keys for each image set
  const images = products.map((product, index) => {
    const controls5 = useAnimation();
    const controls6 = useAnimation();
    const controls7 = useAnimation();
    const handleImageClick = async (
      currentControl: any,
      lowerControl: any,
      higherControl: any
    ) => {
      await currentControl.start({
        left: ["0%", "-100%"],
      });
      await currentControl.start({ left: "0%", zIndex: 0 });
      await lowerControl.start({
        zIndex: [5, 5, 10],
      });
      await higherControl.start({
        zIndex: [0, 0, 5],
      });
    };
    return (
      <div
        key={index}
        className="relative overflow-visible h-[250px] w-[250px]  md:h-[80vh] z-10 md:w-[38vw] md:max-w-[600px] cursor-pointer -mt-[420px]  ml-10 md:ml-0 md:mt-0"
      >
        <motion.img
          src={`/images/${index}/3.png`}
          animate={controls7}
          onClick={() => handleImageClick(controls7, controls5, controls6)}
          className="absolute left-[0%] top-[0%] w-[100%] h-auto z-[0] origin-center aspect-square object-cover rotate-[4deg]"
          alt={`${product.title} image 1`}
          width={500}
          height={500}
        />
        <motion.img
          src={`/images/${index}/2.png`}
          animate={controls6}
          onClick={() => handleImageClick(controls6, controls7, controls5)}
          className="absolute left-[0%] top-[0%] w-[100%] h-auto z-[5] origin-center  aspect-square object-cover rotate-2"
          alt={`${product.title} image 2`}
          width={500}
          height={500}
        />
        <motion.img
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          src={`/images/${index}/1.png`}
          animate={controls5}
          onClick={() => handleImageClick(controls5, controls6, controls7)}
          className="absolute left-[0%] top-[0%] w-[100%] h-auto z-10 origin-center  aspect-square object-cover"
          alt={`${product.title} image 3`}
          width={500}
          height={500}
        />
      </div>
    );
  });

  const radius = 200; // Increased radius for a larger circle
  const containerSize = radius * 2 + 56;

  // Handle image click to manage zIndex and animation

  useEffect(() => {
    if (id && activeIndex !== id && !knowMore) {
      console.log("in", id);
      setActiveIndex(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (id && activeIndex !== id && !knowMore) {
      handleKnowMore();
    }
  }, [activeIndex]);

  useEffect(() => {
    console.log(id);
    const handleScrollEvent = (): void => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = 1 - rect.bottom / rect.height + 0.17;

      // Dynamically calculate scroll thresholds based on number of products
      const sectionHeight = window.innerHeight / products.length;

      for (let i = 0; i < products.length; i++) {
        const lowerBound = i * (1 / products.length) + 0.08 * i;
        const upperBound = (i + 1) * (1 / products.length) - 0.08 * i;

        if (
          scrollPosition > lowerBound &&
          scrollPosition <= upperBound &&
          !knowMore
        ) {
          window.scrollTo({
            top: i * 440 + 150, // Adjust this value based on your layout
          });
          setActiveIndex(i);
          break;
        }
      }

      if (scrollPosition > 0 && !start && !knowMore) {
        setStart(true);
      }

      const newRotation = scrollPosition;
      // Adjust the divisor to control rotation speed
      setRotation(newRotation - 0.2);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [knowMore]);

  useEffect(() => {
    if (
      activeIndex >= 0 &&
      activeIndex < products.length &&
      start &&
      !knowMore
    ) {
      setCurrent(activeIndex);
      window.scrollTo({
        top: activeIndex * 440 + 150, // Adjust this value based on your layout
      });
    }
  }, [activeIndex, start, knowMore]);

  const calculatePosition = (index: number): TextPosition => {
    const rotate = -(rotation * 300) % 8;
    const x = -70;
    const y = -rotation * 5600 + index * 710;
    //console.info(x, y);
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
    setFixedText(products[activeIndex]?.title || ""); // Safe access
    window.history.pushState(
      null,
      products[activeIndex]?.title || "",
      `/${activeIndex}`
    );
    setIsKnowMore(true);
    setTimeout(() => {
      setDark(true);
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
    }, 1400);

    // Adjust position based on screen size
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
      const pos = [22, 8, 16, 14, 5, 14, 22];
      controls3.start({
        x: `${pos[activeIndex]}vw`,
        y: "5%",
        position: "absolute",
        zIndex: 40,
        scale: 1.2,
      });
    }

    controls4.start({ opacity: 1, top: 0 });
  };

  useEffect(() => {
    const handleDynamicScroll = () => {
      if (!sectionRef.current || !start) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - rect.bottom / rect.height + 0.07;
      //console.info("sp", scrollProgress);
      let newIndex = activeIndex;

      // Calculate newIndex based on scrollProgress
      for (let i = 0; i < products.length; i++) {
        const lower = i * (1 / products.length);
        const upper = (i + 1) * (1 / products.length);
        if (scrollProgress > lower && scrollProgress <= upper) {
          newIndex = i;
          break;
        }
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
        }, 300);
        setTimeout(() => {
          setIsTransitioning(false);
          setIsEntering(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleDynamicScroll);
    return () => window.removeEventListener("scroll", handleDynamicScroll);
  }, [activeIndex, start, knowMore, products.length]);

  // Calculate dynamic container height based on number of products
  const containerHeight = products.length * 440 + 150; // 570px per product + 200px buffer

  return (
    <>
      <div
        className="relative min-h-screen w-full bg-white"
        ref={sectionRef}
        style={{ height: `${3500}px` }}
      >
        <div
          className={`${
            BlackMango.className
          } sticky z-0 top-0 min-h-screen w-full bg-[${
            !dark ? "#FBFEF9" : "#433631"
          }] text-[${
            !dark ? "#433631" : "#FBFEF9"
          }] flex flex-col p-1 overflow-hidden duration-1000 xl:items-center`}
        >
          {" "}
          <div className="absolute w-screen z-0 h-screen top-0 left-0 opacity-5">
            <AnimatePresence>
              <motion.img
                className="object-cover w-full absolute bottom-0 rotate-0  "
                key={activeIndex}
                src={`/images/${activeIndex}/1.png`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>
          </div>
          <main className="flex-grow relative z-20 flex p-4 sm:p-6 lg:p-12 max-w-[1500px] lg:mx-10 xl:ml-20">
            <div
              className={`${
                knowMore ? " mt-[200px]" : "lg:mt-[10vh] xl:mt-[7vh]"
              } w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-52 md:gap-32 lg:gap-[500px]`}
            >
              <div className="flex flex-col text-center items-center md:text-start md:items-start  w-full mt-16 lg:mt-0">
                <AnimatePresence>
                  <motion.div
                    className="  text-sm overflow-hidden md:text-5xl lg:text-6xl xl:text-8xl mb-4 tracking-wide z-20 relative min-w-fit w-fit lg:-mt-20 xl:mt-0 origin-center"
                    animate={controls3}
                    initial={{ scale: 1, position: "relative", x: 0, y: 0 }}
                    exit={{
                      scale: 1,
                      position: "relative",
                      x: 0,
                      y: 0,
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    {isKnowMore ? (
                      <div className="w-fit text-4xl overflow-hidden origin-center  md:text-5xl lg:text-6xl xl:text-[80px] mb-4 tracking-wide z-20 relative lg:w-[450px] xl:w-[580px] break-normal">
                        {fixedText}
                      </div>
                    ) : (
                      <h2
                        className={`ease-in-out title ${
                          isTransitioning ? "transition-out" : ""
                        } ${
                          isEntering ? "transition-in" : ""
                        } text-4xl overflow-hidden origin-center  md:text-5xl lg:text-6xl xl:text-[80px] mb-4 tracking-wide z-20 relative lg:w-[450px] xl:w-[580px] break-normal`}
                      >
                        {products[activeIndex]?.title}
                      </h2>
                    )}
                  </motion.div>
                </AnimatePresence>

                {knowMore ? (
                  <div className="relative flex justify-center">
                    <CaseStudy
                      dark={dark}
                      setDark={setDark}
                      idd={activeIndex}
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex gap-6">
                      <div className="bg-[#FF7600] mt-2 h-[1px] w-[200px]"></div>
                      <p className="overflow-hidden text-[#FF7600] mb-4 text-xs sm:text-sm tracking-widest w-fit">
                        LOGO
                      </p>
                    </div>

                    <h2
                      style={{
                        fontWeight: 300,
                        fontSize: "17px",
                      }}
                      className={`ease-in-out title ${
                        isTransitioning ? "transition-out" : ""
                      } ${
                        isEntering ? "transition-in" : ""
                      }  mb-6 max-w-md tracking-tight lg:tracking-normal md:leading-relaxed font-sans text-[#FBFEF9CC] normalcase mt-[250px] md:mt-0`}
                    >
                      {products[activeIndex]?.description}
                    </h2>
                    <button
                      className="inline-block w-fit font-semibold text-sm sm:text-sm border border-[#ff6b35] text-[#FBFEF9] px-4 sm:px-6 py-2 rounded-full hover:bg-[#ff6b35] hover:text-white transition-colors tracking-wider"
                      onClick={handleKnowMore}
                    >
                      KNOW MORE
                    </button>
                  </>
                )}
              </div>
              {!knowMore && (
                <div className="sticky mr-[200px] lg:-right-40 lg:ml-56 xl:mr-20 xl:-right-10 overflow-visible md:mb-40 lg:mb-0 lg:-mt-[300px] xl:-mt-[500px]">
                  <div
                    className="relative"
                    // style={{
                    //   width: `${containerSize}px`,
                    //   height: `${containerSize}px`,
                    // }}

                    style={{
                      width: isMd ? "90%" : isSm ? "98%" : `${containerSize}px`,
                      height: isMd
                        ? "auto"
                        : isSm
                        ? "auto"
                        : `${containerSize}px`,
                    }}
                  >
                    {images.map((imageComponent, index) => {
                      const { x, y, opacity, rotate } =
                        calculatePosition(index);

                      return (
                        <div key={index}>
                          <div
                            key={index}
                            className="hidden lg:block  absolute transform -translate-x -1/2 -translate-y-1/2 transition-all duration-300"
                            style={{
                              left: `${x - 500}px`,
                              top: `${y}px`,
                              opacity,
                              transform: `rotate(${rotate}deg)`,
                            }}
                          >
                            {imageComponent}
                          </div>

                          <div
                            key={index}
                            className=" block lg:hidden  w-[70%] mx-auto     absolute transform -translate-x -1/2 -translate-y-1/2 transition-all duration-300"
                            // style={{
                            //    left: `${x + 140}px`,
                            //   top: `${y - 130  }px`,
                            //   opacity,
                            //   transform: `rotate(${rotate}deg)`,
                            // }}

                            style={{
                              left: isMd
                                ? `${x + 140}px`
                                : isSm
                                ? `${x + 20}px`
                                : `${x + 140}px`,
                              top: isMd
                                ? `${y - 130}px`
                                : isSm
                                ? `${y - 130}px`
                                : `${y - 130}px`,
                              opacity,
                              transform: `rotate(${rotate}deg)`,
                            }}
                          >
                            {imageComponent}
                            {/* <div className="   w-[30%] h-6 mx-auto">
                             
                          </div> */}
                          </div>
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
                    className="fixed bg-[#433631] z-10 h-screen w-screen top-0 left-0"
                    transition={{ duration: 1.5 }}
                    initial={{ top: "100%", left: 0, opacity: 0 }}
                    exit={{ top: "100%", left: 0, opacity: 0 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>{" "}
          </main>
        </div>{" "}
      </div>{" "}
      <Navbar dark={dark} />
    </>
  );
}