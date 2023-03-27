import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRoutes />
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
