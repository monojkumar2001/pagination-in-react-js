import "./styles.css";
import { useEffect, useState } from "react";
// import  axios  from 'axios';
export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    console.log(data);
  };
  return <div className="App"></div>;
}
