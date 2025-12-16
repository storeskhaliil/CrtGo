// app/page.js
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <h1>My Shop</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>${p.price}</p>
          <Link href={`/product/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
