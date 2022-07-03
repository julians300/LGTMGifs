import React from "react";
import slugify from "slugify";
import NextLink from "next/link";
import { Box, AspectRatio, Text, Stack, Flex, Link, useColorMode } from "@chakra-ui/react";
import CopyLinks from "./CopyLinks";
import { Gif } from "../../types/Gif";
import NextImage from "next/image";

interface Props {
  gif: Gif;
  index: number;
}

const GifItem = ({ gif, index }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Stack>
      <Box transition={".3s ease all"} _hover={{ transform: "scale(1.05)" }}>
        <NextLink href={`/gifs/${slugify(gif.name.toLowerCase())}`}>
          <Link href={`/gifs/${slugify(gif.name.toLowerCase())}`} display={"inline-block"} w={"100%"} rounded={"4px"}>
            <AspectRatio ratio={1.25 / 1}>
              <Box m={0} border={0} rounded={"4px"} w="100%" height="100%" bg="gray.100">
                <NextImage layout="fill" objectFit={"cover"} src={gif.thumbnail.url} />
              </Box>
            </AspectRatio>
          </Link>
        </NextLink>
      </Box>
      <Flex justifyContent={"space-between"} align={"center"}>
        <Text
          fontSize={"14px"}
          fontWeight={600}
          display={"inline"}
          color={colorMode === "light" ? "#333333" : "gray.400"}
          maxWidth={"100%"}
        >
          {gif.name}
        </Text>
        <Box>
          <CopyLinks url={gif.thumbnail.url} name={gif.name} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default GifItem;
