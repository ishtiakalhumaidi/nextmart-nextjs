import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { json } from "stream/consumers";

export default async function ProductDetails({ params }: { params: { id: string } }) {
   const db = await dbConnect(collections.products);
  

  const product = await db.findOne({_id:new ObjectId(params.id)})
  return <div className="flex gap-4 py-16 max-w-10/12 mx-auto">
    

    <div className="flex-1 shadow-lg rounded-2xl overflow-hidden">
      <Image
      className="rounded-2xl hover:scale-130 duration-500"
      width={1080}
      height={720}
      src={product?.image}
      alt={product?.name}/>
      
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4 flex-1">
 
  <h1 className="text-4xl font-extrabold text-gray-800 leading-tight flex items-center gap-3 flex-wrap">
    {product?.name}
    {product?.category && (
      <span className="badge badge-info text-white text-sm px-3 py-1 rounded-full">
        {product.category}
      </span>
    )}
  </h1>


  <p className="text-sm text-gray-500">
    <span className="font-semibold text-gray-700">Brand:</span> {product?.brand}
  </p>


  <p className="text-base text-gray-700 leading-relaxed">
    {product?.description}
  </p>


  <p className={`text-sm font-medium ${product?.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
    {product?.stock > 0 ? `In stock: ${product?.stock}` : "Out of stock"}
  </p>


  <p className="text-2xl font-bold text-blue-600">
    ${product?.price?.toFixed(2)}
  </p>


  <div className="flex items-center gap-2">
    <span className="text-gray-700 font-medium">Rating:</span>
    <div className="rating">
      {[...Array(Math.floor(product?.rating || 0))].map((_, i) => (
        <input
          key={i}
          name="rating-2"
          type="radio"
          className="mask mask-star-2 bg-yellow-500 opacity-100"
          aria-label={`${i + 1} star`}
          readOnly
        />
      ))}
    </div>
    <span className="text-gray-500 text-sm">({product?.rating?.toFixed(1)})</span>
  </div>
</div>

  </div>;
}