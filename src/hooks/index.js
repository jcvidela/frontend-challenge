import React from "react";
import AppContext from "../context/AppContext";

export function useFullData() {
  const {
    state: { fullData },
  } = React.useContext(AppContext);

  return fullData;
}

export function useBands() {
  const {
    state: { bands },
  } = React.useContext(AppContext);

  return bands;
}

export function useAlbums() {
  const {
    state: { albums },
  } = React.useContext(AppContext);

  return albums;
}

export function useGenres() {
  const {
    state: { genres },
  } = React.useContext(AppContext);

  return genres;
}

export function useGetBandsByGenre() {
  const {
    actions: { getBandsByGenre },
  } = React.useContext(AppContext);

  return getBandsByGenre;
}

export function useGetBandsByName() {
  const {
    actions: { getBandsByName },
  } = React.useContext(AppContext);

  return getBandsByName;
}

export function useGetAlbumsByBand() {
  const {
    actions: { getAlbumsByBand },
  } = React.useContext(AppContext);

  return getAlbumsByBand;
}

export function useAuthDispatch() {
  const {
    actions: { dispatch },
  } = React.useContext(AppContext);

  return dispatch;
}

export function useAuthState() {
  const {
    state: { user },
  } = React.useContext(AppContext);

  return user;
}