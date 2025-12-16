// app/checkout/page.js
"use client";
import { Box, Input, Button } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import { orders } from "@/data/orders";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const submitOrder = () => {
    orders.push({
      id: Date.now(),
      items: cart,
    });

    clearCart();
    alert("Order placed!");
  };

  return (
    <Box p={10}>
      <Input placeholder="Your name" mb={3} />
      <Input placeholder="Address" mb={3} />
      <Button onClick={submitOrder}>Place Order</Button>
    </Box>
  );
}
