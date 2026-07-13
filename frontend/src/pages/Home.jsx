import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart, getCartCount } = useCart();
  const [products] = useState([
    { _id: '1', name: 'Samsung Galaxy S23 Ultra', images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500'], basePrice: 1199, compareAtPrice: 1399, flashSaleDiscount: 20 },
    { _id: '2', name: 'Apple AirPods Pro 2', images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500'], basePrice: 199, compareAtPrice: 249, flashSaleDiscount: 15 }
  ]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">MarketHub</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
            🛒 Cart ({getCartCount()})
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hot Deals <span className="text-yellow-300">Up to 50% Off</span></h1>
        <p className="text-lg mb-6">Discover amazing products at unbeatable prices.</p>
      </section>

      {/* Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">⚡ Flash Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p._id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
              <div className="relative aspect-square bg-gray-100">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-{p.flashSaleDiscount}%</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 truncate">{p.name}</h3>
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xl font-bold text-orange-600">${p.basePrice}</span>
                  <span className="text-sm text-gray-400 line-through">${p.compareAtPrice}</span>
                </div>
                <button onClick={() => addToCart(p)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-bold transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
