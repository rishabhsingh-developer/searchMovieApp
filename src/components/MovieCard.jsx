import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const img = `${IMAGE_BASE_URL}${data.poster_path}`;

  return (
    <Link to={`/movie/${data.id}`}>
      <div className="flex  flex-col justify-between text-center items-center border border-black  bg-homeColor mt-2  text-white">
        <img src={img} alt={data.title} className="h-[300] w-[300px] " />
        <span className="text-xl font-robot">{data.title}</span>
        <span>Rated: {data.vote_average}</span>
      </div>
    </Link>
  );
}
