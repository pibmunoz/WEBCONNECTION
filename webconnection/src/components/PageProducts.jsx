import React, { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import "../App.css";
// import { ProductList } from './ProductList'
// import { ProductContext } from '../context/DataContext'

export const PageProduct = () => {
  // const { hide } = useContext(ProductContext)
  const [db, setdb] = useState([]);

  useEffect(() => {
    const getdata = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => setdb(res.products));
    };
    getdata();
  }, []);

  return (
    <div>
      <div className="container">
        {db.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <Product
            key={product.id}
            name={product.name}
            image={product.thumbnail}
            countInStock={product.countInStock}
            description={product.description}
            price={product.price}
            quantityInitial=""
            textButton="Add item to cart"
          />
        ))}
      </div>
    </div>
  );
};
