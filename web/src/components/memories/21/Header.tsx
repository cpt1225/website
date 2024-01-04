import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {useRef, useState} from "react";


const Header = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const [opacity, setOpacity] = useState(1)


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setOpacity(1 - latest)
    console.log(latest)
  })

  return (
    <div ref={ref} className={"h-[128vh] w-screen flex flex-col items-center overflow-clip"}>
      <motion.div
        className={"w-[90vw] max-w-[1024px] text-[64px] mt-[40vh] fixed select-none flex flex-col"}
        initial={{opacity: 1}}
        animate={{opacity: opacity}}
      >
        <span className={"self-start"}>高三21班</span>
        <span className={"self-end"}>独家记忆</span>
      </motion.div>
    </div>
  );
}

export default Header;