import React from "react";
import NextLink from "next/link";
import { Box, Stack, Button, Flex, ButtonGroup, Link, VisuallyHidden } from "@chakra-ui/react";
import GifItem from "./GifItem";
import { Gif } from "../../types/Gif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
  gifs: Gif[];
  nextLink?: string;
  prevLink?: string;
}

const GifList = ({ gifs, nextLink, prevLink }: Props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Stack spacing={{ base: 2, md: 4, lg: 8 }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3, 1200: 4 }}>
        <Masonry gutter="16px">
          {gifs.map((gif) => (
            <Box key={gif.id}>
              {isLoaded ? (
                <GifItem gif={gif} />
              ) : (
                <VisuallyHidden>
                  <GifItem gif={gif} />
                </VisuallyHidden>
              )}
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Box textAlign={"right"}>
        <Flex justifyContent={"right"}>
          <ButtonGroup spacing={4}>
            {prevLink && (
              <NextLink href={prevLink}>
                <Button
                  href={prevLink}
                  as={Link}
                  colorScheme="brand"
                  _hover={{ textDecor: "none", bgColor: "#c64735" }}
                  border="1px solid #be5643"
                  boxShadow="0 1px 2px rgb(15 15 15 / 10%)"
                >
                  Previous
                </Button>
              </NextLink>
            )}
            {nextLink && (
              <NextLink href={nextLink}>
                <Button
                  href={nextLink}
                  as={Link}
                  colorScheme="brand"
                  _hover={{ textDecor: "none", bgColor: "#c64735" }}
                  border="1px solid #be5643"
                  boxShadow="0 1px 2px rgb(15 15 15 / 10%)"
                >
                  Next
                </Button>
              </NextLink>
            )}
          </ButtonGroup>
        </Flex>
      </Box>
    </Stack>
  );
};

export default GifList;
