import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BackgroundAndContent = ({ className }: { className?: string }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(10000);
    setRandomString(str);
  }, []);

  function onMouseMove(
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) {
    let x = 0;
    let y = 0;

    if (e.type.includes("touch")) {
      const touchEvent = e as React.TouchEvent<HTMLDivElement>;
      const { touches, changedTouches } = touchEvent.nativeEvent ?? touchEvent;
      const touch = touches[0] ?? changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else if (e.type.includes("mouse")) {
      const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
      x = mouseEvent.clientX;
      y = mouseEvent.clientY;
    }

    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(x - left);
    mouseY.set(y - top);

    const str = generateRandomString(1500);
    setRandomString(str.repeat(10));
  }

  return (
    <div
      className={cn(
        "bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onTouchMove={onMouseMove}
        className="pt-[20vh] group/card  w-full relative overflow-hidden bg-transparent flex items-start justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex-wrap items-center justify-center">
          <div className="relative m-auto h-44 w-60 md:w-80 flex items-center justify-center">
            <div className="absolute max-sm:w-[80vw] sm:w-[80vw] md:w-[50vw] xl:w-[30vw] h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white z-20">
              <img
                src="/assets/images/Logos/logo-white.png"
                alt="Encipher-logo"
              />
            </span>
          </div>
          <div className="relative h-44 w-auto flex items-center justify-center mt-5 m-auto">
            <span className="font-bold text-white z-20 font-Lexend text-3xl md:text-4xl">
              ENCRYPTING SOON...
            </span>
          </div>
          <div className="relative h-12 w-12 m-auto mt-[23vh] md:max-lg:mt-[35vh] rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="z-20">
              <a
                href="https://twitter.com/encifherio"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/images/Logos/twitter-white.png"
                  alt="X"
                  className="holder-page-footer-x-icon w-6"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const smallerScreen = window.innerWidth <= 768;
  let maskImage = smallerScreen
    ? useMotionTemplate`radial-gradient(550px at ${mouseX}px ${mouseY}px, white, transparent)`
    : useMotionTemplate`radial-gradient(700px at ${mouseX}px ${mouseY}px, white, transparent)`;

  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-5xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-10xl bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-600">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
