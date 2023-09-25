import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";

function App() {
  return (
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
