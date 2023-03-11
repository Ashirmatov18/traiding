// import React from "react";
// import styles from "../../styles/Contact.module.css";
// import Footer from "../Container/footer/Footer";
// import Link from "next/link";

// export default function Contacts() {
//   return (
//     <>
//       <div className={styles.contacts_bg}>
//         <h1>Контакты</h1>
//         <div className={styles.contacts_but}>
//           <button>Свяжитесь с нами</button>
//         </div>
//       </div>

//       <div className={styles.search} style={{ marginTop: "930px" }}>
//         <h1>Как найти нас</h1>
//         <div className={styles.map_info}>
//           <div className={styles.map}></div>
//           <div className={styles.address_info}>
//             <h2>Адрес</h2>
//             <h4>Абдумомунова, 221, Первомайский район, Бишкек, 720033</h4>

//             <h2>Телефон</h2>
//             <h4>+996 507 70 35 16</h4>
//             <h4>+86 155 2128 2836</h4>

//             <h2>E-mail</h2>
//             <h4>nurislam.ashirmatov@ecosolutions.group</h4>
//             <h4>malika.saparova@ecosolutions.group</h4>
//           </div>
//         </div>
//       </div>
//       <h1 className={styles.connection}>Свяжитесь с нами</h1>
//       {/* </MainLayout> */}
//       <div className={styles.connect_us}>
//         <div className={styles.message}>
//           <h1>Оставить сообщение</h1>
//           <div className={styles.input_group}>
//             <input type="text" placeholder="Ф.И.О" />
//             <input type="text" placeholder="E-mail" />
//             <select className={styles.select_name} placeholder="Выбрать тему">
//               <option value="volvo">Вид</option>
//               <option value="saab">!</option>
//               <option value="opel">2</option>
//             </select>
//             <input
//               className={styles.input_message}
//               type="text"
//               placeholder="Ваше сообщение"
//             />
//           </div>
//           <button>Оставить сообщение</button>
//         </div>
//         <Footer id={styles.footer_contact} />
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import styles from "../../../public/styles/Contact.module.css";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "../Container/footer/Footer";

export default function Contacts() {
  const [Map, setMap] = useState();
  const [pageIsMounted, setPageIsMounted] = useState(false);

  const stores = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.034084142948, 38.909671288923],
        },
        properties: {
          phoneFormatted: "(202) 234-7336",
          phone: "2022347336",
          address: "1471 P St NW",
          city: "Washington DC",
          country: "United States",
          crossStreet: "at 15th St NW",
          postalCode: "20005",
          state: "D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.10853099823, 38.880100922392],
        },
        properties: {
          phoneFormatted: "(703) 522-2016",
          phone: "7035222016",
          address: "4075 Wilson Blvd",
          city: "Arlington",
          country: "United States",
          crossStreet: "at N Randolph St.",
          postalCode: "22203",
          state: "VA",
        },
      },

      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-75.20121216774, 39.954030175164],
        },
        properties: {
          phoneFormatted: "(215) 386-1365",
          phone: "2153861365",
          address: "3925 Walnut St",
          city: "Philadelphia",
          country: "United States",
          postalCode: "19104",
          state: "PA",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.043959498405, 38.903883387232],
        },
        properties: {
          phoneFormatted: "(202) 331-3355",
          phone: "2023313355",
          address: "1901 L St. NW",
          city: "Washington DC",
          country: "United States",
          crossStreet: "at 19th St",
          postalCode: "20036",
          state: "D.C.",
        },
      },
    ],
  };

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  /**
   * Assign a unique id to each store. You'll use this `id`
   * later to associate each point on the map with a listing
   * in the sidebar.
   */
  stores.features.forEach((store, i) => {
    store.properties.id = i;
  });

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-77.034084, 38.909671],
      zoom: 12.5,
      // scrollZoom: false
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && stores) {
      Map.on("load", () => {
        Map.addSource("places", {
          type: "geojson",
          data: stores,
        });
        buildLocationList(stores);
        addMarkers();
      });
    }
  });

  /**
   * Add a marker to the map for every store listing.
   **/
  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
      /* Create a div element for the marker. */
      const el = document.createElement("div");
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = "marker";

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(Map);

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener("click", (e) => {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName("active");
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove("active");
        }
        const listing = document.getElementById(
          `listing-${marker.properties.id}`
        );
        listing.classList.add("active");
      });
    }
  }

  /**
   * Add a listing for each store to the sidebar.
   **/
  function buildLocationList(stores) {
    for (const store of stores.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById("listings");
      const listing = listings.appendChild(document.createElement("div"));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = "item";

      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement("a"));
      link.href = "#";
      link.className = "title";
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.address}`;

      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement("div"));
      details.innerHTML = `${store.properties.city}`;
      if (store.properties.phone) {
        details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
      }

      /**
       * Listen to the element and when it is clicked, do four things:
       * 1. Update the `currentFeature` to the store associated with the clicked link
       * 2. Fly to the point
       * 3. Close all other popups and display popup for clicked store
       * 4. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      link.addEventListener("click", function () {
        for (const feature of stores.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName("active");
        if (activeItem[0]) {
          activeItem[0].classList.remove("active");
        }
        this.parentNode.classList.add("active");
      });
    }
  }

  /**
   * Use Mapbox GL JS's `flyTo` to move the camera smoothly
   * a given center point.
   **/
  function flyToStore(currentFeature) {
    Map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  /**
   * Create a Mapbox GL JS `Popup`.
   **/
  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`
      )
      .addTo(Map);
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Локация</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main">
          <div className="sidebar">
            <div className="heading">
              <h1>Наши Адреса</h1>
            </div>
            <div id="listings" className="listings"></div>
          </div>
          <div id="map" className="map"></div>
        </main>
        {/* <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"></script> */}
      </div>
      <Footer />
    </>
  );
}
