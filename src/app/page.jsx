import styles from "./page.module.css";
import { Oswald } from "@next/font/google";
import Head from "./head";
// const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./globals.css" />
      </Head>
      <main className={styles.main}></main>{" "}
    </>
  );
}

// className={oswald.className}
