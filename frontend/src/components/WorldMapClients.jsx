import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// ตัวอย่างลูกค้า
const markers = [
  { name: "Thailand", coordinates: [100.5018, 13.7563] },
  { name: "Japan", coordinates: [139.6917, 35.6895] },
  { name: "Germany", coordinates: [13.405, 52.52] },
  { name: "USA", coordinates: [-74.006, 40.7128] },
];

export default function WorldMapClients() {
  return (
    <section className="bg-black text-white py-16 px-4 font-prompt">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Global Clients</h2>
        <p className="text-gray-400">We proudly serve clients from around the world.</p>
      </div>

      <div className="overflow-x-auto">
        <ComposableMap
          projection="geoEqualEarth"
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e293b"
                  stroke="#0ea5e9"
                  strokeWidth={0.2}
                  style={{ outline: "none" }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={6} fill="#3b82f6" stroke="#fff" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={-12}
                style={{ fontSize: 10, fill: "#fff" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </section>
  );
}