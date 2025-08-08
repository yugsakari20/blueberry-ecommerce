import React, { useState } from 'react';
import img2 from '../assets/back-1.png';
import NewArrivals from '../components/NewArrivals';

const initialProducts = [
  { id: 1, name: 'Ground Nuts Oil Pack', price: 15, quantity: 1, image: img2 },
  { id: 2, name: 'Organic Litchi Juice Pack', price: 25, quantity: 1, image: img2 },
  { id: 3, name: 'Crunchy Banana Chips', price: 12, quantity: 1, image: img2 },
  { id: 4, name: 'Crunchy Potato Chips', price: 25, quantity: 1, image: img2 },
  { id: 5, name: 'Black Pepper Spice pack', price: 32, quantity: 1, image: img2 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialProducts);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharges = subTotal > 0 ? 5 : 0;
  const totalAmount = subTotal + deliveryCharges;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Summary Section */}
        <div className="bg-white p-6 rounded-xl shadow-md md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Country *</label>
              <select className="w-full border rounded-md p-2">
                <option>Country 1</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">State/Province *</label>
              <select className="w-full border rounded-md p-2">
                <option>Please Select a region, state</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Zip/Postal Code *</label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Zip/Postal Code" />
            </div>

            <div className="pt-4 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Sub-Total</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>${deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span className="text-red-500 cursor-pointer">Apply Coupon</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between text-lg">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-indigo-500 text-white py-2 rounded-md mt-4 hover:bg-indigo-600">
              Check Out
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-white p-6 rounded-xl shadow-md md:w-2/3">
          <div className="grid grid-cols-4 font-semibold border-b pb-2">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map(product => (
              <div key={product.id} className="grid grid-cols-4 items-center py-4 border-b">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-md" />
                  <span>{product.name}</span>
                </div>
                <div>${product.price.toFixed(2)}</div>
                <div className="flex items-center justify-center space-x-2">
                  <button onClick={() => handleQuantityChange(product.id, -1)} className="border px-2 rounded">-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)} className="border px-2 rounded">+</button>
                </div>
                <div className="flex items-center justify-between">
                  <span>${(product.price * product.quantity).toFixed(2)}</span>
                  <button onClick={() => handleRemoveItem(product.id)} className="text-red-500 hover:text-red-700">🗑️</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-8 text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
     
        <NewArrivals />
      
    </div>
  );
};

export default Cart;
