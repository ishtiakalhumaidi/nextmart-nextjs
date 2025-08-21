import { MongoClient, ServerApiVersion, Collection as MongoCollection, Document } from "mongodb";
export const collections = {
  products: "products",
  users: "users",
} as const;

export type Product = Document & {
  name: string;
  description: string;
  price: number;
  image?: string;
};

export type User = Document & {
  email: string;
  name: string;
};


if (!process.env.MONGODB_URI) throw new Error("Add MONGODB_URI to .env");

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const clientPromise = client.connect();

export async function dbConnect<T extends Document>(
  collectionName: keyof typeof collections
): Promise<MongoCollection<T>> {
  const client = await clientPromise;
  const dbName = process.env.DB_NAME || "myDatabase";
  return client.db(dbName).collection<T>(collectionName);
}
