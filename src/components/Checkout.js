import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Checkout({ cart, total }) {
  const [paymentMethod, setPaymentMethod] = useState("Transfer Bank");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesanan berhasil diproses!");
  };

  return (
    <div className="mt-4 p-4 rounded" style={{ backgroundColor: "#ecfdf5" }}>
      <h3 className="text-success">Checkout</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="Nama kamu" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alamat Lengkap</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Contoh: Jl. Mawar No. 12, Sumenep" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Metode Pembayaran</Form.Label>
          <Form.Select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Transfer Bank</option>
            <option>COD</option>
            <option>E-Wallet</option>
          </Form.Select>
        </Form.Group>

        {paymentMethod === "Transfer Bank" && (
          <Form.Group className="mb-3">
            <Form.Label>Pilih Bank</Form.Label>
            <Form.Select>
              <option>Bank BCA</option>
              <option>Bank Mandiri</option>
              <option>Bank BRI</option>
            </Form.Select>
          </Form.Group>
        )}

        <h5>Total: Rp {total.toLocaleString("id-ID")}</h5>
        <Button variant="success" type="submit">
          Bayar Sekarang
        </Button>
      </Form>
    </div>
  );
}
