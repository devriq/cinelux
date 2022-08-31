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
    <>
      <nav className="w-[95vw] grid mx-auto p-4 place-items-center">
        <Link to="/" className="">
          <img
            className="w-full max-w-[200px] cursor-pointer"
            id="logo"
            src={LOGO}
            alt="logoIMG"
          />
        </Link>

        <div className="">
          <form onSubmit={handleSubmit} className="flex">
            <input
              className="px-3 py-2 outline-none rounded-bl-2xl rounded-tl-2xl bg-gray-700 hover:bg-gray-800"
              type="text"
              placeholder="Busque um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <button
              className="px-3 py-2 bg-green-500 rounded-br-2xl rounded-tr-2xl hover:bg-green-600"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
