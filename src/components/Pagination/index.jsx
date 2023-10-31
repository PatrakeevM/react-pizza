import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import s from "./Pagination.module.scss";
import { setCurrentPage } from "../../redux/slices/filterSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3} // Жёстко указываем кол-во страниц из-за тестового 'BackEnd'a' (MockAPI)
      renderOnZeroPageCount={null}
    />
  );
}
