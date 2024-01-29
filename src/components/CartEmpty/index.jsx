import React from "react";
import { Link } from "react-router-dom";

import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Корзина пуста</h1>
      <h3 className={styles.text}>Добавьте продукты в корзину!</h3>
      <Link to={"/"} className={styles.btn}>
        <svg
          className={styles.arrow}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
