import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSort } from "../redux/slices/filterSlice";

const sortList = [
  {
    name: "популярности (по убыванию)",
    sortProperty: "rating",
  },
  {
    name: "популярности (по возрастанию)",
    sortProperty: "-rating",
  },
  {
    name: "цене (по убыванию)",
    sortProperty: "price",
  },
  {
    name: "цене (по возрастанию)",
    sortProperty: "-price",
  },
  {
    name: "алфавиту (от 'Я' до 'А')",
    sortProperty: "title",
  },
  {
    name: "алфавиту (от 'А' до 'Я')",
    sortProperty: "-title",
  },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = React.useRef();

  const [openSort, setOpenSort] = React.useState(false);

  const activeSort = (obj) => {
    dispatch(setSort(obj));
    setOpenSort(false);
  };

  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenSort(false);
      }
    };
    document.body.addEventListener("click", clickOutside);

    return () => document.body.removeEventListener("click", clickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpenSort(!openSort)}>{sort.name}</span>
      </div>
      {openSort && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => activeSort(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
