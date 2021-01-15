import React from "react";
import { authReducer } from '../reducers/AuthReducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [fullData, setFullData] = React.useState({});
  const [bands, setBands] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [user, dispatch] = React.useReducer(authReducer, {}, init);
  

  // then replace by hook use fetch
  const fetchResources = React.useCallback(async (url) => {
    let response = await fetch(url, { method: "GET" });
    let parsedInfo = await response.json();

    return parsedInfo;
  }, []);

  React.useEffect(function saveUserInStorage() {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  React.useEffect(
    function getResources() {
      const url = "https://my-json-server.typicode.com/improvein/dev-challenge/db";

      fetchResources(url)
      .then((data) => {
        setFullData(data);
        setBands(data.bands);
        setAlbums(data.albums);
        setGenres(data.genre);
      });
    },
    [fetchResources]
  );

  function init() {
    return JSON.parse(localStorage.getItem("user")) || { isLogged: false };
  }

  function getBandsByGenre(genre = false) {
    if (!genre) return [];

    return bands.filter((band) => band.genreCode === genre);
  }

  function getBandsByName(name = false) {
    if (!name) return [];

    return bands.filter((band) => band.name === name);
  }

  function getAlbumsByBand(bandId) {
    return albums.filter(album => album.bandId === bandId);
  }

  const state = {
    fullData,
    bands,
    genres,
    albums,
    user
  };

  const actions = {
    getBandsByGenre,
    getBandsByName,
    getAlbumsByBand,
    dispatch
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider as Provider };
