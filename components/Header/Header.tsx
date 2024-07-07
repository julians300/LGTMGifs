import React from "react";
import NextLink from "next/link";
import {
  Box,
  Stack,
  Text,
  useClipboard,
  Link,
  Button,
  Icon,
  useColorMode,
  HStack,
  Image,
  keyframes,
  VisuallyHidden,
} from "@chakra-ui/react";
import Container from "../common/Container";
// import TagList from "./TagList";
import { BiSun, BiMoon } from "react-icons/bi";
import { SiMarkdown } from "react-icons/si";
import { ImCheckmark } from "react-icons/im";
import { Gif } from "../../types/Gif";
import { FaRegPaperPlane } from "react-icons/fa";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const Header = ({ randomGif }: { randomGif: Gif }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const randomUrl = `![${randomGif.name || "LGTM"}](${randomGif.url})`;
  const { onCopy: onCopyMd, hasCopied: hasCopiedMd } = useClipboard(randomUrl);
  const spinAnimation = `${spin} infinite 4s linear`;
  return (
    <Box>
      <Box>
        <Container>
          <HStack py={6} justifyContent={"space-between"}>
            <HStack spacing={12}>
              <Box>
                <NextLink href="/">
                  <Link
                    display="block"
                    href="/"
                    aria-label="LGTM Gifs, Back to homepage"
                    rounded={"100px"}
                    _hover={{ textDecor: "none" }}
                    transform="scale(1.85) translateX(6px)"
                  >
                    <VisuallyHidden>
                      <Image src="/images/logo.png" width="28px" height="28px" alt="LGTM Gifs" pointerEvents="none" />
                    </VisuallyHidden>
                    <Box position="relative" aria-hidden={true}>
                      <Image
                        src="/images/logo-front.png"
                        width="28px"
                        height="28px"
                        alt="LGTM Gifs"
                        position="absolute"
                        zIndex={9}
                        pointerEvents="none"
                      />

                      <Box rounded={"full"} fontSize={0} _hover={{ animation: spinAnimation }}>
                        <Image
                          src="/images/logo-back.png"
                          width="28px"
                          height="28px"
                          alt="LGTM Gifs"
                          pointerEvents="none"
                        />
                      </Box>
                    </Box>
                    <VisuallyHidden>
                      <Text
                        display={"inline"}
                        fontSize={{ base: "14px", md: "16px" }}
                        fontWeight={"700"}
                        letterSpacing={"-.5px"}
                      >
                        LGTM Gifs
                      </Text>
                    </VisuallyHidden>
                  </Link>
                </NextLink>
              </Box>
            </HStack>
            <Stack direction="row" spacing={3}>
              <Box>
                <Button
                  as={Link}
                  href="https://twitter.com/LGTMGifs"
                  isExternal
                  size="sm"
                  _hover={{ textDecor: "none" }}
                  data-splitbee-event="Click Twitter Link"
                >
                  Follow us on Twitter
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={onCopyMd}
                  colorScheme={"blue"}
                  size="sm"
                  rounded={6}
                  transform={"translateY(0px)"}
                  _hover={{ textDecor: "none", transform: "translateY(-2px)" }}
                  style={{ background: "linear-gradient(12.93deg,#dd14d5,#4e47f5 55%,#3de8f3)" }}
                  data-splitbee-event-copyrandom="random"
                  data-splitbee-event="Copy"
                >
                  {hasCopiedMd ? (
                    <>
                      <Icon as={ImCheckmark} width={"20x"} height={"100%"} mr={1} />
                      Copied
                    </>
                  ) : (
                    <>
                      Random Gif
                      <Icon as={SiMarkdown} ml={2} />
                    </>
                  )}
                </Button>
              </Box>

              <Box>
                <NextLink href={"/submit"}>
                  <Button
                    as={Link}
                    href="https://airtable.com/shrZeMbytqjPxWMWa"
                    isExternal
                    colorScheme={"brand"}
                    _hover={{ textDecor: "none", bgColor: "#c64735" }}
                    size="sm"
                    rounded={6}
                    border="1px solid #be5643"
                    boxShadow="0 1px 2px rgb(15 15 15 / 10%)"
                  >
                    <Icon as={FaRegPaperPlane} mr={2} />
                    Add a Gif
                  </Button>
                </NextLink>
              </Box>
              <Button p={0} variant="link" onClick={toggleColorMode}>
                <Icon width="24px" as={colorMode === "light" ? BiMoon : BiSun} />
              </Button>
            </Stack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
