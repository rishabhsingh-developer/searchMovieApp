import { useState } from "react";
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovie } from "../redux/slice/movieSlice";
export default function Navbar() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");

  function SearchTerm(term) {
    if (term == "") return;
    dispatch(searchMovie(term));
    setTerm("");
  }
  return (
    <nav className="bg-white text-white">
      <div className="flex justify-between items-center mx-4 mt-4 bg-homeColor1 border border-black">
        <h1 className="text-[60px]">
          <Link to="/">🍿</Link>
        </h1>
        <ul className=" hidden md:flex items-center  gap-8 font-robot">
          <li>
            <Link to="/popular">popular</Link>
          </li>
          <li>
            <Link to="/toprated">toprated</Link>
          </li>
          <li>
            <Link to="/upcoming">upcoming</Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="search..."
              value={term}
              className="border border-gray-400 text-black"
              onChange={(e) => setTerm(e.target.value)}
            />
          </li>
          <li>
            <button
              className="border border-black px-[30px] py-[10px] hover:text-red-500"
              onClick={() => SearchTerm(term)}
            >
              search
            </button>
          </li>
        </ul>

        <div className="block md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <TbLayoutNavbarExpandFilled size={34} />
          ) : (
            <TbLayoutNavbarCollapseFilled size={34} />
          )}
        </div>
      </div>
      <div className="absolute top-[105px] w-full">
        {open ? (
          <div className=" mx-4 bg-homeColor border border-black">
            <ul className="flex flex-col gap-8  md:flex-row items-center  font-robot">
              <li>
                <Link to="/popular">popular</Link>
              </li>
              <li>
                <Link to="/toprated">toprated</Link>
              </li>
              <li>
                <Link to="/upcoming">upcoming</Link>
              </li>
              <li>
                <input
                  type="text"
                  placeholder="search..."
                  value={term}
                  className="border border-gray-400  text-black"
                  onChange={(e) => setTerm(e.target.value)}
                />
              </li>
              <li>
                <button
                  className="border border-black px-[30px] py-[10px] hover:text-red-500"
                  onClick={() => SearchTerm(term)}
                >
                  search
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
