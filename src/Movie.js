import { motion } from "framer-motion";
import React from "react";

const Movie = ({ movie: { title, backdrop_path } }) => {
  console.log(title, backdrop_path);
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt="" />
    </motion.div>
  );
};

export default Movie;
