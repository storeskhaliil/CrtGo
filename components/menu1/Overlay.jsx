// app/components/menu1/Overlay.jsx
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

export default function Overlay({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;

  return (
    <Box
      position="fixed"
      inset="0"
      bg="rgba(0,0,0,0.95)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="2000"
    >
      <Box
        bg="white"
        borderRadius="md"
        maxW="600px"
        w="90%"
        textAlign="center"
        p={6}
        animation="slideUp 0.35s ease"
      >
        <Image src={item.img} borderRadius="md" mb={4} />
        <Heading size="md" mb={2}>{item.name}</Heading>
        <Text mb={1}>{item.price}</Text>
        <Text color="gray.500">{item.desc}</Text>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        fontSize="2xl"
        onClick={onClose}
      >
        &#x2715;
      </Button>
    </Box>
  );
}