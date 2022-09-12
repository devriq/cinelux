import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import LOGO from "../../assets/cinelux.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
      <nav className="md:flex items-center justify-center bg-[#111] md:justify-evenly mb-4 py-2">
        <div className="w-[50%] md:w-[20%] mx-auto">

        <Link to="/" className="w-[200px] mx-auto ">
          <img
            className=""
            id="logo"
            src={LOGO}
            alt="logoIMG"
            />
        </Link>
        </div>

        <div className="w-full mx-auto max-w-[500px] flex items-center">
          <form onSubmit={handleSubmit} className=" w-full mx-auto flex">
            <input
              className="w-[80vw] p-2 min-h-full bg-gray-800 hover:bg-gray-600"
              type="text"
              placeholder="Busque por um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className="flex-1 flex items-center justify-center px-2 min-h-full mx-auto bg-purple-600 hover:bg-purple-800"
              type="submit"
            >
                <FaSearch />
            </button>
          </form>
        </div>

      </nav>
  );
}

export default Navbar;
