import React from "react";
import "../../styles/Detail.css";

const catalogDetails = ({ item }) => {
  // const items = JSON.stringify(item);
  return (
    <>
      <div class="card-wrapper">
        <div class="card">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={item[0].image} alt="shoe5 image" />
                <img src={item[0].image} alt="shoe 4image" />
                <img src={item[0].image} alt="shoe 6image" />
                <img src={item[0].image} alt="shoe 7image" />
              </div>
            </div>
            <div class="img-select">
              <div class="img-item">
                <a href="#" data-id="1">
                  <img src={item[0].image} alt="shoe image" />
                  <div
                    className="image_back"
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="2">
                  <img src={item[0].image} alt="shoe image" />
                  {/* <div
                    className="image_back"
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div> */}
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="3">
                  <img src={item[0].image} alt="shoe image" />
                  <div
                    className="image_back"
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="4">
                  {/* <img src = "shoes_images/shoe_4.jpg" alt = "shoe image"> */}{" "}
                  <div
                    className="image_back"
                    style={{ backgroundImage: `url(${item[0].image})` }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h2 class="product-title">{item[0].name}</h2>
            <a href="#" class="product-link">
              Перейти на главную
            </a>
            <div class="product-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div class="product-price">
              <p class="last-price">
                Цена: <span>$257.00</span>
              </p>
              <p class="new-price">
                Цена с растаможкой: <span>{item[0].price}(5%)</span>
              </p>
            </div>

            <div class="product-detail">
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

            <div class="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" class="btn">
                Добавить в избранное <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
