import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailMovie } from "../redux/slice/movieSlice";
export default function Detailmovie() {
  const { movieId } = useParams();
  const state = useSelector((state) => state.movie.moveiDetail);
  const dispatch = useDispatch();
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const img = `${IMAGE_BASE_URL}${state.poster_path}`;

  useEffect(() => {
    dispatch(detailMovie(movieId));
  }, [dispatch, movieId]);

  return (
    <div className="flex flex-col  md:flex-row justify-between px-4 mt-4 bg-homeColor text-white h-auto md:h-lvh">
      <div>
        <div className="flex gap-2 font-robot">
          <img src={img} alt={state.title} className="h-[300px] w-[200px]" />
          <div className="flex flex-col ">
            <span className="text-lg sm:text-3xl">{state.title}</span>
            <span className="text-base sm:text-2xl">
              Rating: {state.vote_average}
            </span>
            <span>runtime: {state.runtime}</span>
            <span>Date: {state.release_date}</span>
          </div>
        </div>
        <div>
          <p>{state.overview}</p>
        </div>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${state.backdrop_path}`}
          alt={state.title}
          className="h-[400px] w-[1200px] "
        />
      </div>
    </div>
  );
}
