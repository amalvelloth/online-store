import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get('http://localhost:5000/api/cart');
      const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };
    fetchCart();
  }, []);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Online Store</Link>
        <div>🛒: {cartCount} items</div>
      </div>
    </nav>
  );
}
export default Navbar;