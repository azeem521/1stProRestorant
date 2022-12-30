import { Fragment } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import AvailableMeal from "./component/Meals/AvailableMeal";
import Meal from "./component/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meal />
        <AvailableMeal />
        <Cart />
      </main>
    </Fragment>
  );
}

export default App; 
