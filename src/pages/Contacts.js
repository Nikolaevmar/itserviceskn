import React from "react";
import { useEffect } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = "pk.eyJ1IjoibTNyY2hlbCIsImEiOiJja3VtajgwaTMwazk3MzJwZnA1NWI2Mmk5In0.5dHaComs63mxUr7HdMSINw";

export default function Contacts() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [22.6828735, 42.2769312],
      zoom: 17,
    });
  }, []);

  return (
    <div className="bg-background bg-no-repeat">
      <div id="map" className="h-96 w-screen m-auto"></div>
      <div className="flex justify-between w-9/12 text-center m-auto my-8">
        <div>
          Адрес: Град Кюстендил ул. Цар Освободител 19
          <p className="mr-44">(ценрала на IT ServicesKN)</p>
        </div>
        <div className="flex flex-col">
          <div>GSM: 0879/ 98 68 70</div>
          <div>GSM: 0885/ 74 24 71</div>
        </div>
      </div>
    </div>
  );
}
