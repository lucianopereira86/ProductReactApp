
import { useState } from 'react';
import { ProductList } from './components/ProductList';
import type { Product } from './models/Product';

function App() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Notebook Dell',
      price: 4500,
      stock: 5,
      description: 'Notebook com 16GB RAM'
    },
    {
      id: 2,
      name: 'Mouse Logitech',
      price: 150,
      stock: 0
    },
    {
      id: 3,
      name: 'Teclado Mecânico',
      price: 350,
      stock: 10
    }
  ];

  const [products2, setProducts] = useState(products);

  return (
    <main>
      <h1>ProductReactApp</h1>
      <ProductList products={products2} />
      <button onClick={() => setProducts(previous => previous.slice(1))}>Remover primeiro produto.</button>
    </main>
  );
}

export default App;
