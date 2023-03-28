import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { createContext, useState } from "react";

export const MyContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoggedInValueChange = (key) => {
    setIsLoggedIn(key);
  };

  return (
    <MyContext.Provider value={{ isLoggedIn, onLoggedInValueChange }}>
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
