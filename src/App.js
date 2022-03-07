import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Movie from "./Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=a7a877f8755c80969895d0d4749349af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
    );
    const movies = await response.json();
    console.table(movies.results);
    setMovies(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
