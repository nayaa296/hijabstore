import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("Transfer Bank");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesanan berhasil diproses!");
  };

  return (
    <Container className="mt-4 p-4 rounded" style={{ backgroundColor: "#fce4ec" }}>
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="Nama lengkap" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alamat Lengkap</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Contoh: Jl. Mawar No. 12, Sumedang"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Metode Pembayaran</Form.Label>
          <Form.Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Transfer Bank</option>
            <option>COD</option>
            <option>QRIS</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success">Proses Pesanan</Button>
      </Form>
    </Container>
  );
}
