"use client";
import type { Product } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card max-w-70 bg-base-100 shadow-md rounded-lg overflow-hidden">
      <figure className="h-40 w-full relative">
        <Image
          src={product.image || ""}
          alt={product.name}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm font-semibold line-clamp-1">
          {product.name}
        </h2>
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-bold">${product.price}</span>
          <span className="badge badge-primary">{product.rating?.toFixed(1)}</span>
        </div>
        <div className="card-actions mt-2">
          <Link href={`/products/${product._id}`} className="btn btn-sm btn-outline btn-primary rounded-lg w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
