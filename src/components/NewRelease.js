import React from "react";
import "./NewRelease.css";
import { newAnime } from "../api";
import { Link } from "react-router-dom";

export default function NewRelease() {
  const watch = (anime) => {

  };
  return (
    <div className="trending-container">
      <h2 className="heading">New Release</h2>
      <hr
        style={{
          width: "90%",
          margin: "auto",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      <div className="gallery">
        {newAnime.map((anime) => {
          return <Link to={`/newanime/${anime.name}`}>
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
        </Link>;
        })}
      </div>
    </div>
  );
}

