import { useState, useEffect } from 'react';
// custom hooks
import { useFetch } from './hooks/useFetch';

import './App.css';

const url = 'http://localhost:5500/products/';

function App() {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // fetching products
  const { data: items, httpConfig, isSendingProduct, error } = useFetch(url);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // add products
  async function handleSubmit(event) {
    event.preventDefault();

    const product = { productName, productPrice };

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(product)
    // });

    // const addedProduct = await res.json();
    // console.log(addedProduct);

    // // dinamic data loading
    // setProducts(prevProducts => [...prevProducts, addedProduct]);

    httpConfig(product, 'POST');

    setProductName('');
    setProductPrice('');
  }



  return (
    <div className="App">
      <h2>Products List</h2>

      { isSendingProduct && <p>Loading...</p> }
      { error && <p>{error}</p> }
      { !error && (
        <ul>
          {items && items.map(({ id, productName, productPrice }) => (
            <li key={id}>{productName} - {productPrice}</li>
          ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Produto
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              name="productName"
            />
          </label>

          <label>
            Preço do Produto
            <input
              type="number"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
              name="productPrice"
            />
          </label>

          <button
            type="submit"
            disabled={ isSendingProduct }
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
