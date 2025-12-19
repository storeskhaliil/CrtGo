// app/components/menu1/MenuSection.jsx
import { Box, Heading, HStack } from "@chakra-ui/react";
import MenuCard from "./MenuCard";

export default function MenuSection({ id, title, items, onCardClick }) {
  return (
    <Box id={id} py={10}>
      <Heading textAlign="center" color="teal.900" mb={6}>{title}</Heading>
      <HStack overflowX="auto" spacing={6} px={5} className="side-scroll">
        {items.map((item, idx) => (
          <MenuCard key={idx} {...item} onClick={() => onCardClick(item)} />
        ))}
      </HStack>
    </Box>
  );
}