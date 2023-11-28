import { Link } from "@chakra-ui/next-js";
import { Box, Button, Container, HStack, Heading, Icon, VStack } from "@chakra-ui/react";

export default function ContactBlock() {
  return (
    <VStack>
      <Heading as="h2">Comunicate conmigo</Heading>
      <HStack>
        <VStack>
          <Box>
            <Icon />
            <Link href="tel:+ 5491112345678">+ 54 9 11 1234 5678</Link>
          </Box>
          <Box>
            <Icon />
            <Link href="mailto:pabloknoblovits@gmail.com">pabloknoblovits@gmail.com</Link>
          </Box>
          <Box>
            <Icon />
            <Link href="mailto:pk@hospitalitaliano.com.ar">pk@hospitalitaliano.com.ar</Link>
          </Box>
        </VStack>
        <VStack>
          <Button>Sobre mí</Button>
          <Button>Hacer una consulta</Button>
        </VStack>
      </HStack>
    </VStack>
  );
}
