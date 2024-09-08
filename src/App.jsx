import './App.css';
import { useEffect } from 'react';

function App() {
  const fetchproducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = res.json();
    console.log(data);
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
