import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ name, price, image, onAdd }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', border: '2px solid #f8bbd0', borderRadius: '10px' }}>
      <Card.Img variant="top" src={image} style={{ borderRadius: '10px 10px 0 0',height: '240px' }} />
      <Card.Body style={{ backgroundColor: '#fce4ec' }}>
        <Card.Title style={{ color: '#6a1b9a' }}>{name}</Card.Title>
        <Card.Text style={{ color: '#4e342e' }}>Rp {price}</Card.Text>
        <Button variant="outline-success" onClick={onAdd}>Tambah ke Keranjang</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
