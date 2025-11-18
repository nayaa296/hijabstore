import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <BootstrapNavbar style={{ backgroundColor: "#8b5cf6" }} variant="dark" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand className="text-white">Hijab House 🧕</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  );
}
