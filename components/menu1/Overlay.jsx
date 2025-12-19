// app/components/menu1/Overlay.jsx
"use client";

import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function Overlay({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;

  return (
    <Box
      position="fixed"
      inset="0"
      bg="rgba(0,0,0,0.70)"
      bg="transparent"
      backdropFilter="blur(6px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="2000"
    >
      {/* Modal */}
      <Flex
        bg="white"
        borderRadius="md"
        maxH="80vh"
        w="100%"
        maxW={{ base: "100%", lg: "70vw" }}
        overflow="hidden"
        direction={{ base: "column", lg: "row" }}
        animation="slideUp 0.35s ease"
      >
        {/* Info */}
        <Box
          flex="1"
          p={6}
          overflowY="auto"
          order={{ base: 2, lg: 1 }}
        >
          <Heading size="md" mb={2}>
            {item.name}
          </Heading>
          <Text mb={1} fontWeight="bold">
            {item.price}
          </Text>
          <Text color="gray.500">{item.desc}</Text>
        </Box>

        {/* Image */}
        <Box
          flexShrink={0}
          w={{ base: "100%", lg: "40%" }}
          aspectRatio="1 / 1"
          order={{ base: 1, lg: 2 }}
        >
          <Image
            src={item.img}
            alt={item.name}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Close button */}
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "rgba(0,0,0,0.70)" }}
        fontSize="2xl"
        onClick={onClose}
      >
        &#x2715;
      </Button>
    </Box>
  );
}