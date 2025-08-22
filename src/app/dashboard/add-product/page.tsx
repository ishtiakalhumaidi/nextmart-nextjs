import React from 'react';
import AddProductForm, { Product } from './components/AddProductForm';
import { collections, dbConnect } from '@/lib/dbConnect';

export default function AddProduct() {
  async function handleSubmit(product: Product) {
  "use server";
  try {
    const db = await dbConnect(collections.products);
    await db.insertOne(product);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}


  return (
    <div className='my-20 w-10/12 mx-auto'>
      <div className='flex flex-col items-center text-center'>
        <h1 className="text-3xl font-bold mb-2">Add New Product</h1>
        <p className="text-gray-600 mb-6">
          Fill in the product details below and submit to add it to your inventory.
        </p>
      </div>
      <AddProductForm handleSubmit={handleSubmit} />
    </div>
  );
}
