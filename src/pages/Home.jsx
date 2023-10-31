import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Pizza/Skeleton";
import Pizza from "../components/Pizza";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

export default function Home() {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj) => <Pizza key={obj.id} {...obj} />);

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `https://6527cdaf931d71583df169fa.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination />
    </>
  );
}
