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
    <Box data-splitbee-event-clicktag={name}>
      <Link
        as={NextLink}
        _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
        href={`/tags/${slug}`}
        py={0.5}
        px={2}
        rounded={3}
        display="inline-block"
        whiteSpace={"nowrap"}
        bg={colorMode === "light" ? "#fff7db" : "#242628"}
        fontSize="14px"
        transition={".15s ease all"}
        transform={"scale(1)"}
      >
        <>
          <Text as={"span"} color="red.500" mr={1}>
            #
          </Text>
          {name}
        </>
      </Link>
    </Box>
  );
};

export default Tag;
