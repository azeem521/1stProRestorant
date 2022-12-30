import { Fragment } from "react";
import Header from "./component/Layout/Header";
import AvailableMeal from "./component/Meals/AvailableMeal";
import Meal from "./component/Meals/Meal";

function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <Header />
      <main>
        <Meal />
        <AvailableMeal />
      </main>
    </Fragment>
  );
}

export default App; 
