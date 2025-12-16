// app/page.js
"use client";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Store() {
  const { addToCart } = useCart();

  return (
    <Box p={10}>
      <Heading mb={6}>My Store</Heading>

      {products.map((p) => (
        <Box key={p.id} p={5} border="1px solid #eee" mb={4}>
          <Text fontSize="lg">{p.name}</Text>
          <Text>${p.price}</Text>
          <Button mt={2} onClick={() => addToCart(p)}>
            Add to Cart
          </Button>
        </Box>
      ))}
    </Box>
  );
}
