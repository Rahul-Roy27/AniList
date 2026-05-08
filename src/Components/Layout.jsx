import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <>
      <div className='min-h-screen bg-[#1a1a1a] text-white pt-16'>
        <div>
          <Navbar search={search} setSearch={setSearch} genre={genre} setGenre={setGenre} />
        </div>
        <div>
          <Outlet context={{search,genre}} />
        </div>
      </div>
    </>
  );
};

export default Layout;
