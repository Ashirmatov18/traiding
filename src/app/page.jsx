import styles from "./page.module.css";
import Test from "@/components/Test";
import { Oswald } from "@next/font/google";
import Header from "@/components/Container/Header/Header";

// const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Test />
    </main>
  );
}

// className={oswald.className}
