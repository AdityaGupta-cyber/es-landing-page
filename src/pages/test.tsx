import React, { useEffect, useState } from "react";

interface TextPosition {
  x: number;
  y: number;
  opacity: number;
}

const RotatingCircleText: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const texts: string[] = ["Text 1", "Text 2", "Text 3", "Text 4"];

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      const newRotation = (scrollPosition / 2) % 360; // Adjust the divisor to control rotation speed
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculatePosition = (index: number): TextPosition => {
    const angle = (rotation + index * 90) % 360; // Clockwise rotation
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * 120 + 128;
    const y = Math.sin(radians) * 120 + 128;
    const opacity =
      angle >= 110 && angle < 230 ? 1 : angle >= 230 && angle < 300 ? 0.2 : 0.5; // Visible on the left side

    return { x, y, opacity };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Scroll down to rotate the circle</h1>
      </div>
      <div className="h-screen flex items-center justify-end sticky top-0 pr-16">
        <div className="relative w-64 h-64">
          {texts.map((text, index) => {
            const { x, y, opacity } = calculatePosition(index);

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  opacity,
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default RotatingCircleText;
