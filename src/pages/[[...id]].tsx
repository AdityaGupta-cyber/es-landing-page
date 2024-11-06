"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import BackgroundVideo from "next-video/background-video";
import LogoAnimation from "@/components/LogoAnimation";
import LogoAnimation2 from "@/components/LogoAnimation2";
import Home from "@/components/Home";

export default function Page() {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const intro = true;
  const syncIntervalRef = useRef<number | null>(null);
  const router = useRouter();
  const { id }: any = router.query;
  const isPlayingRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const preloadVideo = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.src = src;

      const timeoutId = setTimeout(() => {
        reject(new Error("Video preload timeout"));
      }, 30000); // 30 seconds timeout

      video.oncanplaythrough = () => {
        clearTimeout(timeoutId);
        resolve();
      };

      video.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error("Video preload error"));
      };

      video.load();
    });
  };

  const synchronizeVideos = () => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (!video1 || !video2) {
      console.error("Video elements not found");
      return () => {}; // Return empty cleanup function
    }

    const setupVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.playbackRate = 1.0;
      video.preload = "auto";
      video.style.backfaceVisibility = "hidden";
      video.style.transform = "translateZ(0)";
    };

    setupVideo(video1);
    setupVideo(video2);

    const syncPlaybackTimes = () => {
      if (!video1 || !video2) return;
      const diff = Math.abs(video1.currentTime - video2.currentTime);

      if (diff > 0.03) {
        const targetTime = Math.min(video1.currentTime, video2.currentTime);
        video1.currentTime = targetTime;
        video2.currentTime = targetTime;
      }

      if (isPlayingRef.current && (video1.paused || video2.paused)) {
        video1.play().catch(console.error);
        video2.play().catch(console.error);
      }

      syncIntervalRef.current = requestAnimationFrame(syncPlaybackTimes);
    };

    const initializeVideos = async () => {
      try {
        await Promise.all([video1.play(), video2.play()]);
        isPlayingRef.current = true;
        syncIntervalRef.current = requestAnimationFrame(syncPlaybackTimes);
      } catch (error) {
        console.error("Error initializing videos:", error);
      }
    };

    initializeVideos();

    return () => {
      if (syncIntervalRef.current)
        cancelAnimationFrame(syncIntervalRef.current);
    };
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      controls.start({ opacity: 1, y: 0 });
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 1, y: 1000 });
      controls2.start({ opacity: 1, y: -1000 });
    }
  };

  useEffect(() => {
    const loadVideos = async () => {
      try {
        console.log("Starting video preload");
        await preloadVideo("/1.mp4");
        console.log("Video preload complete");
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading video:", error);
        setError((error as Error).message);
        setIsLoading(false);
      }
    };

    loadVideos();

    window.addEventListener("scroll", handleScroll);
    const cleanupSync = synchronizeVideos();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupSync();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Video</h1>
          <p>{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {id == undefined && (
        <>
          <motion.div className="hidden md:block z-0 front">
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
                className="absolute -top-20 md:top-0 h-screen w-screen z-50 flex justify-center items-center"
                transition={{
                  delay: 5,
                  duration: 3,
                }}
              >
                <LogoAnimation2 />
              </motion.div>
              {intro && (
                <BackgroundVideo
                  ref={videoRef1}
                  src={"/1.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute top-[50%] h-screen"
                />
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
                  ref={videoRef2}
                  src={"/1.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute -top-[50%] h-screen"
                />
              )}
            </motion.div>
          </motion.div>
          <motion.div className="block md:hidden z-0 front">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={controls2}
              ref={sectionRef2}
              transition={{
                duration: 0.1,
              }}
              className="z-[60] fixed flex justify-center overflow-hidden items-center min-w-screen h-full w-screen bg-[#433631]"
            >
              <motion.div
                animate={{ opacity: 0 }}
                className="absolute md:top-0 h-screen w-screen z-50 flex justify-center items-center"
                transition={{
                  duration: 10,
                }}
              >
                <LogoAnimation2 />
              </motion.div>
              {intro && (
                <BackgroundVideo
                  ref={videoRef1}
                  src={"/1.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute top-[0%] h-screen"
                />
              )}
            </motion.div>
          </motion.div>
        </>
      )}
      <Home id={id} />
    </>
  );
}
