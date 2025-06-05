import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('asc');
  const limit = 3;

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products?page=${page}&limit=${limit}&sort=${sort}&order=${order}`);
      setProducts(res.data.products || []);
      setTotal(res.data.total || 0);
    } catch (err) {
      setProducts([]);
      setTotal(0);
      console.error('Failed to fetch products:', err);
    }
  };
  fetchProducts();
}, [page, sort, order]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <select
          className="p-2 border rounded"
          value={`${sort}-${order}`}
          onChange={(e) => {
            const [newSort, newOrder] = e.target.value.split('-');
            setSort(newSort);
            setOrder(newOrder);
          }}
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {(products || []).map((product) => (
    <div key={product._id || product.id} className="border rounded-lg p-4 bg-white shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product._id || product.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </Link>
    </div>
  ))}
</div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded mr-2 disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          disabled={page * limit >= total}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default ProductListingPage;