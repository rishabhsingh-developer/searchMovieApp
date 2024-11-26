import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Toprated from "./pages/Toprated";
import Upcoming from "./pages/Upcoming";
import Navbar from "./components/Navbar";
import Detailmovie from "./pages/Detailmovie";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:movieId" element={<Detailmovie />} />
      </Routes>
    </BrowserRouter>
  );
}
