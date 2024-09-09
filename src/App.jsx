import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchproducts = async () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return <>
   <div className='products'>
    {
      products.slice(page * 10 - 10, page * 10).map((product) => (
        <div key={product.id}>
          {/* <p>{product.title}</p> */}
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
        </div>
      ))
    }
  </div>
  <div className="high">
    <span>◀️</span>
    <span>▶️</span>
  </div>
  </>
}

export default App
