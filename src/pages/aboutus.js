import Head from "@/app/head";
import About from "@/components/about/About";
import Footer from "@/components/Container/footer/Footer";
import Header from "@/components/Container/Header/Header";
import React from "react";

export default function Aboutus() {
  return (
    <>
      <main className="main">
        <Header />
        <About />
        <Footer />
      </main>
    </>
  );
}
