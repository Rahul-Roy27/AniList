import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch, genre, setGenre }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-[#1f1f1f]/90 backdrop-blur-md shadow-lg">
      <h1 className="logo text-3xl font-bold text-orange-500">AniVerse</h1>

      <div className="flex items-center border-2 border-gray-600 p-2 gap-4 rounded-xl w-[400px]">
        <FaSearch className="text-gray-400" />

        <input
          type="search"
          value={search}
          placeholder="Search anime..."
          className="search-input bg-transparent text-gray-200 outline-none w-full"
          onChange={(e) => {
            setSearch(e.target.value);

            navigate("/");
          }}
        />
      </div>

      <select
        className="dropdown border-2 border-gray-600 bg-[#1f1f1f] rounded-3xl p-2.5 text-white outline-none"
        onChange={(e) => {
          if (e.target.value) {
            navigate(`/genre/${e.target.value}`);
          } else {
            navigate("/");
          }
        }}
      >
        <option value="">Category</option>

        <option value="1">Action</option>

        <option value="4">Comedy</option>

        <option value="22">Romance</option>

        <option value="14">Horror</option>

        <option value="10">Fantasy</option>
      </select>
    </nav>
  );
};

export default Navbar;
