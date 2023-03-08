import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();

  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", true);
    router.push("/adminadd");
  };
  return (
    <div>
      <form onSubmit={(e) => logIn(e)}>
        <h1>Log In</h1>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button>Log In</button>
      </form>
    </div>
  );
}
