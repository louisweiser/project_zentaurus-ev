import React, { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";

import SectionTitle from "../SectionTitle.js";
import { contactData } from "../../../public/content/contact";
import styles from "./Contact.module.css";

export default function ContactContent() {
  const mapRef = useRef();
  const mapInstanceRef = useRef();

  useEffect(() => {
    import("leaflet").then((L) => {
      if (mapInstanceRef.current) return;

      const address = "Ringstraße 16, Ernsthof, Germany";
      const map = L.map(mapRef.current, {
        center: [52.602158, 14.019452],
        zoom: 14,
        zoomControl: true,
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        maxZoom: 16,
        minZoom: 8,
        zoomDelta: 2,
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
            map.setView([lat, lon], 14);

            const customIcon = L.icon({
              iconUrl: "/images/pin_map_google_icon.png",
              iconSize: [52, 52],
              iconAnchor: [26, 42],
              popupAnchor: [0, -32],
            });

            L.marker([lat, lon], { icon: customIcon }).addTo(map);

            map.on("zoomend", function () {
              map.setView([lat, lon]);
            });
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
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `geo:0,0?q=${encodeURIComponent(address)}`;
    } else {
      window.open(
        `https://www.google.com/maps?q=${encodeURIComponent(address)}`,
        "_blank"
      );
    }
  };

  return (
    <section id="section6" className={styles.section}>
      <SectionTitle title="Kontakt" />
      <div className={styles["grid-container"]}>
        <div className={styles["container-inner"]}>
          <div className={styles["contact__container"]}>
            <ul className={styles["contact__list"]}>
              <li>{contactData.name}</li>
              <li>{contactData.street}</li>
              <li>{contactData.county}</li>
              <li>{contactData.postal}</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <td>Telefon:</td>
                  <td>{contactData.phone}</td>
                </tr>
                <tr>
                  <td>Telefax:</td>
                  <td>{contactData.fax}</td>
                </tr>
                <tr>
                  <td>E-Mail:</td>
                  <td>{contactData.mail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          ref={mapRef}
          className={styles.map}
          style={{ width: "100%", height: "400px", cursor: "pointer" }}
          onClick={handleMapClick}
        />
      </div>
    </section>
  );
}
