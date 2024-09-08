import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const fetchproducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = res.json();

    setProducts(data.products);
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <>
      <div className="main"></div>
    </>
  )
}

export default App
