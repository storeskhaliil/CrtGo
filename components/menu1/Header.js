// app/components/menu1/Header.jsx
import { Box, Image, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box position="relative" w="100%" h={{ base: "250px", md: "350px" }}>
      <Image
        src="https://images.unsplash.com/photo-1550547660-d9450f859349"
        alt="Logo"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />
      <Heading
        position="relative"
        color="white"
        textAlign="center"
        pt="200px"
        fontSize={{ base: "2xl", md: "5xl" }}
      >
        [RESTU NAME]
      </Heading>
    </Box>
  );
}