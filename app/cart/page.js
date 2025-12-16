// app/cart/page.js
"use client";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <Box p={10}>
      <Heading>Cart</Heading>

      {cart.map((item, i) => (
        <Text key={i}>
          {item.name} – ${item.price}
        </Text>
      ))}

      <Link href="/checkout">
        <Button mt={5}>Checkout</Button>
      </Link>
    </Box>
  );
}
