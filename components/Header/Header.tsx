import React from "react";
import NextLink from "next/link";
import { Box, Stack, Text, Flex, Link, Button, Icon, useColorMode, HStack, Divider } from "@chakra-ui/react";
import Image from "next/image";
import Container from "../common/Container";
import TagList from "./TagList";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Box borderBottomWidth={1} borderColor={colorMode === "light" ? "#f9f9f9" : "#333a44"}>
        <Container>
          <HStack py={5} justifyContent={"space-between"}>
            <Box>
              <NextLink href="/">
                <Link
                  display="block"
                  href="/"
                  aria-label="LGTM Gifs, Back to homepage"
                  rounded={"100px"}
                  p={"2px 12px 2px 2px"}
                >
                  <Flex align={"center"}>
                    <Box display={"inline"} mr={"12px"} rounded={"full"} fontSize={0}>
                      <Image src="/images/lgtm_thumb.png" width={"40px"} height={"40px"} alt="LGTM Gifs" />
                    </Box>
                    <Text display={"inline"} fontSize={"20px"} fontWeight={"700"} letterSpacing={"-.5px"}>
                      LGTM Gifs
                    </Text>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Stack direction="row" spacing={4}>
              <Box>
                <NextLink href={"/api/random"}>
                  <Button as={Link} href={"/api/random"} isExternal colorScheme={"blue"} _hover={{ textDecor: "none" }}>
                    Random Gif
                  </Button>
                </NextLink>
              </Box>
              <Box>
                <Divider orientation="vertical" />
              </Box>
              <Box>
                <Button p={0} rounded={"full"} onClick={toggleColorMode}>
                  <Icon as={colorMode === "light" ? BiMoon : BiSun} />
                </Button>
              </Box>
              <Box>
                <NextLink href={"/submit"}>
                  <Button
                    as={Link}
                    href="https://airtable.com/shrZeMbytqjPxWMWa"
                    isExternal
                    colorScheme={"brand"}
                    _hover={{ textDecor: "none" }}
                  >
                    Submit
                  </Button>
                </NextLink>
              </Box>
            </Stack>
          </HStack>
        </Container>
      </Box>
      <Box w={"100%"} overflowX={"auto"}>
        <TagList />
      </Box>
    </Box>
  );
};

export default Header;
