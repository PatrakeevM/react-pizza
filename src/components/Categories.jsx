import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

export default function Categories() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryId === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
