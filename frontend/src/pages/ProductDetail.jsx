import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    };
    const fetchCart = async () => {
      const res = await axios.get('http://localhost:5000/api/cart');
      const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };
    fetchProduct();
    fetchCart();
  }, [id]);

  const handleAddToCart = async () => {
    await axios.post('http://localhost:5000/api/cart', { productId: id, quantity });
    const res = await axios.get('http://localhost:5000/api/cart');
    const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
          <div className="flex gap-2 mt-4">
            <img src={product.image} alt="thumb1" className="w-20 h-20 object-cover rounded" />
            <img src={product.image} alt="thumb2" className="w-20 h-20 object-cover rounded" />
            <img src={product.image} alt="thumb3" className="w-20 h-20 object-cover rounded" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">Id: {product.id}</p>
          <p className="text-xl text-blue-600">${product.price}</p>
          <p className="text-green-600">{product.inventory > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <div className="my-4">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 p-2 border rounded"
            />
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded"
            onClick={handleAddToCart}
            disabled={product.inventory === 0}
          >
            Add to Cart
          </button>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <ul className="list-disc pl-5">
              <li>Brand: {product.brand}</li>
              <li>Model Number: {product.modelNumber}</li>
              <li>Dimensions: {product.dimensions}</li>
              <li>Weight: {product.weight}</li>
              <li>Material: {product.material}</li>
              <li>Color: {product.color}</li>
              <li>Origin: {product.origin}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;