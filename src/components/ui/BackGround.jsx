import React, { useEffect, useRef } from "react";

const circleAnimations = [
  {
    keyframes: { transform: ["scale(1)", "scale(1.2)", "scale(1)"], translate: ["translate(0px, 0px)", "translate(150px, 70px)", "translate(0px, 0px)"] },
    duration: 4000,
  },
  {
    keyframes: { transform: ["scale(1)", "scale(1.3)", "scale(1)"], translate: ["translate(0px, 0px)", "translate(-120px, 100px)", "translate(0px, 0px)"] },
    duration: 5000,
  },
  {
    keyframes: { transform: ["scale(1)", "scale(1.4)", "scale(1)"], translate: ["translate(0px, 0px)", "translate(200px, -90px)", "translate(0px, 0px)"] },
    duration: 6000,
  },
];

function BackGround() {
  const circles = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    circles.forEach((circle, index) => {
      const animation = circleAnimations[index];
      circle.current.animate(
        [
          { transform: `${animation.keyframes.translate[0]} ${animation.keyframes.transform[0]}` },
          { transform: `${animation.keyframes.translate[1]} ${animation.keyframes.transform[1]}` },
          { transform: `${animation.keyframes.translate[2]} ${animation.keyframes.transform[2]}` },
        ],
        {
          duration: animation.duration,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden opacity-60 blur-[100px] filter">
      <div
        ref={circles[0]}
        className="absolute h-[280px] w-[380px] rounded-full bg-gradient-to-r from-[#7309E2] to-[#4C00D4]"
      ></div>
      <div
        ref={circles[1]}
        className="absolute h-[300px] w-[400px] rounded-full bg-gradient-to-r from-[#2D4B88] to-[#7309E2]"
      ></div>
      <div
        ref={circles[2]}
        className="absolute h-[320px] w-[420px] rounded-full bg-gradient-to-r from-[#3D92C1] to-[#7309E2]"
      ></div>
    </div>
  );
}

export default BackGround;
