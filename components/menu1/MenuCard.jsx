import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function MenuCard({ name, price, desc, img, onClick }) {
  return (
    <Box
      flex="0 0 260px"
      borderLeft="1px solid #1111111c"
      _last={{ borderLeft: "none" }}
      textAlign="center"
      cursor="pointer"
      onClick={onClick}
    >
      <VStack spacing={3} p={3}>
        <Image
          src={img}
          alt={name}
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
        />
        <Box>
          <Text fontWeight="600">{name}</Text>
          <Text color="teal.800">{price}</Text>
          <Text fontSize="sm" color="gray.500" overflow="auto">
            {desc}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}