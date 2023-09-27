import SectionTitle from "../SectionTitle.js";
import { contactData } from "../../../public/content/contact";

import React, { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function ContactContent() {
  const mapRef = useRef();
  const mapInstanceRef = useRef();

  useEffect(() => {
    import("leaflet").then((L) => {
      if (mapInstanceRef.current) return;

      const address = "Ringstraße 16, Ernsthof, Germany";
      const map = L.map(mapRef.current, {
        center: [52.602158, 14.019452],
        zoom: 16,
        zoomControl: true,
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 16);

            const customIcon = L.icon({
              iconUrl: "/images/pin_map_google_icon.png",
              iconSize: [52, 52],
              iconAnchor: [26, 42],
              popupAnchor: [0, -32],
            });

            L.marker([lat, lon], { icon: customIcon }).addTo(map);
          }
        });
    });
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  const handleMapClick = () => {
    const address = "Zentaurus e.V., Ringstraße, Oberbarnim";
    window.location.href = `https://www.google.com/maps?q=${address}`;
  };

  return (
    <section id="section8">
      <SectionTitle title="Kontakt" />
      <div>
        <p>{contactData.name}</p>
        <p>{contactData.street}</p>
        <p>{contactData.county}</p>
        <p>{contactData.postal}</p>
        <p>Telefon: {contactData.phone}</p>
        <p>Telefax: {contactData.fax}</p>
        <p>E-Mail: {contactData.mail}</p>
      </div>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", cursor: "pointer" }}
        onClick={handleMapClick}
      />
      ;
    </section>
  );
}
