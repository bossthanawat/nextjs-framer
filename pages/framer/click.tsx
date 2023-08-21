import { motion } from "framer-motion";
import { useState } from "react";

const ClickAnimate = () => {
  const [animateX, setAnimateX] = useState(0);
  const handleClickAdd = () => {
    setAnimateX(animateX + 20);
  };
  const handleClickRemove = () => {
    setAnimateX(animateX - 20);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button className="btn btn-blue" onClick={handleClickAdd}>
          Animate +
        </button>
        <button className="btn btn-blue" onClick={handleClickRemove}>
          Animate -
        </button>
      </div>
      <div className="flex justify-center items-center h-screen gap-2">
        <motion.div
          className="w-[150px] h-[150px] bg-white rounded-[30px]"
          animate={{
            x: animateX,
          }}
        />
      </div>
    </>
  );
};

export default ClickAnimate;
