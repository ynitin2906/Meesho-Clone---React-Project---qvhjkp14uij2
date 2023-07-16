import "./ProductList.css";
import "../ProductCard/ProductCard.css";
import React, { useContext, useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { MyContext } from "../../App";

const ProductList = () => {
  const mycontext = useContext(MyContext);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [mycontext.searchTerm, checkedCategories, sortOption]);

  // const filteredProducts = mycontext.universalData.filter((product) => {
  //   if (checkedCategories.length === 0) {
  //     return product.category
  //       .toLowerCase()
  //       .includes(mycontext.searchTerm.toLowerCase());
  //   } else {
  //     return (
  //       checkedCategories.includes(product.category) &&
  //       product.category
  //         .toLowerCase()
  //         .includes(mycontext.searchTerm.toLowerCase())
  //     );
  //   }
  // });

  const filteredProducts = mycontext.universalData.filter((product) => {
    const searchTerm = mycontext.searchTerm.toLowerCase();
    const categoryMatch =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.category);
    const titleMatch = product.title.toLowerCase().includes(searchTerm);
    const catgMatch = product.category.toLowerCase().includes(searchTerm);
    const categoryTitleMatch =
      (categoryMatch && titleMatch) || (categoryMatch && catgMatch);
    return categoryTitleMatch;
  });

  if (sortOption === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="product-you-cantainer">
      <div className="Product_container_You">
        <div className="products-you-heading">
          <h1 style={{ fontWeight: 400 }}>Products For You</h1>
        </div>
        <div className="product_container_you_content">
          <aside className="product_category_you_aside">
            <div className="sort-by-container">
              <h3 style={{ fontWeight: 350 }} className="category-heading">
                Sort By
              </h3>
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
            </div>

            <div>
              <h3 style={{ fontWeight: 350 }} className="category-heading">
                Category
              </h3>
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
            </div>
          </aside>
          <main
            className="product_category_display"
            id="product_category_displayId"
          >
            {currentItems.map((item) => (
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
      <div className="paginate-container">
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <button
                onClick={() => paginate(pageNumber)}
                className="page-link"
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductList;
