import Cart from "./components/Cart/Cart";
import NavBar from "./components/Layout/NavBar";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Cart />
      <NavBar />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
