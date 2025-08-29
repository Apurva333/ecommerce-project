import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api.js";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: form.price === "" ? null : parseFloat(form.price),
      stockQuantity: form.stockQuantity === "" ? null : parseInt(form.stockQuantity, 10),
    };

    try {
      await api.post("/products", payload);
      navigate("/");
    } catch (err) {
      console.error("POST /products failed:", err);
      alert("Create failed. Check server logs.");
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 360 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" type="number" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="stockQuantity" type="number" placeholder="Stock Quantity" value={form.stockQuantity} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
