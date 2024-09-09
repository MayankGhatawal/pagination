import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchproducts = async () => {
    fetch('https://fakestoreapi.com/products?limit=100')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  }
  return <>
   <div className='products'>
    {
      products.slice(page * 8 - 8, page * 8).map((product) => (
        <div key={product.id}>
          <p>{product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>Price: 💵{product.price}</p>
        </div>
      ))
    }
  </div>
  <div>
    {
      products.length > 0 && <div className='pagination'>
        <span onClick={()=>selectPageHandler(page - 1)}>◀️</span>
        {
          [...Array(products.length / 10)].map((_, i)=>{
              return <span
              className={page===i+1 ? "pagination__selected" : ""}
               onClick={()=>selectPageHandler(i + 1)} key={i}>{i + 1}</span>;
          })
        }
        <span onClick={()=>selectPageHandler(page + 1)}>▶️</span>
      </div>
    }
  </div>
  </>
}

export default App
