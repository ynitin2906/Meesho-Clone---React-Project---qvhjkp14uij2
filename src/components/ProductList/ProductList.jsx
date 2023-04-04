import "./ProductList.css";
import "../ProductCard/ProductCard.css";
import React, { useContext, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { MyContext } from "../../App";

const ProductList = () => {
  const mycontext = useContext(MyContext);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.id;
    if (e.target.checked) {
      setCheckedCategories([...checkedCategories, category]);
    } else {
      setCheckedCategories(checkedCategories.filter((c) => c !== category));
    }
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = mycontext.universalData.filter((product) => {
    if (checkedCategories.length === 0) {
      return product.category
        .toLowerCase()
        .includes(mycontext.searchTerm.toLowerCase());
    } else {
      return (
        checkedCategories.includes(product.category) &&
        product.category
          .toLowerCase()
          .includes(mycontext.searchTerm.toLowerCase())
      );
    }
  });

  if (sortOption === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div>
      <div className="Product_container_You">
        <h1>Products For You</h1>
        <div className="product_container_you_content">
          <aside className="product_category_you_aside">
            <h3 className="category-heading">Sort By</h3>
            <select
              className="sort-select"
              value={sortOption}
              onChange={handleSortOptionChange}
            >
              <option value="">Select an option</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

            <h3 className="category-heading">Category</h3>
            <div className="display_Category_list">
              <label htmlFor="men">
                <input
                  type="checkbox"
                  id="men's clothing"
                  onChange={handleCategoryChange}
                />
                <span>men's clothing</span>
              </label>
              <label htmlFor="jewelery">
                <input
                  type="checkbox"
                  id="jewelery"
                  onChange={handleCategoryChange}
                />
                <span>jewelery</span>
              </label>
              <label htmlFor="electronics">
                <input
                  type="checkbox"
                  id="electronics"
                  onChange={handleCategoryChange}
                />
                <span>electronics</span>
              </label>
              <label htmlFor="women">
                <input
                  type="checkbox"
                  id="women's clothing"
                  onChange={handleCategoryChange}
                />
                <span>women's clothing</span>
              </label>
              <label htmlFor="kids">
                <input
                  type="checkbox"
                  id="kids"
                  onChange={handleCategoryChange}
                />
                <span>kids</span>
              </label>
              <label htmlFor="bags">
                <input
                  type="checkbox"
                  id="bags"
                  onChange={handleCategoryChange}
                />
                <span>bags</span>
              </label>
            </div>
          </aside>
          <main
            className="product_category_display"
            id="product_category_displayId"
          >
            {filteredProducts.map((item) => (
              <ProductCard
                id={item.id}
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
