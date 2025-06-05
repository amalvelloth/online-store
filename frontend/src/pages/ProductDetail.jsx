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
      const res = await axios.get(`https://online-store-backend-qvgt.onrender.com/api/products/${id}`);
      setProduct(res.data);
    };
    const fetchCart = async () => {
      const res = await axios.get('https://online-store-backend-qvgt.onrender.com/api/cart');
      const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };
    fetchProduct();
    fetchCart();
  }, [id]);

  const handleAddToCart = async () => {
    await axios.post('https://online-store-backend-qvgt.onrender.com/api/cart', { productId: id, quantity });
    const res = await axios.get('https://online-store-backend-qvgt.onrender.com/api/cart');
    const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  };

  if (!product) return <div className='pt-[7rem] m-auto text-3xl text-center'>Loading...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto pt-[5rem] md:pt-[7rem]">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-[300px] object-cover border" />
          <div className="flex gap-3 mt-4">
            <img src={product.image} alt="thumb1" className="w-20 h-20 object-cover border" />
            <img src={product.image} alt="thumb2" className="w-20 h-20 object-cover border" />
            <img src={product.image} alt="thumb3" className="w-20 h-20 object-cover border" />
          </div>
        </div>


        <div className="md:w-1/2 space-y-3">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p>Id: {product.id}</p>
          <p className="text-xl text-blue-600">Price: ${product.price}</p>
          <p className="text-green-600">{product.inventory > 0 ? 'In Stock' : 'Out of Stock'}</p>

          {/* Quantity */}
          <div className="flex items-center gap-2 my-4">
            <button
              className="w-8 h-8 border rounded"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            >-</button>
            <span className="px-4">{quantity}</span>
            <button
              className="w-8 h-8 border rounded"
              onClick={() => setQuantity(prev => prev + 1)}
            >+</button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={product.inventory === 0}
            className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Specifications */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Specifications</h3>
        <ul className="space-y-1 text-gray-700">
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Model Number:</strong> {product.modelNumber}</li>
          <li><strong>Dimensions:</strong> {product.dimensions}</li>
          <li><strong>Weight:</strong> {product.weight}</li>
          <li><strong>Material:</strong> {product.material}</li>
          <li><strong>Color:</strong> {product.color}</li>
          <li><strong>Origin:</strong> {product.origin}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailPage;
