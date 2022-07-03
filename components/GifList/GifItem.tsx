import React from "react";
import slugify from "slugify";
import NextLink from "next/link";
import { Box, Image, AspectRatio, Text, Stack, Flex, Link, Skeleton, useColorMode } from "@chakra-ui/react";
import CopyLinks from "./CopyLinks";
import { Gif } from "../../types/Gif";
import NextImage from "next/image";
import { getImageSize } from "next/dist/server/image-optimizer";

const loadingColors = {
  0: { colorStart: "pink", colorEnd: "orange" },
  1: { colorStart: "green", colorEnd: "blue" },
  2: { colorStart: "orange", colorEnd: "purple" },
  3: { colorStart: "gray", colorEnd: "blue" },
  4: { colorStart: "blue", colorEnd: "red" },
  5: { colorStart: "pink", colorEnd: "cyan" },
  6: { colorStart: "green", colorEnd: "orange" },
  7: { colorStart: "blue", colorEnd: "green" },
  8: { colorStart: "green", colorEnd: "yellow" },
  9: { colorStart: "teal", colorEnd: "orange" },
};

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
              <AspectRatio ratio={1.25 / 1}>
                <Box m={0} border={0} rounded={"4px"} w="100%" height="100%">
                  <NextImage layout="fill" objectFit={"cover"} src={gif.thumbnail.url} />
                </Box>
              </AspectRatio>
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
