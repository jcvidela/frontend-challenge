import React from "react";
import { useGetAlbumsByBand } from "../hooks";

export default function ({ name, year, country, members, bandId }) {
  const getAlbumsByBand = useGetAlbumsByBand();

  function getAlbums() {
    return getAlbumsByBand(bandId);
  }

  function handleClick(band, platform) {
    let formatted = band.replace(" ", "").toLowerCase();
    let URL_YT = `https://www.youtube.com/results?search_query=${formatted}`;
    let URL_SPF = `https://open.spotify.com/search/${formatted}`;

    let url = platform === "YT" ? URL_YT : URL_SPF;

    window.open(url, "_blank");
  }

  return (
    <>
      <div
        className="card animate__animated animate__fadeInLeft"
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <span className="d-flex justify-content-center align-items-center">
            <i
              className="fa fa-youtube-play icon icon-youtube"
              onClick={() => handleClick(name, "YT")}
            ></i>
            <i
              className="fa fa-spotify icon icon-spotify"
              onClick={() => handleClick(name, "SPF")}
            ></i>
          </span>
          <p className="card-text">
            <strong>Was founded in the year {year}</strong>
          </p>
          <p className="card-text">
            <strong>It's a band from {country}</strong>
          </p>
          <hr />

          <div>
            <p className="card-text">
              <strong>Members:</strong>
            </p>
            <ul className="list-unstyled">
              {members.map((member, index) => (
                <li key={`member-${index}`}>{member.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="card-text">
              <strong>Albums:</strong>
            </p>
            <ul className="list-unstyled">
              {getAlbums().length > 0 ? (
                getAlbums().map((album, index) => (
                  <li key={`album-${index}`}>{album.name}</li>
                ))
              ) : (
                <p>No albums avaible</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
