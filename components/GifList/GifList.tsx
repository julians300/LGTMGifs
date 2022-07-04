import React from "react";
import NextLink from "next/link";
import { Grid, Box, Stack, Button, Flex, ButtonGroup, Link } from "@chakra-ui/react";
import GifItem from "./GifItem";
import { Gif } from "../../types/Gif";

interface Props {
  gifs: Gif[];
  nextLink?: string;
  prevLink?: string;
}

const GifList = ({ gifs, nextLink, prevLink }: Props) => {
  return (
    <Stack spacing={8}>
      {/* <Box>
        <Menu>
          <MenuButton as={Button} rightIcon="chevron-down">
            Trending
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href="#">
              Trending
            </MenuItem>
            <MenuItem as="a" href="#">
              Latest
            </MenuItem>
            <MenuItem as="a" href="#">
              Popular
            </MenuItem>
          </MenuList>
        </Menu>
      </Box> */}
      <Grid
        templateColumns={{
          xl: "repeat(5, minmax(0, 20%))",
          lg: "repeat(4, minmax(0, 25%))",
          md: "repeat(3, minmax(0, 33.333%))",
          sm: "repeat(2, minmax(0, 50%))",
          base: "repeat(2, minmax(0, 50%))",
        }}
        gap={5}
      >
        {gifs.map((gif) => (
          <Box key={gif.id}>
            <GifItem gif={gif} />
          </Box>
        ))}
      </Grid>
      <Box textAlign={"center"}>
        <Flex justifyContent={"center"}>
          <ButtonGroup spacing={4}>
            {prevLink && (
              <NextLink href={prevLink}>
                <Button href={prevLink} as={Link} colorScheme="brand" _hover={{ textDecor: "none" }}>
                  Previous
                </Button>
              </NextLink>
            )}
            {nextLink && (
              <NextLink href={nextLink}>
                <Button href={nextLink} as={Link} colorScheme="brand" _hover={{ textDecor: "none" }}>
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
