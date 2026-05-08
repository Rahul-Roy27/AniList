import React, { useEffect, useState, useRef } from "react";
import AnimeCard from "../Components/AnimeCard";
import { useOutletContext } from "react-router-dom";
import Loader from "../Components/Loader";
import SkeletonCard from "../Components/SkeletonCard";

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [page, setPage] = useState(1);
  const { search, genre } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const timeoutRef = useRef(null);

  const fetchAnime = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?page=${page}&q=${debouncedSearch}&genres=${genre}`,
    );
    const data1 = await response.json();
    console.log(data1);

    await new Promise((resolve) => setTimeout(resolve, 500));

    // setAnimeData(data1.data)
    setAnimeData((prev) => [...prev, ...data1.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAnime();
  }, [page, debouncedSearch, genre]);

  useEffect(() => {
    setAnimeData([]);

    setPage(1);
  }, [search, genre]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setAnimeData([]);

      setPage(1);

      setDebouncedSearch(search);
    }, 500);
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(animeData);

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">All Anime</h1>
      
      <div className="flex flex-wrap gap-2.5 justify-center mt-28">
        {animeData.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}

        {loading && (
          <div className="w-full flex justify-center py-6">
            <Loader />
          </div>
        )}

        {loading &&
          Array.from({ length: 25 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {/* {loading && <Loader />} */}
      </div>
    </>
  );
};

export default Home;
