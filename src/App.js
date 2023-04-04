import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { createContext, useEffect, useState } from "react";
import data from "./data";

export const MyContext = createContext();

function App() {
  const universalData = data;
  const [isToastShown, setIsToastShown] = useState(false);

  const onToastShownChange = (key) => {
    setIsToastShown(key);
  };

  const [signUpData, setSignUpData] = useState([]);
  const [isSingnedUp, setIsSignedUp] = useState(false);

  const onSignedUpValueChange = (key) => {
    setIsSignedUp(key);
  };
  const addSignUpData = (newSignUpData) => {
    setSignUpData((prevData) => [...prevData, newSignUpData]);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("signUpData");
    if (storedData) {
      setSignUpData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("signUpData", JSON.stringify(signUpData));
  }, [signUpData]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoggedInValueChange = (key) => {
    setIsLoggedIn(key);
  };

  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (item) => {
    setCartItems([
      ...cartItems,
      {
        id: item.id,
        price: item.price,
        image: item.image,
        title: item.title,
        originalPrice: item.originalPrice,
        random: item.random,
        quantity: 1,
      },
    ]);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MyContext.Provider
      value={{
        universalData,
        isLoggedIn,
        onLoggedInValueChange,
        cartItems,
        addToCart,
        signUpData,
        isSingnedUp,
        onSignedUpValueChange,
        addSignUpData,
        isToastShown,
        onToastShownChange,
        searchTerm,
        setSearchTerm,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <NavBar className="navbar" />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
