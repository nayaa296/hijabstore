import { Card, Button } from "react-bootstrap";

export default function Produk({ products, addToCart }) {
  return (
    <div className="row">
      {products.map((p, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <Card style={{ backgroundColor: "#fdf4ff", borderColor: "#e9d5ff" }}>
            <Card.Body>
              <Card.Title className="text-primary">{p.name}</Card.Title>
              <Card.Text className="text-dark">Rp {p.price.toLocaleString("id-ID")}</Card.Text>
              {p.colors.map((c) => (
                <Button
                  key={c}
                  variant="outline-secondary"
                  size="sm"
                  className="me-2 mb-2"
                  style={{ backgroundColor: colorMap[c] || "#f8f9fa" }}
                  onClick={() => addToCart(p, c)}
                >
                  {c}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

const colorMap = {
  Latte: "#f5f5dc",
  Terracota: "#e2725b",
  Army: "#556b2f",
  "Dusty Pink": "#e7b3c4"
};
