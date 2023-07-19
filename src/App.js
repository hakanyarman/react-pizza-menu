import Pizza from "./Pizza";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const numOfPizzas = pizzaData.length;
const isPizzaDataNull = numOfPizzas === 0 ? true : false;

function App() {

  // const components = [];
  // const componentCount = pizzaData.length;

  // for (let i = 0; i < componentCount; i++) {
  //   components.push(<div key={i}><Pizza name={pizzaData[i].name} ingredients={pizzaData[i].ingredients} price={pizzaData[i].price} photoName={pizzaData[i].photoName} soldOut={pizzaData[i].soldOut} /></div>);
  // }

  return (
    <div className="App">
      {/* <Pizza name={pizzaData[0].name} ingredients={pizzaData[0].ingredients} price={pizzaData[0].price} photoName={pizzaData[0].photoName} soldOut={pizzaData[0].soldOut} /> */}
      <Header></Header>
      {/* {components} */}

      {/* RENDERING LIST WITH MAP METHOD */}

      {!isPizzaDataNull && (
        <ul>
          {pizzaData.map(pizza =>
            <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} soldOut={pizza.soldOut}></Pizza>
          )}
        </ul>
      )}

      <Footer></Footer>
    </div >
  );
}

export default App;
