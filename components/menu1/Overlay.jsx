// app/components/menu1/Overlay.jsx
"use client";

import { useEffect } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Overlay({ isOpen, onClose, item }) {
  // 🔒 Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <Box
      position="fixed"
      inset="0"
      bg="rgba(0,0,0,0.6)"
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
        {/* Info (Arabic / RTL) */}
        <Box
          flex="1"
          p={6}
          overflowY="auto"
          order={{ base: 2, lg: 1 }}
          dir="rtl"
          textAlign="right"
        >
          <Heading size="md" mb={2}>
            {item.name}
          </Heading>

          <Text mb={1} fontWeight="bold">
            {item.price}
          </Text>

          <Text color="gray.500" lineHeight="1.9">
            {item.desc}
          </Text>
        </Box>

        {/* Image */}
        <Box
          flexShrink={0}
          w={{ base: "100%", lg: "40%" }}
        maxW={{ base: "100%", md: "300px", lg: "40%" }}
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
  bottom="18px"
  left="50%"
  transform="translateX(-50%)"
  bg="white"
  color="#000"
  _hover={{ bg: "rgba(0,0,0,0.2)" }}
  _active={{ bg: "rgba(0,0,0,0.2)" }}
  onClick={onClose}
  p={10px}
  minW="auto"
>
  <CloseIcon boxSize={5} />
</Button>
    </Box>
  );
}