import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, Router } from "next/router";
import { toast } from "react-toastify";
import { useContext } from "react";
import styles from "../../styles/ConnectUs.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const initState = {
  name: "",
  year: "",
  color: "",
  price: "",
  driving: "",
  image: "",
  mainimage: "",
  secondimage: "",
  thirdimage: "",
  country: "",
  mileage: "",
  description: "",
  equipment: "",
};
const PAGE_SIZE = 2;
const priceCar = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

export default function AddEdit(props) {
  const router = useRouter();
  const { id } = router.query;
  const [img, setImg] = useState("");
  console.log(img, 12);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setinState({ ...resp.data[0] }));
  }, [id]);

  const {
    query = "all",
    category = "all",
    brand = "all",
    priceCar = "all",
    rating = "all",
    sort = "featured",
    // page = currentPage,
  } = router.query;

  const [inState, setinState] = useState(initState);

  const {
    name,
    driving,
    year,
    color,
    image,
    price,
    mainimage,
    secondimage,
    thirdimage,
    country,
    mileage,
    description,
    equipment,
  } = inState;

  const filterSearch = ({
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    priceCar,
    rating,
    // page
  }) => {
    const { query } = router;
    // if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (priceCar) query.priceCar = priceCar;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  // const categoryHandler = (e) => {
  //   filterSearch({ category: e.target.value });
  // };
  // const pageHandler = (page) => {
  //   filterSearch({ page });
  // };
  // const brandHandler = (e) => {
  //   filterSearch({ brand: e.target.value });
  // };
  // const sortHandler = (e) => {
  //   filterSearch({ sort: e.target.value });
  // };
  // const priceHandler = (e) => {
  //   filterSearch({ priceCar: e.target.value });
  // };
  // const ratingHandler = (e) => {
  //   filterSearch({ rating: e.target.value });
  // };

  const addContanct = async (data) => {
    const response = await axios.post("http://localhost:5000/api/post", data);
    // console.log(data);
    // .then(() => {
    //   setinState({ data });
    // })
    // .catch((err) => {
    //   toast.error(err.response.data);
    // });
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  // const updateContact = async (data, id) => {
  //   const response = await axios.put(`http://localhost:5000/user/${id}`, data);
  //   if (response.status === 200) {
  //     toast.success(response.data);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !driving || !year || !price || !color || !image) {
      alert("error");
    } else {
      if (!id) {
        // addContanct(inState);
        axios
          .post("http://localhost:5000/api/post", {
            name,
            year,
            color,
            price,
            driving,
            image,
            mainimage,
            secondimage,
            thirdimage,
            country,
            mileage,
            description,
            equipment,
          })
          .then(() => {
            setinState({
              name: "",
              year: "",
              color: "",
              price: "",
              driving: "",
              image: "",
              mainimage: "",
              secondimage: "",
              thirdimage: "",
              country: "",
              mileage: "",
              description: "",
              equipment: "",
            }).catch((err) => {
              toast.error(err.response.data);
            });
          });
      } else {
        // updateContact(inState, id);
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            year,
            color,
            price,
            driving,
            image,
            mainimage,
            country,
            secondimage,
            thirdimage,
            mileage,
            description,
            equipment,
          })
          .then(() => {
            setinState({
              name: "",
              year: "",
              color: "",
              price: "",
              driving: "",
              image: "",
              mainimage: "",
              secondimage: "",
              thirdimage: "",
              country: "",
              mileage: "",
              description: "",
              equipment: "",
            });
          });
      }

      setTimeout(() => router.push("/adminadd"), 500);
    }
  };
  console.log(inState);

  const handleChangeInput = (e) => {
    let { name, value } = e.target;
    setinState({ ...inState, [name]: value });
    // console.log(inState);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title}>Закажите машину</div>
      <div className={styles.subtitle}>Напишите что вы ищете!</div>
      <div className={`${styles.input_container} ${styles.ic1}`}>
        <input
          name="name"
          id="name"
          // placeholder="Модель"
          onChange={handleChangeInput}
          defaultValue={name || ""}
          className={styles.input}
          type="text"
        />
        <div className={styles.cut}></div>
        <label forHtml="firstname" className={styles.placeholder}>
          Модель машины
        </label>
      </div>
      {/* 
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="driving"
          id="driving"
          onChange={handleChangeInput}
          defaultValue={driving || ""}
          className={styles.input}
          type="text"
        />
        <div className={styles.cut}></div>
        <label forHtml="lastname" className={styles.placeholder}>
          Привод
        </label>
      </div> */}

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="driving">Привод</InputLabel>
        <Select
          labelId="driving"
          id="driving"
          name="driving"
          // value={driving || ""}
          value={driving ?? ""}
          onChange={handleChangeInput}
          label="Привод"
        >
          <MenuItem value={"задний"}>задний</MenuItem>
          <MenuItem value={"передний"}>передний</MenuItem>
          <MenuItem value={"Полный "}>Полный</MenuItem>
          <MenuItem value={"Гибрид "}>Гибрид</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="equipment">Комлектация</InputLabel>
        <Select
          labelId="equipment"
          id="equipment"
          name="equipment"
          // value={driving || ""}
          value={equipment ?? ""}
          onChange={handleChangeInput}
          label="Комлектация"
        >
          <MenuItem value={"Базовая"}>Базовая</MenuItem>
          <MenuItem value={"Средняя"}>Средняя</MenuItem>
          <MenuItem value={"Максимальная"}>Максимальная</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="country">Страна</InputLabel>
        <Select
          labelId="country"
          id="country"
          name="country"
          // value={driving || ""}
          value={equipment ?? ""}
          onChange={handleChangeInput}
          label="Страна"
        >
          <MenuItem value={"Базовая"}>Корея</MenuItem>
          <MenuItem value={"Средняя"}>Кыргызстан</MenuItem>
          <MenuItem value={"Максимальная"}>Максимальная</MenuItem>
        </Select>
      </FormControl>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          type="number"
          name="year"
          id="year"
          // placeholder="Год выпуска"
          onChange={handleChangeInput}
          defaultValue={year || ""}
          className={styles.input}
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="email" className={styles.placeholder}>
          Год
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="color"
          id="color"
          // placeholder="Цвет"
          onChange={handleChangeInput}
          defaultValue={color || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="ЦВЕТ" className={styles.placeholder}>
          ЦВЕТ
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          type="number"
          name="price"
          id="price"
          // placeholder="Цена"
          onChange={handleChangeInput}
          defaultValue={price || ""}
          className={styles.input}
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Цена
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          type="number"
          name="mileage"
          id="mileage"
          // placeholder="Цена"
          onChange={handleChangeInput}
          defaultValue={mileage || ""}
          className={styles.input}
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Пробег
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="image"
          id="image"
          // placeholder="Вставить картинку"
          onChange={handleChangeInput}
          defaultValue={image || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Добавить картинку
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="mainimage"
          id="mainimage"
          // placeholder="Вставить картинку"
          onChange={handleChangeInput}
          defaultValue={mainimage || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Добавить 2 картинку
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="secondimage"
          id="secondimage"
          // placeholder="Вставить картинку"
          onChange={handleChangeInput}
          defaultValue={secondimage || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Добавить 3 картинку
        </label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="thirdimage"
          id="thirdimage"
          // placeholder="Вставить картинку"
          onChange={handleChangeInput}
          defaultValue={thirdimage || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Добавить 4 картинку
        </label>
      </div>

      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          name="description"
          id="description"
          // placeholder="Вставить картинку"
          onChange={handleChangeInput}
          defaultValue={description || ""}
          className={styles.input}
          type="text"
        />
        <div className={`${styles.desscription}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Добавить описание
        </label>
      </div>
      {/* <div className={`${styles.input_container} ${styles.ic2}`}>
        <input
          type="text"
          name="mileage"
          id="mileage"
          placeholder="Пробег"
          onChange={handleChangeInput}
          defaultValue={mileage}
          className={styles.input}
        />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label for="COMPLECT" className={styles.placeholder}>
          Привод
        </label>
      </div> */}
      {/* <Link href={"/adminadd"}> */}
      <input type="file" onChange={(e) => setImg(e.target.files)} />
      <input
        type="submit"
        value={id ? "update" : "add"}
        className={styles.submit}
      />
      {/* </Link> */}
    </form>
  );
}
