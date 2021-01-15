import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useGetBandsByGenre } from "../hooks";
import { Card } from "../components";

export default function () {
  const { genreName } = useParams();
  const getBandsByGenre = useGetBandsByGenre();
  const bands = getBandsByGenre(genreName);

  if (!bands) return <Redirect to="/genres" />;

  return (
    <>
      <h1 className="text-center">Detail screen</h1>
      <div className="container responsiveGrid">
        {bands.map((band) => {
          return (
            <div key={band.id} className="mt-5">
              <Card
                name={band.name}
                year={band.year}
                country={band.country}
                members={band.members}
                bandId={band.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
