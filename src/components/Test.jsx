"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Header from "./Container/Header/Header";
import styles from "../styles/Test.module.css";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./Container/footer/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/IMG_0844.PNG";
import call from "../../public/16968441221536925048.svg";
// import videobg from "../../public/videobg.mp4";

export default function Test() {
  let productsp = [
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://impel.io/wp-content/uploads/2022/02/ABR-Full-639x480.jpg",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?b=1&s=170667a&w=0&k=20&c=QKVzqIOrSi8pYPDM90tUOpECoLcfbe8GVIkJDBI7cb8=",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://media.istockphoto.com/id/468686480/photo/modern-generic-car-on-white-background.jpg?s=170667a&w=0&k=20&c=-bEVTQ5-_fN1cU0b1Pi-U-zD9d4ew2-ZokcisSY8gEo=",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/c/7/populjarnye-avto-korei-cover-normal.webp",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/d/5/populjarnye-avto-japonii-cover-normal.webp",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/f/7/s-probegom-po-rf-cover-normal.webp",
      price: 100,
    },
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/9/d/bez-probega-po-rf-cover-normal.webp",
      price: 100,
    },
  ];

  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div>
      <div>
        {/* <div className={styles.main_bg_image}> */}
        <div className={styles.overlay}></div>
        <video className={styles.video_bg} autoPlay loop muted>
          <source src="./video3.mp4" />
        </video>
        <div className={styles.main_name}>
          <div className={styles.logo_center}>
            {/* <Image className={styles.logo} src={logo} /> */}

            <h1>
              Автомобили <br /> из{" "}
              <strong>
                Южной <br /> Кореи
              </strong>
            </h1>
          </div>
          {/* <h1 className={styles.name}>KG-TRADING</h1> */}
          {/* <h1 className={styles.name_company}>Автомобили из Южной Кореи</h1> */}
          <div className={styles.main_page_number}>
            <div className={styles.main_page_number_first}>
              <div className={styles.main_page_number_img}></div>
              <div>
                <span>Позвони нам</span>
                <p>+996550157055</p>
              </div>
            </div>
            <div className={styles.main_page_number_first}>
              <div className={styles.main_page_number_img_second}></div>
              <div>
                <span>Наша почта</span>
                <p>+996550157055</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className={styles.main_bg}>
          <div className="row no-gutters">
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
              id="owl-carousel-products"
            >
              {/* <h3 className="text-center">
                <span className="heading float-left w-100">Наши продукты</span>
              </h3> */}
              <ul
                id="owl-carousel-ul"
                className="owl-carousel owl-loaded owl-drag"
              >
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={2}
                  nav={true}
                  navText={[
                    '<img src= "/images/Arrow_left.png" />',
                    '<img src="/images/Arrow_right.png" />',
                  ]}
                  dots={true}
                  animateIn={true}
                  {...options}
                >
                  {productsp && productsp.length > 0
                    ? productsp.map((product) => {
                        return (
                          <div
                            id="featuredProducts"
                            // className="item float-left w-100"
                            key={product.name}
                          >
                            <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                              <a
                                href={product.url}
                                style={{
                                  display: "inline-block",
                                  textAlign: "center",
                                }}
                              >
                                <a className="product float-left">
                                  <span className="image text-center">
                                    <img
                                      id={"img" + product.id}
                                      src={product.url}
                                      alt={product.name}
                                      title={product.name}
                                      className={styles.image_car_slider}
                                    />
                                  </span>
                                  <span className="w-100 text-center mt-1">
                                    <h5
                                      className="brand text-capitalize float-left"
                                      style={{
                                        textAlign: "center",
                                        fontSize: "35px",
                                      }}
                                    >
                                      {product.brand}
                                    </h5>
                                    {/* <span
                                      style={{ fontSize: "20px" }}
                                      className="name"
                                    >
                                      {product.name}
                                    </span> */}
                                  </span>
                                </a>
                              </a>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </OwlCarousel>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "70px",
          marginTop: "70px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
      >
        О Нас
      </h1>
      <div className={styles.main_info_about}>
        <div className={styles.main_info_text}>
          <h2 style={{ paddingTop: "20px", paddingBottom: "50px" }}>
            Наша компания
          </h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          beatae, nisi ea quos doloremque nostrum quia voluptatem explicabo
          autem dolorem esse dolore illum aut cupiditate minima non voluptas
          ipsa aliquid. <br /> Eos sint molestias voluptas adipisci consectetur
          obcaecati facilis nam! Quia sunt dolores iure nostrum consectetur cum
          nobis voluptatibus sapiente praesentium enim non expedita iusto unde
          eaque quisquam, <br /> <br /> provident repellat cupiditate? Officiis
          quam beatae, ipsam, repellat vero dolorum voluptatibus voluptatem
          dolore maxime, id non doloremque? <br /> <br /> Eos dignissimos, eaque
          suscipit expedita laborum voluptatibus commodi inventore, accusamus,
          deserunt corporis provident sit iste amet. Labore possimus explicabo
          maxime alias atque quos eos,
        </div>
        <div className={styles.main_info_img}></div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "70px",
          marginTop: "5 0px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
      >
        Наш Каталог
      </h1>
      <div className={styles.car_storage}>
        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>

        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>

        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>

        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>

        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>

        <div className={styles.car_card}>
          <div className={styles.car_card_img}></div>
          <h3 className={styles.car_card_title}>Range Rover</h3>
          <span className={styles.car_card_price}>ЦЕНА : 11500$</span>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.storage_button}>
          <Link href="/catalog">Перейти ко всем</Link>
        </button>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
      >
        Связаться с нами
      </h1>
      <div className={styles.connect_us}>
        <div className={styles.message}>
          <h1>Оставить сообщение</h1>
          <div className={styles.input_group}>
            <input type="text" placeholder="Ф.И.О" />
            <input type="text" placeholder="E-mail" />
            <select placeholder="Выбрать тему" className={styles.select_name}>
              <option value="volvo">Вид</option>
              {/* <option value="saab">!</option>
              <option value="opel">2</option> */}
            </select>
            <input
              className={styles.input_message}
              type="text"
              placeholder="Ваше сообщение"
            />
          </div>
          <button>Оставить сообщение</button>
        </div>
        <Footer id={styles.footer_contact} />
      </div>
    </div>
  );
}
