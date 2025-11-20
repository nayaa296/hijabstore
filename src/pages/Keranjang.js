import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Keranjang() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + parseInt(item.price), 0);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: '#6a1b9a' }}>Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p style={{ color: '#4e342e' }}>Keranjang kosong, silakan pilih produk.</p>
      ) : (
        <>
          <Table striped bordered hover style={{ borderColor: '#f8bbd0' }}>
            <thead style={{ backgroundColor: '#fce4ec' }}>
              <tr>
                <th>Produk</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>Rp {item.price}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>Rp {total}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button as={Link} to="/checkout" variant="success">
            Lanjut ke Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Keranjang;