import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Nav';
import Footer from './Footer';
import Produk from './../pages/Produk';
import Keranjang from './../pages/Keranjang';
import Checkout from './../pages/Checkout';
import { CartProvider } from './../context/CartContext';

function Routing() {
  return (
    <CartProvider>
        <Routes>
          <Route path="/" element={<Produk />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
    </CartProvider>
  );
}

export default Routing;
