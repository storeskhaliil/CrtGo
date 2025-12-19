// app/components/menu1/SectionButtons.jsx
import { HStack, Button, Box } from "@chakra-ui/react";

export default function SectionButtons() {
  const sections = ["جديد", "برجر", "تشيكن", "مشروبات"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      position="sticky"
      top="0"
      bg="whiteAlpha.800"
      zIndex="1000"
      borderBottom="1px solid #1111111c"
      py={5}
      backdropFilter="blur(6px)"
    >
      <HStack spacing={4} justify="center" flexWrap="wrap">
        {sections.map((sec) => (
          <Button
            key={sec}
            onClick={() => scrollToSection(sec)}
            variant="outline"
            border="apx solid #000"
             color="#6c5e4f"
            fontWeight="bold"
            _hover={{ transform: "scale(1.05)" }}
          >
            {sec}
          </Button>
        ))}
      </HStack>
    </Box>
  );
}