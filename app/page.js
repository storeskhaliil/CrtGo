// app/page.js
"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";

export default function HomePage() {
  const services = [
    {
      title: "باقة البداية",
      description: "قوالب جاهزة للمطاعم أو المواقع الشخصية مع QR للمنيو.",
      price: "$25 / الشهر",
    },
    {
      title: "باقة الاحترافية",
      description:
        "تصميم مخصص حسب طلبك مع 3–5 صفحات ودعم كامل.",
      price: "$50–$75 / الشهر",
    },
    {
      title: "باقة بريميوم",
      description:
        "مواقع كاملة مخصصة، متاجر Shopify، ميزات متقدمة.",
      price: "$100–$150 / الشهر",
    },
  ];

  const steps = [
    "اختر القالب أو التصميم المخصص",
    "أرسل محتوى موقعك (صور، نصوص، شعارات)",
    "راجع الموقع بعد التنفيذ وأرسل ملاحظاتك",
    "استمتع بالاستضافة والدعم الشهري",
  ];

  const featuredClients = [
    { name: "مطعم الزهراء", logo: "/clients/zahra.png" },
    { name: "مقهى البستان", logo: "/clients/bustan.png" },
    { name: "متجر التقنية", logo: "/clients/techstore.png" },
  ];

  return (
    <Box bg="#F9F9F9" color="#333" minH="100vh">
      {/* Hero Section */}
      <Box bg="#0D6EFD" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading mb={4}>CRTGo – احصل على موقعك الإلكتروني بسهولة واحترافية</Heading>
          <Text fontSize="xl" mb={6}>
            قوالب جاهزة للمطاعم والمتاجر أو تصميم مخصص حسب طلبك
          </Text>
          <Button colorScheme="yellow" size="lg">
            ابدأ الآن
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="container.lg" py={16}>
        <Heading mb={8} textAlign="center">خدماتنا</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {services.map((service, idx) => (
            <Box
              key={idx}
              bg="white"
              p={6}
              shadow="md"
              borderRadius="md"
              textAlign="center"
            >
              <Heading size="md" mb={4}>{service.title}</Heading>
              <Text mb={4}>{service.description}</Text>
              <Text fontWeight="bold">{service.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* How it works */}
      <Box bg="#00C49A" color="white" py={16}>
        <Container maxW="container.lg">
          <Heading mb={8} textAlign="center">كيف نعمل</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            {steps.map((step, idx) => (
              <Box
                key={idx}
                bg="#ffffff20"
                p={6}
                borderRadius="md"
                textAlign="center"
              >
                <Text fontSize="lg" fontWeight="bold" mb={2}>الخطوة {idx + 1}</Text>
                <Text>{step}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Clients */}
      <Container maxW="container.lg" py={16}>
        <Heading mb={8} textAlign="center">بعض المشاريع التي نفذناها</Heading>
        <Flex wrap="wrap" justify="center" gap={8}>
          {featuredClients.map((client, idx) => (
            <Box key={idx} textAlign="center">
              <Image
                src={client.logo}
                alt={client.name}
                boxSize="120px"
                objectFit="contain"
                mb={2}
              />
              <Text>{client.name}</Text>
            </Box>
          ))}
        </Flex>
      </Container>

      {/* Call-to-action */}
      <Box bg="#0D6EFD" color="white" py={16}>
        <Container maxW="container.lg" textAlign="center">
          <Heading mb={4}>هل تريد موقعك الآن؟</Heading>
          <Text fontSize="lg" mb={6}>
            اختر الباقة المناسبة وابدأ الاشتراك الشهري معنا
          </Text>
          <Button colorScheme="yellow" size="lg">
            ابدأ الاشتراك الآن
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="#333" color="white" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <HStack justify="center" spacing={8} mb={4}>
            <Text cursor="pointer">سياسة الخصوصية</Text>
            <Text cursor="pointer">الشروط والأحكام</Text>
            <Text cursor="pointer">اتصل بنا</Text>
          </HStack>
          <Text>© 2025 CRTGo. كل الحقوق محفوظة.</Text>
        </Container>
      </Box>
    </Box>
  );
}