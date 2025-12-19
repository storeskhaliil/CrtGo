// app/components/menu1/Footer.jsx
import { Box, Text, HStack, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" mt={12} py={10} borderTop="1px solid #1111111c" textAlign="center">
      <HStack spacing={8} justify="center" mb={4}>
        <Link href="#">Instagram</Link>
        <Link href="#">WhatsApp</Link>
        <Link href="#">Phone</Link>
      </HStack>
      <Text>&copy; 2025 [RESTU NAME] — جميع الحقوق محفوظة</Text>
      <Text><Link href="#">شروط الاستخدام</Link></Text>
      <Text>CREATED BY <Link href="https://khaliil.com/">KHALIIL</Link>.</Text>
    </Box>
  );
}