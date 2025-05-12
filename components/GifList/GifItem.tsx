import React from "react";
import NextLink from "next/link";
import { Box, AspectRatio, Link, useColorMode } from "@chakra-ui/react";
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
    <Box>
      <Box role="group" pos="relative" lineHeight={0}>
        <Link as={NextLink} href={`/gifs/${gif.slug}`} display={"inline-block"} w={"100%"} rounded={6} lineHeight={0}>
          <AspectRatio ratio={gif.width / gif.height}>
            <Box
              m={0}
              border={0}
              rounded={6}
              w="100%"
              height="100%"
              bg={colorMode === "light" ? "grey.100" : "gray.700"}
            >
              <Box
                rounded="md"
                as="img"
                h="full"
                w="full"
                objectFit="cover"
                src={gif.smallUrl}
                lineHeight={0}
                minW={gif.width}
                minH={gif.height}
              />
              {/* <Box
                  as="video"
                  src={gif.smallUrl}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  disableRemotePlayback={true}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  onError={() => {}}
                ></Box> */}
            </Box>
          </AspectRatio>
        </Link>
        <Box
          h="full"
          w="full"
          bg="rgba(24,24,24,0.55)"
          pos="absolute"
          zIndex={0}
          top={0}
          bottom={0}
          rounded={6}
          opacity={0}
          transition=".3s ease all"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        ></Box>

        <Box
          pos="absolute"
          top="50%"
          left="50%"
          opacity={0}
          transition=".3s ease all"
          _groupHover={{ opacity: 1 }}
          transform="translateX(-50%) translateY(-50%)"
        >
          <CopyLinks url={gif.url} name={gif.name} slug={gif.slug} />
        </Box>
      </Box>
    </Box>
  );
};

export default GifItem;
