import { useContext } from "react";
import { CartProvider, CartContext } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function ShoppingApp() {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ My Online Store</h1>
        <p>Simple shopping cart using React Context and useReducer</p>
      </header>

      <main>
        <ProductList onAdd={handleAddToCart} />
        <Cart />
      </main>

      <footer className="footer">
        <p>© 2026 My Online Store</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <ShoppingApp />
    </CartProvider>
  );
}

export default App;