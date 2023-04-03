import "./App.css";
// import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { createContext, useState } from "react";
import data from "./data";

export const MyContext = createContext();

function App() {
  const universalData = data;
  const signUpData = [];
  const [isSingnedUp, setIsSignedUp] = useState(false);
  const onSignedUpValueChange = (key) => {
    setIsSignedUp(key);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
      }}
    >
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <AppRoutes />
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
