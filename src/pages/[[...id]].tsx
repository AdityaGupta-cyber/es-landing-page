"use client";
import BackgroundVideo from "next-video/background-video";
import LogoAnimation from "@/components/LogoAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoAnimation2 from "@/components/LogoAnimation2";
import Home from "@/components/Home";
import { useRouter } from "next/router";
import introV from "../../videos/1.mp4";

export default function Page() {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [intro, setIntro] = useState(true);
  const syncIntervalRef = useRef<number | null>(null);
  const router = useRouter();
  const { id }: any = router.query;
  const isPlayingRef = useRef(false);

  const synchronizeVideos = () => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (!video1 || !video2) return;

    // Video setup
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

    // Sync playback times
    const syncPlaybackTimes = () => {
      if (!video1 || !video2) return;
      const diff = Math.abs(video1.currentTime - video2.currentTime);

      // Correct time difference if significant (> 0.03s)
      if (diff > 0.03) {
        const targetTime = Math.min(video1.currentTime, video2.currentTime);
        video1.currentTime = targetTime;
        video2.currentTime = targetTime;
      }

      // Ensure both videos are playing
      if (isPlayingRef.current && (video1.paused || video2.paused)) {
        video1.play().catch(() => {});
        video2.play().catch(() => {});
      }

      // Schedule the next sync check
      syncIntervalRef.current = requestAnimationFrame(syncPlaybackTimes);
    };

    // Initialize videos and start synchronization
    const initializeVideos = async () => {
      try {
        await Promise.all([
          new Promise<void>((resolve) => {
            if (video1.readyState >= 4) resolve();
            else
              video1.addEventListener("canplaythrough", () => resolve(), {
                once: true,
              });
          }),
          new Promise<void>((resolve) => {
            if (video2.readyState >= 4) resolve();
            else
              video2.addEventListener("canplaythrough", () => resolve(), {
                once: true,
              });
          }),
        ]);

        await Promise.all([video1.play(), video2.play()]);
        isPlayingRef.current = true;
        syncIntervalRef.current = requestAnimationFrame(syncPlaybackTimes);
      } catch (error) {
        console.error("Error initializing videos:", error);
      }
    };

    // Handle pauses and play states
    const handlePause = () => {
      if (!video1 || !video2) return;
      video1.pause();
      video2.pause();
      isPlayingRef.current = false;
    };

    const handlePlay = () => {
      if (!video1 || !video2) return;
      video1.play().catch(() => {});
      video2.play().catch(() => {});
      isPlayingRef.current = true;
    };

    // Add event listeners
    video1.addEventListener("pause", handlePause);
    video2.addEventListener("pause", handlePause);
    video1.addEventListener("play", handlePlay);
    video2.addEventListener("play", handlePlay);
    video1.addEventListener("seeked", syncPlaybackTimes);
    video2.addEventListener("seeked", syncPlaybackTimes);

    initializeVideos();

    return () => {
      if (syncIntervalRef.current)
        cancelAnimationFrame(syncIntervalRef.current);
      video1.removeEventListener("pause", handlePause);
      video2.removeEventListener("pause", handlePause);
      video1.removeEventListener("play", handlePlay);
      video2.removeEventListener("play", handlePlay);
      video1.removeEventListener("seeked", syncPlaybackTimes);
      video2.removeEventListener("seeked", syncPlaybackTimes);
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
      setTimeout(() => {
        setIntro(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const cleanup = synchronizeVideos();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
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
                  ref={videoRef1}
                  src={introV}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute top-[50%] md:top-[65%] h-screen md:h-auto"
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
                  src={introV}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute -top-[50%] md:-top-[35%] md:h-auto h-screen"
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
