import "./ProductList.css";
import "../ProductCard/ProductCard.css";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2"
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="Product_container_You">
        <h1>Products For You</h1>
        <div className="product_container_you_content">
          <aside className="product_category_you_aside">
            <h3>Category</h3>
            <div className="search_category_input">
              <input type="text" placeholder="Search" />
            </div>
            <div className="display_Category_list">
              <label htmlFor="bluetooth">
                <input type="checkbox" id="bluetooth" />
                <span>bluetooth Headset</span>
              </label>
              <label htmlFor="chains">
                <input type="checkbox" id="chains" />
                <span>Men Chains</span>
              </label>
              <label htmlFor="kurtas">
                <input type="checkbox" id="kurtas" />
                <span>Kurtas</span>
              </label>
              <label htmlFor="accessories">
                <input type="checkbox" id="accessories" />
                <span>Mobile Accessories</span>
              </label>
              <label htmlFor="sarees">
                <input type="checkbox" id="sarees" />
                <span>sarees</span>
              </label>
              <label htmlFor="watch">
                <input type="checkbox" id="watch" />
                <span>watch</span>
              </label>
            </div>
          </aside>
          <main
            className="product_category_display"
            id="product_category_displayId"
          >
            {data.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                rate={item.rating.rate}
                count={item.rating.count}
                image={item.image}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
