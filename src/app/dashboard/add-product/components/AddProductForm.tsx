"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export type Product = {
  name: string;
  description: string;
  price: number;
  image?: string;
  stock: number;
  rating: number;
  category: string;
  brand: string;
};
type AddProductFormProps = {
  handleSubmit: (product: Product) => Promise<{ success: boolean }>;
};


export default function AddProductForm({handleSubmit}:AddProductFormProps) {
     const [form, setForm] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0,
    rating: 0,
    category: "",
    brand: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: ["price", "stock", "rating"].includes(name)
        ? parseFloat(value)
        : value,
    }));
  };


  const onFormSubmit = async(e: React.FormEvent) => {
  e.preventDefault();
  const result =await handleSubmit(form);
  console.log(result)
  if (result.success) {
    setForm({
      name: "",
      description: "",
      price: 0,
      image: "",
      stock: 0,
      rating: 0,
      category: "",
      brand: "",
    });
    toast.success('Product added successfully!');
  } else {
    toast.error('Failed to add product. Please try again.');
  }
};




  return (
    <form
  onSubmit={onFormSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
>
  <label htmlFor="name">Name</label>
  <input
    id="name"
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Product Name"
    className="input input-bordered w-full"
    required
  />

  <label htmlFor="brand">Brand</label>
  <input
    id="brand"
    type="text"
    name="brand"
    value={form.brand}
    onChange={handleChange}
    placeholder="Brand"
    className="input input-bordered w-full"
    required
  />

  <label htmlFor="category">Category</label>
  <input
    id="category"
    type="text"
    name="category"
    value={form.category}
    onChange={handleChange}
    placeholder="Category"
    className="input input-bordered w-full"
    required
  />

  <label htmlFor="price">Price</label>
  <input
    id="price"
    type="number"
    name="price"
    value={form.price}
    onChange={handleChange}
    placeholder="Price"
    className="input input-bordered w-full"
    step="0.01"
    min={0}
    required
  />

  <label htmlFor="stock">Stock</label>
  <input
    id="stock"
    type="number"
    name="stock"
    value={form.stock}
    onChange={handleChange}
    placeholder="Stock"
    className="input input-bordered w-full"
    required
    min={0}
  />

  <label htmlFor="rating">Rating</label>
  <input
    id="rating"
    type="number"
    name="rating"
    value={form.rating}
    onChange={handleChange}
    placeholder="Rating"
    className="input input-bordered w-full"
    step="0.1"
    min="0"
    max="5"
    required
  />

  <label htmlFor="image">Image URL</label>
  <input
    id="image"
    type="text"
    name="image"
    value={form.image}
    onChange={handleChange}
    placeholder="Image URL"
    className="input input-bordered w-full"
  />

  <label htmlFor="description">Description:</label>
  <textarea
    id="description"
    name="description"
    value={form.description}
    onChange={handleChange}
    placeholder="Description"
    className="textarea textarea-bordered w-full md:col-span-2"
    rows={4}
    required
  />

  <button type="submit" className="btn btn-primary w-full md:col-span-2 rounded-xl">
    Submit Product
  </button>
</form>

  )
}
