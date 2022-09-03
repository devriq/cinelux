import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import LOGO from "./assets/cinelux.png";
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
      <nav className="mx-auto max-h-[20vh] overflow-hidden">
        <div className="">

        <Link to="/" className="">
          <img
            className="max-w-[150px] mx-auto"
            id="logo"
            src={LOGO}
            alt="logoIMG"
            />
        </Link>
            </div>

        <div className="">
          <form onSubmit={handleSubmit} className="flex rounded-xl overflow-hidden">
            <input
              className="flex-1 h-full text-gray-500 bg-gray-600 focus:outline-none focus:text-white p-2"
              type="text"
              placeholder="Busque por um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <button
              className="w-full px-3 bg-green-500 hover:bg-green-600 text-white "
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
