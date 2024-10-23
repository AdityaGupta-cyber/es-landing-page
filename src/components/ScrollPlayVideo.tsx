import React, { useRef, useEffect, useState } from "react";

interface ScrollPlayVideoProps {
  src: string;
  type?: string;
}

const ScrollPlayVideo: React.FC<ScrollPlayVideoProps> = ({
  src,
  type = "video/mp4",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isScrolling && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isScrolling]);

  return (
    <div className="video-container">
      <video ref={videoRef} width="100%" height="auto" loop muted playsInline>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {!isScrolling && <div className="play-overlay"></div>}
    </div>
  );
};

export default ScrollPlayVideo;
