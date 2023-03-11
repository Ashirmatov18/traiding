import * as React from "react";
import _ from "lodash";
import styles from "../../../public/styles/Pagination.module.css";

export default function PaginationRounded({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pageCount = items / pageSize;

  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav className={styles.center}>
      <ul className={styles.pagination}>
        {!!pages && pages.length > 0 ? (
          pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  page === currentPage
                    ? styles["page_item"] + styles.active
                    : styles["page_item"]
                }
              >
                <a onClick={() => onPageChange(page)}>{page}</a>
              </li>
            );
          })
        ) : (
          <h1 style={{}}>НИЧЕГО НЕ НАЙДЕНО</h1>
        )}
      </ul>
    </nav>
  );
}
