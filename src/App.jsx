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
      <div>
      <h1>Product Titles</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ listStyle: 'none', marginBottom: '20px' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '150px', height: '150px' }} // Display product image
          />
          <h2>{product.title}</h2> {/* Display product title */}
        </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
