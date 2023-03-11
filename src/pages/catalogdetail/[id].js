import Footer from "@/components/Container/footer/Footer";
import Header from "@/components/Container/Header/Header";
import React from "react";
import styles from "../../../public/styles/Detail.module.css";
// import "../../app/globals.css";

const catalogDetails = ({ item }) => {
  // const items = JSON.stringify(item);
  return (
    <>
      <Header />
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.product_imgs}>
            <div className={styles.img_display}>
              <div className={styles.img_showcase}>
                <img src={item[0].image} alt="shoe5 image" />
                <img src={item[0].image} alt="shoe 4image" />
                <img src={item[0].image} alt="shoe 6image" />
                <img src={item[0].image} alt="shoe 7image" />
              </div>
            </div>
            <div className={styles.img_select}>
              <div className={styles.img_item}>
                <a href="#" data-id="1">
                  <img src={item[0].image} alt="shoe image" />
                  <div
                    className={styles.image_back}
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
              <div className={styles.img_item}>
                <a href="#" data-id="2">
                  <img src={item[0].image} alt="shoe image" />
                  {/* <div
                    className={styles.image_back"
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div> */}
                </a>
              </div>
              <div className={styles.img_item}>
                <a href="#" data-id="3">
                  <img src={item[0].image} alt="shoe image" />
                  <div
                    className={styles.image_back}
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
              <div className={styles.img_item}>
                <a href="#" data-id="4">
                  {/* <img src = "shoes_images/shoe_4.jpg" alt = "shoe image"> */}{" "}
                  <div
                    className={styles.image_back}
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.product_content}>
            <h2 className={styles.product_title}>{item[0].name}</h2>
            <a href="#" className={styles.product}>
              Перейти на главную
            </a>
            <div className={styles.product_rating}>
              {/* <i className={styles.fas fa-star"></i>
              <i className={styles.fas fa-star"></i>
              <i className={styles.fas fa-star"></i>
              <i className={styles.fas fa-star"></i>
              <i className={styles.fas fa-star-half-alt"></i> */}
              <span>4.7(21)</span>
            </div>

            <div className={styles.product_price}>
              <p className={styles.last_price}>
                Цена: <span>$257.00</span>
              </p>
              <p className={styles.new_price}>
                Цена с растаможкой: <span>{item[0].price}(5%)</span>
              </p>
            </div>

            <div className={styles.product_detail}>
              <h2>О машине: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                <li>
                  Цвет: <span>{item[0].color}</span>
                </li>
                <li>
                  В наличие какой страны: <span>in stock</span>
                </li>
                <li>
                  Комплектация: <span>Shoes</span>
                </li>
                <li>
                  Пробег: <span>All over the world</span>
                </li>
                <li>
                  Обьем двигателя: <span>Free</span>
                </li>
                <li>
                  Год выпуска: <span>{item[0].year}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: "50px" }} />
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:5000/api/get/${id}`);
  const data = await res.json();
  // console.log(res);

  return {
    props: { item: data },
  };
}

export default catalogDetails;
