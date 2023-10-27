import React from "react";
import ReactPaginate from "react-paginate";

import s from "./Pagination.module.scss";

export default function Pagination({ onChangePage }) {
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
