import { motion } from "motion/react";
import React from "react";

const Card = ({ style, text, image, ContainerRef }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt=""
      className="absolute w-15 cursor-grab"
      style={style}
      whileHover={{ scale: 1.15 }}
      drag
      dragConstraints={ContainerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-sm text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[11rem]  cursor-grab"
      style={style}
      drag
      whileHover={{ scale: 1.15 }}
      dragConstraints={ContainerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
