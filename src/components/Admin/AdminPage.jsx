import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../../public/styles/AdminPage.module.css";
import PaginationRounded from "../pagination/Pagination";
import { paginate } from "../pagination/paginate";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   color: "black",
// };

export default function AdminPage() {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  console.log(data);

  const onDelete = (id) => {
    // const response = await axios.delete(
    //   `http://localhost:5000/api/remove/${id}`
    // );
    // if (response.status === 200) {
    //   getUsers();
    // }
    // setOpen(false);
    if (window.confirm("Вы хотите удалить?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("удален успешно");
      setTimeout(() => getUsers(), 500);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(setCurrentPage(page));
  };

  const filterItem = (categItem) => {
    const chooseItem = data.filter((curElem) => {
      return curElem.name === categItem;
    });
    setData(chooseItem);
  };

  const fromLowerToHigher = () => {
    const sorted = searchItem.sort((a, b) => a.price - b.price);
    setData(sorted);
  };

  const fromHigherToLower = () => {
    const sortToHigh = searchItem.sort((a, b) => b.price - a.price);
    setData(sortToHigh);
  };

  const searchItem = data.filter((car) => {
    return car.name.toLowerCase().includes(value.toLowerCase());
  });

  const paginateData = paginate(searchItem, currentPage, pageSize);

  console.log(data);

  return (
    <main className={styles.main}>
      <div className={styles.button_a}>
        <Link href="/addcar">
          <button className={styles.add_button}>Добавить</button>
        </Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Найти"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => filterItem("asdsa")}>bmw</button>
        <button onClick={() => getUsers()}>all</button>
        <button onClick={() => fromLowerToHigher()}>----</button>
        <button onClick={() => fromHigherToLower()}>+++</button>
      </div>

      {data &&
        paginateData.map((item, index) => {
          return (
            <div className={styles.card}>
              <ul className={styles.card_menu}>
                <a className={styles.car_menu_item}>
                  <img
                    className={styles.card_menu_img}
                    src={item.secondimage}
                  />
                </a>
              </ul>

              {/* <div
                style={{ backgroundImage: `url(${item.image})` }}
                
              ></div> */}
              <img src={item.image} className={styles.card_img} />

              <div className={styles.card_info}>
                <h1 className={styles.card_title}>{item.name}</h1>
                <p className={styles.card_desc}>{item.price}</p>
                <div className={styles.card_button_body}>
                  <Link
                    href={"/catalogdetail/[id]"}
                    as={`/catalogdetail/${item.id}`}
                  >
                    <button className={styles.card_button}>Подробнее</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      <div className={styles.card_list}>
        {data &&
          paginateData.map((item, index) => {
            return (
              <>
                <div className={styles.card_main}>
                  <div key={index} className={styles.car_card}>
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                      className={styles.card_img}
                    ></div>
                    <div style={{ padding: "10px" }}>
                      <h1
                        style={{ textAlign: "center", fontSize: "30px" }}
                        className={styles.detail}
                      >
                        {item.name}
                      </h1>
                      <h3
                        style={{ textAlign: "center", fontSize: "25px" }}
                        className={styles.price_detail}
                      >
                        Цена: <strong>{item.price} $</strong>
                      </h3>
                    </div>
                  </div>
                  <div className={styles.control_buttons}>
                    <Link href={"/update/[id]"} as={`/update/${item.id}`}>
                      <button className={styles.button_u}>Изменить</button>
                    </Link>
                    <button
                      className={styles.button_d}
                      onClick={() => onDelete(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        <PaginationRounded
          items={searchItem.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
