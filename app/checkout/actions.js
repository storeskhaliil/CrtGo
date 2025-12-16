"use server";

import { sql } from "@vercel/postgres";

export async function placeOrder(cart) {
  if (!cart || cart.length === 0) {
    throw new Error("Cart is empty");
  }

  await sql`
    INSERT INTO orders (items)
    VALUES (${JSON.stringify(cart)})
  `;
}
