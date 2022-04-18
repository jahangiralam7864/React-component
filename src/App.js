import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Product name="laptop" price="50000"></Product>
        <Product name="phone" price="15000"></Product>
        <Product name="watch" price="5000"></Product>
        <Product name="headphone" price="500"></Product>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

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

export default App;
