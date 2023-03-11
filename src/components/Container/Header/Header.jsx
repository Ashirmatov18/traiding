import Image from "next/image";
import React from "react";
import styles from "../../../../public/styles/Header.module.css";
import logo from "../../../../public/images/IMG_0844.PNG";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.main_navbar}>
      <div>
        <input className={styles.inp} type="checkbox" id={styles.active} />
        <label htmlFor={styles.active} className={styles.menu_btn}>
          <span></span>
        </label>
        <label htmlFor={styles.active} className={styles.close}></label>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image className={styles.logo} src={logo} alt="logo" />
          </Link>

          <ul>
            <li>
              <Link href="/catalog" key="catalog">
                КАТАЛОГ
              </Link>
            </li>
            <li>
              <Link href="/aboutus" key="aboutus">
                О НАС
              </Link>
            </li>
            <li>
              <Link href="/booking">ТОВАРЫ</Link>
            </li>
            <li>
              <Link href="/contacts">АДРЕС</Link>
            </li>
            <li>
              <Link href="/connectus">СВЯЗАТЬСЯ С НАМИ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
