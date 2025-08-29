import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 16 }}>Products</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}
