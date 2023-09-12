import React from "react";
import NextLink from "next/link";
import { Box, AspectRatio, Text, Stack, Flex, Link, useColorMode } from "@chakra-ui/react";
import CopyLinks from "./CopyLinks";
import { Gif } from "../../types/Gif";
// import getVideoUrl from "../../utils/getVideoUrl";

interface Props {
  gif: Gif;
}

const GifItem = ({ gif }: Props) => {
  const { colorMode } = useColorMode();
  // const videoUrl = getVideoUrl(gif);
  const videoUrl = gif;
  return (
    <Stack>
      <Box transition={".3s ease all"} _hover={{ transform: "scale(1.04)" }}>
        <NextLink href={`/gifs/${gif.slug}`}>
          <Link href={`/gifs/${gif.slug}`} display={"inline-block"} w={"100%"} rounded={4}>
            <AspectRatio ratio={1 / 1.2}>
              <Box
                m={0}
                border={0}
                rounded={4}
                w="100%"
                height="100%"
                bg={colorMode === "light" ? "grey.100" : "gray.700"}
              >
                <Box as="img" h="full" w="full" objectFit="cover" src={gif.url} />
                {/* <Box
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
                ></Box> */}
              </Box>
            </AspectRatio>
          </Link>
        </NextLink>
      </Box>
      <Flex justifyContent={"space-between"} align={"center"}>
        <Box noOfLines={1}>
          <Text
            fontSize={"14px"}
            fontWeight={600}
            display={"inline"}
            color={colorMode === "light" ? "#333333" : "gray.400"}
            maxWidth={"100%"}
          >
            {gif.name}
          </Text>
        </Box>
        <Box>
          <CopyLinks url={gif.url} name={gif.name} slug={gif.slug} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default GifItem;
