"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const API_KEY = process.env.NEXT_TICKETMASTER_API

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
          <Link href={`/concerts/${concert.id}`}>
            <li key={concert.id}>
              {concert.name}{" "}
              <img className="h-20" src={concert.images[0].url}></img>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Page;
