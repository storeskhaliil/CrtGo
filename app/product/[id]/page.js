// app/product/[id]/page.js
import { products } from "@/data/products";

export default function ProductPage({ params }) {
  const product = products.find(p => p.id == params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
