import React from "react";
import NextLink from "next/link";
import { Text, Link, Box, useColorMode } from "@chakra-ui/react";

interface Props {
  name: string;
  slug: string;
}

const Tag = ({ name, slug }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box transition={".15s ease all"} transform={"translateY(0px)"} _hover={{ transform: "translateY(-2px)" }}>
      <NextLink href={`/tags/${slug}`}>
        <Link
          _hover={{ textDecoration: "none" }}
          href={`/tags/${slug}`}
          py={1}
          px={2}
          rounded={3}
          whiteSpace={"nowrap"}
          bg={colorMode === "light" ? "#fff3c6" : "#343b42"}
        >
          <>
            <Text as={"span"} color="red.500" mr={1}>
              #
            </Text>
            {name}
          </>
        </Link>
      </NextLink>
    </Box>
  );
};

export default Tag;
