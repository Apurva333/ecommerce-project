import { useEffect, useState } from "react";
import api from "../service/api.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("GET /products failed:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error(`DELETE /products/${id} failed:`, err);
      alert("Delete failed. Check server logs.");
    }
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th align="left">Name</th>
              <th align="left">Price</th>
              <th align="left">Stock</th>
              <th align="left">Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stockQuantity}</td>
                <td>{p.description}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
