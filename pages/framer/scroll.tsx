import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Framer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const xPosAnim = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.5, 1],
    // Into these values:
    [0, 200, 0]
  );

  const displayAnim = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 1]
  );
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scaleX }} />
      <h1>
        Scroll + Transform Demo
      </h1>
      <div className="flex justify-center items-center h-screen border-solid border-2 border-indigo-600">
        start
      </div>
      <div
        ref={ref}
        className="h-[500vh] relative border-solid border-2 border-red-700"
      >
        <div className="flex flex-col justify-center items-center h-screen gap-2 sticky top-0">
          <motion.div
            className="w-[150px] h-[150px] bg-white rounded-[30px]"
            style={{
              x: xPosAnim,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.div
            initial={false}
            style={{
              opacity: displayAnim,
            }}
          >
            50%
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen border-solid border-2 border-indigo-600">
        end
      </div>
    </>
  );
};

export default Framer;
