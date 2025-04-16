"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams(); // Zugriff auf die Query-Parameter
  const concert = searchParams.get("concert"); // Hole die Konzertdaten aus den Query-Parametern
  const concertDetails = concert ? JSON.parse(decodeURIComponent(concert)) : null;

  if (!concertDetails) {
    return <p>Loading...</p>;
  }

  return (
    <section>
  <h1>{concertDetails.name}</h1>
  <img src={concertDetails.images[0].url} alt={concertDetails.name} />
  <p>{concertDetails.dates.start.localDate}</p>
  <p>{concertDetails.info}</p>
  <h2>Veranstaltungsort</h2>
  <p>{concertDetails._embedded.venues[0].name}</p>
  <p>{concertDetails._embedded.venues[0].address.line1}</p>
  <p>{concertDetails._embedded.venues[0].city.name}, {concertDetails._embedded.venues[0].country.name}</p>
</section>
  );
};

export default Page;