"use client";
import BackgroundVideo from "next-video/background-video";
import LogoAnimation from "@/components/LogoAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoAnimation2 from "@/components/LogoAnimation2";
import Vibration from "@/components/Vibration";
import { useRouter } from "next/router";

export default function Home() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [intro, setIntro] = useState(true);
  const controls2 = useAnimation();
  const router = useRouter();
  const { id }: any = router.query;

  const sectionRef2 = useRef<HTMLDivElement>(null);

  // Handle scroll event
  const handleScroll = () => {
    ////console.log(scrollY);
    const scrollPosition = window.scrollY;
    ////console.log(window.scrollY);

    if (scrollPosition == 0) {
      // Change 100 to the scroll position where you want the animation to trigger
      controls.start({ opacity: 1, y: 0 });
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 1, y: 1000 });
      controls2.start({ opacity: 1, y: -1000 });
      setTimeout(() => {
        setIntro(false);
      }, 1000);
    }
  };

  useEffect(() => {
    console.log("id", id);
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      {!id && (
        <>
          <motion.div className="z-0 front">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={controls2}
              ref={sectionRef2}
              transition={{
                duration: 0.7,
              }}
              className="z-[60] video-wrapper-1 fixed flex justify-center overflow-hidden items-center min-w-screen h-full w-screen bg-[#433631]"
            >
              <motion.div
                animate={{ opacity: 0 }}
                className="absolute top-0 h-screen w-screen z-50 flex justify-center items-center"
                transition={{
                  delay: 5,
                  duration: 3,
                }}
              >
                <LogoAnimation2 />
              </motion.div>
              {intro && (
                <BackgroundVideo
                  src={"/1.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  currentTime={2000}
                  className="absolute top-[65%]"
                ></BackgroundVideo>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={controls}
              ref={sectionRef}
              transition={{
                duration: 0.7,
              }}
              className="z-10 video-wrapper-1 fixed bottom-0 flex justify-center overflow-hidden items-center min-w-screen h-full w-screen bg-[#433631]"
            >
              <motion.div
                animate={{ opacity: 0 }}
                className="absolute h-screen bottom-0 w-screen z-50 flex justify-center items-center"
                transition={{
                  delay: 5,
                  duration: 3,
                }}
              >
                <LogoAnimation />
              </motion.div>
              {intro && (
                <BackgroundVideo
                  src={"/1.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  currentTime={2000}
                  className="absolute -top-[35%]"
                ></BackgroundVideo>
              )}
            </motion.div>
          </motion.div>
        </>
      )}

      <Vibration id={id} />
    </>
  );
}
