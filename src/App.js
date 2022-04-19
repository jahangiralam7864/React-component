import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//         <Product name="laptop" price="50000"></Product>
//         <Product name="phone" price="15000"></Product>
//         <Product name="watch" price="5000"></Product>
//         <Product name="headphone" price="500"></Product>
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div className="product">
//       <h1>Name: {props.name}</h1>
//       <h4>Price: {props.price}</h4>
//     </div>
//   );
// }

// or

// function App() {
//   const products = [
//     {name: 'computer', price:10000},
//     {name: 'radio', price:20000},
//     {name: 'mobile', price:30000},
//     {name: 'TV', price:40000},
//   ]

//   return (
//     <div className="App">
//       {
//         products.map(product=> <Products name={product.name} price={product.price}></Products>)
//       }
//     </div>
//   );
// }


// function Products(props) {
//   return (
//     <div className="product">
//       <h1>Name: {props.name}</h1>
//       <h4>Price: {props.price}</h4>
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(50);

  const increaseCount = () =>{
  const newCount = count + 1;
  setCount(newCount);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
