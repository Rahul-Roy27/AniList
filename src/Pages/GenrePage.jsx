import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AnimeCard from "../Components/AnimeCard";
import Loader from "../Components/Loader";
import SkeletonCard from "../Components/SkeletonCard";

const GenrePage = () => {
  const [animeData, setAnimeData] = useState([]);
  const genreNames = {
    1: "Action",
    4: "Comedy",
    22: "Romance",
    14: "Horror",
    10: "Fantasy",
  };

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const { id } = useParams();
  const fetchGenreAnime = async () => {
    setLoading(true);

    const response = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${id}&page=${page}`,
    );

    const data = await response.json();

    setAnimeData((prev) => [...prev, ...data.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchGenreAnime();
  }, [id, page]);

  useEffect(() => {
    setAnimeData([]);
    setPage(1);
  }, [id]);

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

  return (
    <div>
      <h1 className="text-4xl font-bold w-full text-center my-8">
        {genreNames[id]} Anime
      </h1>
      <div className="flex flex-wrap gap-2.5 justify-center mt-6 pb-10">
        {animeData.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
        {loading && (
          <div className="w-full flex justify-center py-6">
            <Loader />
          </div>
        )}

        {loading &&
          Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default GenrePage;
