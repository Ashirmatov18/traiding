import React, { useEffect, useState } from "react";
import styles from "../../../public/styles/Booking.module.css";
import axios from "axios";
import Header from "../Container/Header/Header";
import MainLayout from "../MainLayout";
export default function Booking() {
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [value, setValue] = useState("");
  // useEffect(() => {
  //   getEncarCar().then((data) => setState({ data }));
  // }, []);
  // const getEncarCar = async () => {
  //   const { data } = await axios.get(api);
  //   return data.SearchResults;
  // };
  const api = `https://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.Y.)&sr=%7CModifiedDate%7C${currentPage}%7C10`;
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
      // state.length < totalCount
    ) {
      setFetching(true);
    }
  };

  const filteredCars = state.filter((item) => {
    console.log(item);
    return item.Model.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    if (fetching) {
      console.log("fetching");
      axios
        .get(api)
        .then((response) => {
          setState([...filteredCars, ...response.data.SearchResults]);
          setCurrentPage((prevState) => prevState + 50);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [scrollHandler]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div className={styles.booking_bg}>
        <h1>Машины из кореи </h1>
      </div>
      <Header />
      <MainLayout>
        <input type="text" onChange={(event) => setValue(event.target.value)} />
        <div className={styles.encar_product}>
          {!!state && state.length ? (
            filteredCars.map((item, index) => (
              <div className={styles.product_card} key={index}>
                <div className={styles.product_image_name}>
                  {/* <Image
                src={`https://ci.encar.com${item.Photo}001.jpg`}
                alt="картинка машины"
                width={200}
                height={200}
              /> */}
                  <div
                    style={{
                      backgroundImage: `url(https://ci.encar.com${item.Photo}001.jpg)`,
                    }}
                    className={styles.img_car}
                  ></div>
                  <h1>{item.Model}</h1>
                </div>
                <div key={index} className={styles.product_info}>
                  {/* <h2>
              модель : <strong>{item.Model}</strong>
              пробег : {item.Mileage}
              id: {item.Id}
            </h2>
            <img src={`https://ci.encar.com${item.Photo}001.jpg`} alt="aaa" /> */}
                  <div className={styles.details}>
                    <p>{item.Mileage}</p>
                    <p>{item.Id}</p>
                    <p>{item.Model}</p>
                  </div>

                  <div className={styles.pricing_info}>
                    <p>Цена: {item.Price}</p>
                    <p>Модель: {item.Model}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </MainLayout>
      {/* <Footer /> */}
    </>
  );
}
