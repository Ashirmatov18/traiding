import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/Container/footer/Footer";
import Header from "@/components/Container/Header/Header";
import React from "react";
import "../app/globals.css";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <Contacts />
    </div>
  );
}
