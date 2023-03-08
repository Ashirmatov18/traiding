import About from "@/components/about/About";
import Footer from "@/components/Container/footer/Footer";
import Header from "@/components/Container/Header/Header";
import React from "react";
// import "../app/globals.css";

export default function aboutus() {
  return (
    <main className="main">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
