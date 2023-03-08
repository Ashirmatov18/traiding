import React from "react";
import styles from "../../../styles/Footer.module.css";
import ScrollUpButton from "react-scroll-up-button";
import { Facebook, Insta, Telegram, Whats, Youtube } from "./FooterSvg";

export default function Footer(props) {
  return (
    <div className={styles.footer_main} {...props}>
      <ScrollUpButton />

      <div className={styles.first_part}>
        <div className={styles.logo}>
          <div>
            <span>Абдумомунова, 221 Первомайский район, Бишкек, 720033</span>
          </div>
        </div>

        <div className={styles.call}>
          <h2>Связаться с нами</h2>
          <h3>+996 507 70 35 16</h3>
          <h3>+86 155 2128 2836</h3>
          <div className={styles.face_whats}>
            <Facebook />
            <Whats />
          </div>
        </div>

        <div className={styles.link}>
          <Telegram />
          <Insta />
          <Youtube />
        </div>
      </div>

      <div className={styles.second_part}>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Партнеры</li>
        </ul>
      </div>
    </div>
  );
}
