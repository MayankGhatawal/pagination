import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const fetchproducts = async () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <>
      <div className='products'>
      <h1>Product Titles</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ listStyle: 'none', marginBottom: '20px' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '200px', height: '200px' }}
          />
          <h4>{product.title}</h4>
        </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
