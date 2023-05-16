/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from "react";
import "../App.css";
// import { ProductContext } from '../context/DataContext'

export const Product = ({
  name,
  image,
  description,
  price,
  countInStock,
  quantityInitial,
  textButton,
}) => {
  const [url, seturl] = useState([""]);
  //   const { productAdded, setProductAdded } = useContext(ProductContext);

  //   useEffect(() => {
  //     const getimg = () => {
  //       fetch(`http://localhost:5000${image}`).then((res) => seturl(res.url));
  //     };
  //     getimg();
  //   }, []);

  const addProduct = (product) => {
    setProductAdded([...productAdded, product]);
  };

  const classNameDisabled = countInStock === 0 ? "disabledButton" : "enabled";

  return (
    <article className="container">
      <h2 className="title">{name} </h2>
      <img className="imagen" src={image} alt={name} />
      <p className="descripcion">${price}</p>
      <p className="descripcion">{description}</p>
      {/* <p>{quantityInitial} </p> */}

      <button
        onClick={() => addProduct({ name, image, price })}
        className={classNameDisabled}
      >
        {textButton}
      </button>
    </article>
  );
};
