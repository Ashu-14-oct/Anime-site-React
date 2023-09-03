import InfoAnime from "./components/InfoAnime";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import RecentUpdate from "./components/RecentUpdate";
import NewRelease from "./components/NewRelease";
import WatchAnime from "./components/WatchAnime";
import WatchAnimeNew from "./components/WatchAnimeNew";
import WatchAnimeUpdate from "./components/WatchAnimeUpdate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<InfoAnime />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/recentupdate" element={<RecentUpdate />}></Route>
          <Route path="/newrelease" element={<NewRelease />}></Route>
          <Route path="/anime/:name" element={<WatchAnime />}></Route>
          <Route path="/newanime/:name" element={<WatchAnimeNew />}></Route>
          <Route path="/updateanime/:name" element={<WatchAnimeUpdate />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
