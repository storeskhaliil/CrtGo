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
        maxH="80vh"
        maxW="70vw"
        w="100%"
        textAlign="center"
        p={6}
        animation="slideUp 0.35s ease"
      >
        <Image src={item.img} maxW="100%" borderRadius="md" mb={4} />
        <Heading size="md" mb={2}>{item.name}</Heading>
        <Text mb={1}>{item.price}</Text>
        <Text color="gray.500">{item.desc}</Text>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        bg="transparent"
        border="1px solid #000"
        color="#000"
        transform="translateX(-50%)"
        fontSize="2xl"
        onClick={onClose}
      >
        &#x2715;
      </Button>
    </Box>
  );
}