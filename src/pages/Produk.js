import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import hijabParis from '../assets/img/paris.jpeg';
import hijabPashmina from '../assets/img/pashmina.jpg';
import hijabInstan from '../assets/img/instan.jpg';

function Produk() {
  const { addToCart } = useContext(CartContext);
  const allProducts = [
    { name: "Hijab Paris", price: "50000", image: hijabParis, category: "Paris" },
    { name: "Hijab Pashmina", price: "75000", image: hijabPashmina, category: "Pashmina" },
    { name: "Hijab Instan", price: "60000", image: hijabInstan, category: "Instan" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: '#6a1b9a' }}>Produk Aura Hijab</h2>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Cari hijab..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ borderColor: '#f8bbd0' }}
          />
        </Col>
        <Col md={6}>
          <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ borderColor: '#f8bbd0' }}>
            <option value="All">Semua Kategori</option>
            <option value="Paris">Hijab Paris</option>
            <option value="Pashmina">Hijab Pashmina</option>
            <option value="Instan">Hijab Instan</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map((p, index) => (
          <Col key={index} md={4}>
            <ProductCard name={p.name} price={p.price} image={p.image} onAdd={() => addToCart(p)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Produk;