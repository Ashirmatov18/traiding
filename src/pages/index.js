import Header from "@/components/Container/Header/Header";
import Test from "@/components/Test";
import React from "react";
import styles from "../app/page.module.css";
// import "../app/globals.css";
export default function index() {
  return (
    <main className={styles.main}>
      <Header />
      <Test />
    </main>
  );
}
