import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/slice/movieSlice";
import MovieCard from "../components/MovieCard";

export default function Toprated() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie.movie);
  const loading = useSelector((state) => state.movie.isLoading);
  console.log(data);

  useEffect(() => {
    dispatch(fetchMovie("top_rated"));
  }, [dispatch]);

  return (
    <div className="bg-white">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 gap-4 mx-4 ">
          {data.results.map((data) => {
            return <MovieCard key={data.id} data={data} />;
          })}
        </div>
      )}
    </div>
  );
}
