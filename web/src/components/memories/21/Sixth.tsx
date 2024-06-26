import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import React, {useRef, useState} from "react";
import FirstImage from "../../../assets/image/memories/21/2024-02-02-14-58-28.jpg";
import SecondImage from "../../../assets/image/memories/21/2024-02-02-14-59-28.jpg"
import ThirdImage from "../../../assets/image/memories/21/2024-02-02-15-01-28.jpg"
import FourthImage from "../../../assets/image/memories/21/2024-02-02-15-02-28.jpg"
import FifthImage from "../../../assets/image/memories/21/2024-02-02-15-03-28.jpg"

const Sixth = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })
  const [value, setValue] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => setValue(latest))


  return (
    <div ref={ref} className={"w-screen h-[500vh]"}>
      <div className={"h-screen w-screen flex flex-row justify-evenly items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.span
          animate={{
            opacity: 4 * (0.25 - value),
            x: -96 * 4 * value
          }}
          transition={{ease: "easeOut", duration: 0.618}}
          className={"text-[16px] lg:text-[32px] w-[31vw] select-none mb-[5vw] overflow-hidden"}
        >
          偶尔，我们也会悠闲地晒晒太阳，聊聊天。
        </motion.span>

        <motion.img
          className={"h-[50vw] w-[31vw] max-h-[500px] max-w-[309px] rounded-[16px] overflow-hidden"}
          src={FirstImage} alt={""}
          animate={{
            opacity: 4 * (0.25 - value)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>

      <div className={"h-screen w-screen flex flex-row justify-evenly items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.span
          animate={{
            opacity: value > 0.25 ? 4 * (0.5 - value) : 4 * value,
            x: -96 * 4 * (value - 0.25)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
          className={"text-[16px] lg:text-[32px] w-[31vw] select-none mb-[5vw] overflow-hidden"}
        >
          当然，有时也会有着迷茫的小眼神。
        </motion.span>

        <motion.img
          className={"h-[50vw] w-[31vw] max-h-[500px] max-w-[309px] rounded-[16px] overflow-hidden"}
          src={SecondImage} alt={""}
          animate={{
            opacity: value > 0.25 ? 4 * (0.5 - value) : 4 * value
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>

      <div className={"h-screen w-screen flex flex-row justify-evenly items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.span
          animate={{
            opacity: value > 0.5 ? 4 * (0.75 - value) : 4 * (value - 0.25),
            x: -96 * 4 * (value - 0.5)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
          className={"text-[16px] lg:text-[32px] w-[31vw] select-none mb-[5vw] overflow-hidden "}
        >
          老师，你在拍谁？
        </motion.span>

        <motion.img
          className={"h-[50vw] w-[31vw] max-h-[500px] max-w-[309px] rounded-[16px] overflow-hidden"}
          src={ThirdImage} alt={""}
          animate={{
            opacity: value > 0.5 ? 4 * (0.75 - value) : 4 * (value - 0.25)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>

      <div className={"h-screen w-screen flex flex-row justify-evenly items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.span
          animate={{
            opacity: value > 0.75 ? 4 * (1 - value) : 4 * (value - 0.5),
            x: -96 * 4 * (value - 0.75)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
          className={"text-[16px] lg:text-[32px] w-[31vw] select-none mb-[5vw] overflow-hidden"}
        >
          陈华同学，你怎么了？
        </motion.span>

        <motion.img
          className={"h-[50vw] w-[31vw] max-h-[500px] max-w-[309px] rounded-[16px] overflow-hidden"}
          src={FourthImage} alt={""}
          animate={{
            opacity: value > 0.75 ? 4 * (1 - value) : 4 * (value - 0.5)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>

      <div className={"h-screen w-screen flex flex-row justify-evenly items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.span
          animate={{
            opacity: 4 * (value - 0.75),
            x: -96 * 4 * (value - 1)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
          className={"text-[16px] lg:text-[32px] w-[31vw] select-none mb-[5vw] overflow-hidden"}
        >
          儒雅的贺彧颀同学。
        </motion.span>

        <motion.img
          className={"h-[50vw] w-[31vw] max-h-[500px] max-w-[309px] rounded-[16px] overflow-hidden"}
          src={FifthImage} alt={""}
          animate={{
            opacity: 4 * (value - 0.75)
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>
    </div>
  );
}

export default React.memo(Sixth);