import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEdit from "@/components/Admin/AddEdit";
import { toast } from "react-toastify";

const update = ({ item }) => {
  // const items = JSON.stringify(item);

  return <AddEdit />;
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:5000/api/get/${id}`);
  const data = await res.json();
  // console.log(res);

  return {
    props: { item: data },
  };
}

export default update;
