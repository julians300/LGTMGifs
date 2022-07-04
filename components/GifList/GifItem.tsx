import React, { useState } from "react";
import NextLink from "next/link";
import { Box, AspectRatio, Text, Stack, Flex, Link, useColorMode } from "@chakra-ui/react";
import CopyLinks from "./CopyLinks";
import { Gif } from "../../types/Gif";
import getVideoUrl from "../../utils/getVideoUrl";

interface Props {
  gif: Gif;
}

const GifItem = ({ gif }: Props) => {
  const { colorMode } = useColorMode();
  const videoUrl = getVideoUrl(gif);
  return (
    <Stack>
      <Box transition={".3s ease all"} _hover={{ transform: "scale(1.05)" }}>
        <NextLink href={`/gifs/${gif.slug}`}>
          <Link href={`/gifs/${gif.slug}`} display={"inline-block"} w={"100%"} rounded={"4px"}>
            <AspectRatio ratio={1.25 / 1}>
              <Box m={0} border={0} rounded={"4px"} w="100%" height="100%" bg="gray.100">
                <Box
                  as="video"
                  src={videoUrl}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  onError={() => {}}
                ></Box>
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
          <CopyLinks url={gif.thumbnail.url} name={gif.name} slug={gif.slug} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default GifItem;
