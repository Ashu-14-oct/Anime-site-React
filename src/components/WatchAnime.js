import React from "react";
import { useParams } from "react-router-dom";
import { animeList } from "../api";
import "./Watch.css";

export default function WatchAnime() {
  const { name } = useParams();
  const anime = animeList.find((anime) => anime.name === name);
  if (!anime) {
    return <div>Anime not found</div>;
  }
    return (
      <div className="check">
        <div className="watch-container">
          <div id="anime-content">
            <div id="card-header">
              <img src={anime.pic} />
            </div>
            <div id="card-details">
              <h3>{anime.name}</h3>
            </div>
          </div>
  
          <div className="watch-details">
            <div className="anime-desc">
              <p>{anime.info}</p>
            </div>
            <div className="anime-link">
              <a href={anime.link}><p>Click here to start watching</p></a>
            </div>
          </div>
        </div>
      </div>
    );
}
