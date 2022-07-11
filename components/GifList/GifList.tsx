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
    <Stack spacing={{ base: 2, md: 4, lg: 8 }}>
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
          xl: "repeat(6, minmax(0, 16.66%))",
          lg: "repeat(5, minmax(0, 20%))",
          md: "repeat(3, minmax(0, 33.333%))",
          sm: "repeat(2, minmax(0, 50%))",
          base: "repeat(2, minmax(0, 50%))",
        }}
        gap={{ base: 4, xl: 5 }}
      >
        {gifs.map((gif) => (
          <Box key={gif.id}>
            <GifItem gif={gif} />
          </Box>
        ))}
      </Grid>
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
