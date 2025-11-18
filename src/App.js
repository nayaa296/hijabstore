import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Produk from "./components/Produk";
import Checkout from "./components/Checkout";
import { ListGroup, Button } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Pashmina Basic",
    price: 85000,
    colors: ["Latte", "Terracota", "Army"]
  },
  {
    id: 2,
    name: "Pashmina Premium",
    price: 95000,
    colors: ["Latte", "Terracota", "Army"]
  },
  {
    id: 3,
    name: "Pashmina Diamond Ultrafine",
    price: 85000,
    colors: ["Dusty Pink", "Latte", "Army"]
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, color) => {
    const existing = cart.find(
      (item) => item.id === product.id && item.color === color
    );
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, color, qty: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Produk products={products} addToCart={addToCart} />

        <h3 className="mt-4">Keranjang</h3>
        {cart.length === 0 ? (
          <p className="text-muted">Keranjang kosong</p>
        ) : (
          <ListGroup>
            {cart.map((item, i) => (
              <ListGroup.Item
                key={i}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  {item.name} ({item.color}) x {item.qty}
                </div>
                <div>
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-3"
                    onClick={() => removeFromCart(i)}
                  >
                    Hapus
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        <Checkout cart={cart} total={total} />
      </div>
    </div>
  );
}
