import './App.css';
import { useEffect, useState } from 'react';

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


// function App() {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(50);

//   const increaseCount = () =>{
//   const newCount = count + 1;
//   setCount(newCount);
//   }
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick= {increaseCount}>Increase</button>
//     </div>
//   );
// }


 function App() {
   return(
     <div className='App'>
       {/* <Counter></Counter> */}
       <ExternalUsers></ExternalUsers>
       <User></User>
     </div>
   );
 }

//  new component
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return(
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <User 
          id={user.id}
          name={user.name} 
          username={user.username}
          email={user.email}
          phone={user.phone}
          ></User>)
      }
    </div>
  );
}

function User(props) {
  return(
    <div className='styling'>
      <p>ID: {props.id} </p>
      <h2>Name: {props.name} </h2>
      <h3>User Name: {props.username} </h3>
      <p>Email: {props.email} </p>
      <p>Phone: {props.phone} </p>
    </div>
  );
}


//  function Counter() {
//    const [Count, setCount] = useState(10);
//    const increaseCount = () =>setCount(Count + 1);
//    const Decrease = () =>setCount(Count - 1);
   
//   //  console.log(jahangir);
//    return(
//      <div>
//        <h1>Count: {Count} </h1>
//        <button onClick={increaseCount}>Increase</button>
//        <button onClick={Decrease}>Decrease</button>
//      </div> 
//    );
//  }

export default App;


 