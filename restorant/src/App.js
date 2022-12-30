import { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import AvailableMeal from "./component/Meals/AvailableMeal";
import Meal from "./component/Meals/Meal";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  };

  const hideCartHandler=()=>{
      setCartIsShown(false)
  }

  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
        <AvailableMeal />
      </main>
    </Fragment>
  );
}

export default App; 
