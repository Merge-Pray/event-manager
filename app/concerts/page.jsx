"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API;

const Page = () => {
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&classificationName=music&apikey=${API_KEY}`
        );
        const data = await response.json();
        setConcertData(data._embedded.events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <ul>
        {concertData.map((concert) => (
          <Link
            key={concert.id}
            href={{
              pathname: `/concerts/${concert.id}`,
              query: { concert: encodeURIComponent(JSON.stringify(concert)) }, // Konzertdaten kodiert übergeben 
              // Die Funktion encodeURIComponent in JavaScript wird verwendet, um eine Zeichenkette so zu kodieren, dass sie sicher in einer URL verwendet werden kann. Sie kodiert alle Zeichen, die in einer URL eine spezielle Bedeutung haben könnten (z. B. &, =, ?, /, usw.), indem sie sie in eine Prozent-Codierung umwandelt.
              // encodeURI kodiert nur Zeichen, die eine URL ungültig machen würden (z. B. Leerzeichen).
              //encodeURIComponent kodiert zusätzlich Zeichen, die in URL-Parametern eine spezielle Bedeutung haben (z. B. &, =, ?).
            }}
          >
            <li>
              {concert.name}{" "}
              <img className="h-20" src={concert.images[0].url} alt={concert.name} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Page;
