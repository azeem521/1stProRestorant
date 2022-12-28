import Header from "./component/Layout/Header";
import Summary from "./component/Meals/Summary";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Header />
      <main>
        <Summary />
      </main>
    </div>
  );
}

export default App;
