import { useState } from "react";
import CartContext from "./Contexts/cartContext";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Layout/NavBar";
import Meals from "./components/Meals/Meals";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <CartContext.Provider value={{ clicked: clicked, setClicked: setClicked }}>
        <Cart />
        <NavBar />
      </CartContext.Provider>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
