import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PizzaInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();

  React.useEffect(() => {
    const getPizza = async () => {
      try {
        const { data } = await axios.get(
          "https://6527cdaf931d71583df169fa.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error!");
        navigate("/");
      }
    };
    getPizza();
  }, [id, navigate]);

  if (!pizza) {
    return "...Loading";
  }

  return (
    <div className="container">
      <img width={180} height={180} src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price} ₽</p>
    </div>
  );
};

export default PizzaInfo;
