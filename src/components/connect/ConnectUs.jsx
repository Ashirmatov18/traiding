import Link from "next/link";
import React from "react";
import styles from "../../styles/ConnectUs.module.css";
import axios from "axios";
import { Cheerio } from "cheerio";

export default function ConnectUs() {
  return (
    <>
      <div className={styles.main_bg_image}>
        <h1>СВЯЗАТЬСЯ С НАМИ</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>Закажите машину</div>
        <div className={styles.subtitle}>Напишите что вы ищете!</div>
        <div className={`${styles.input_container} ${styles.ic1}`}>
          <input
            id="firstname"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={styles.cut}></div>
          <label forHtml="firstname" className={styles.placeholder}>
            ИМЯ ФАМИЛИЯ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="lastname"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={styles.cut}></div>
          <label forHtml="lastname" className={styles.placeholder}>
            МОДЕЛЬ МАШИНЫ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="email"
            className={styles.input}
            type="number"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label for="email" className={styles.placeholder}>
            НОМЕР ТЕЛЕФОНА
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="color"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label for="ЦВЕТ" className={styles.placeholder}>
            ЦВЕТ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label for="COMPLECT" className={styles.placeholder}>
            КОМПЛЕКТАЦИЯ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label for="COMPLECT" className={styles.placeholder}>
            ОБЪЁМ ДВИГАТЕЛЯ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label for="COMPLECT" className={styles.placeholder}>
            ГОД ВЫПУСКА
          </label>
        </div>
        <Link href={"/"}>
          <button type="text" className={styles.submit}>
            Отправить
          </button>
        </Link>
      </div>

      <div className={styles.calculator}></div>
    </>
  );
}
