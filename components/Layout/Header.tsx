"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { useTheme } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();

  return (
    <Box as="header">
      <Flex
        minH={"60px"}
        h="120px"
        color="gray.600"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
        boxShadow={"1"}
        m="0 1.5rem"
        maxW="90%"
        margin="0 auto"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={1} justify={{ base: "center", md: "space-between" }}>
          <Box>
            <Text
              fontSize="3rem"
              fontFamily={theme.fonts.logo}
              color="brand.blue.base"
              fontWeight="bold"
              paddingInlineStart="1rem"
            >
              P.K.
            </Text>
          </Box>
          {/* <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            alignItems={"center"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              color="brand.blue.base"
              href={"#"}
              bg="none"
            >
              Biografía
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              color="brand.blue.base"
              href={"#"}
              bg="none"
            >
              Material
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              color="brand.blue.base"
              href={"#"}
              bg="none"
              border="3px #2D3791 solid"
              padding="1.5rem 1.5rem"
              _hover={{ bg: "bg.blue" }}
              className="button"
            >
              <Box
                sx={{
                  ".button:hover &": {
                    color: "text.white",
                  },
                }}
              >
                Contacto
              </Box>
            </Button>
          </Stack> */}
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack alignSelf={"center"} direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem, key) => (
//         <Box>{navItem.label}</Box>
//       ))}
//     </Stack>
//   );
// };

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  id: number;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Biografía",
    id: 1,
  },
  {
    label: "Material",
    id: 2,
  },
];
