import React from "react";
import "./NewRelease.css";
import { updateAnime } from "../api";
import { Link } from "react-router-dom";

export default function RecentUpdate() {
  const watch = (anime) => {

  };
  return (
    <div className="trending-container">
      <h2 className="heading">Recently updated</h2>
      <hr
        style={{
          width: "90%",
          margin: "auto",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      <div className="gallery">
        {updateAnime.map((anime) => {
          return (
            <Link to={`/updateanime/${anime.name}`}>
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
