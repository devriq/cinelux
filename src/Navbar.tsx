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
      <nav className="">
        <div className="max-w-[200px] w-[100%] p-0 overflow-hidden">

        <Link to="/" className="m-0 p-0">
          <img
            className=""
            id="logo"
            src={LOGO}
            alt="logoIMG"
            />
        </Link>
            </div>

        <div className="max-w-[900px] p-3 w-full overflow-hidden ">
          <form onSubmit={handleSubmit} className="flex w-full">
            <input
              className="flex-1"
              type="text"
              placeholder="Busque um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <button
              className="p-5 bg-green-600 text-white"
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
