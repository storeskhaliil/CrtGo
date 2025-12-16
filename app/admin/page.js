// app/admin/page.js
"use client";
import { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { orders } from "@/data/orders";

export default function Admin() {
  const [pass, setPass] = useState("");
  const [ok, setOk] = useState(false);

  if (!ok) {
    return (
      <Box p={10}>
        <Input
          placeholder="Admin password"
          onChange={(e) => setPass(e.target.value)}
        />
        <Button
          mt={3}
          onClick={() => {
            if (pass === process.env.NEXT_PUBLIC_ADMIN_PASS) setOk(true);
          }}
        >
          Enter
        </Button>
      </Box>
    );
  }

  return (
    <Box p={10}>
      <Text fontSize="xl">Orders</Text>

      {orders.map((o) => (
        <Box key={o.id} border="1px solid #eee" p={3} mt={3}>
          {o.items.map((i, idx) => (
            <Text key={idx}>{i.name}</Text>
          ))}
        </Box>
      ))}
    </Box>
  );
}
