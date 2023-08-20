import { motion } from "framer-motion";
import { useState } from "react";

const Framer = () => {
  const [animateX, setAnimateX] = useState(0);
  const handleClickAdd = () => {
    setAnimateX(animateX + 20);
  };
  const handleClickRemove = () => {
    setAnimateX(animateX - 20);
  };
  return (
    <>
      <div className="flex  justify-center items-center gap-4">
        <button className="text-white" onClick={handleClickAdd}>
          click +
        </button>
        <button className="text-white" onClick={handleClickRemove}>
          click -
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

export default Framer;
