import React from "react";
import { useGenres } from "../hooks";
import { List, Spinner } from "../components";

// eslint-disable-next-line
export default function () {
  let genres = useGenres();

  return (
    <>
      {genres?.length <= 0 ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1 className="text-center">Home screen</h1>
          <List data={genres} />
        </div>
      )}
    </>
  );
}
