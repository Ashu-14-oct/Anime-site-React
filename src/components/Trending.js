import React, { useState } from "react";
import "./Trending.css";
import { animeList } from "../api";
import { Link } from "react-router-dom";

export default function Trending() {
  // const [watchAnime, setWatchAnime] = useState([]);

  const watch = (anime) => {

  };
  return (
    <div className="trending-container">
      <h2 className="heading">Trending</h2>
      <hr
        style={{
          width: "90%",
          margin: "auto",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      <div className="gallery">
        {animeList.map((anime) => {
          return (
            <Link to={`/anime/${anime.name}`}>
              <div
                onClick={() => {
                  watch(anime);
                }}
                className="anime-content"
              >
                <div className="card-header">
                  <img src={anime.pic} />
                </div>
                <div className="card-details">
                  <h3>{anime.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
