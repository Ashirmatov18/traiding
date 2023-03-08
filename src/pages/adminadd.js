import AdminPage from "../components/Admin/AdminPage";
import React from "react";
// import "../app/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function add() {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  return <AdminPage />;
}
