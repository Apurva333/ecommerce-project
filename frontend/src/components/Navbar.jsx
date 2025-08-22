import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Products</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}

export default Navbar;
