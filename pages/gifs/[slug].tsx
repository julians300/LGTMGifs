import type { GetStaticProps } from "next";
import slugify from "slugify";
import {
  Box,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode,
  useClipboard,
  Link,
  SimpleGrid,
  Tooltip,
  Wrap,
} from "@chakra-ui/react";
import Tag from "../../components/common/Tag";
import { Gif } from "../../types/Gif";
import { SiMarkdown } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Head from "next/head";
import getVideoUrl from "../../utils/getVideoUrl";

interface Props {
  gif: Gif;
}

const SingleGif = ({ gif }: Props) => {
  const copyMarkdownValue = `![${gif.name || "LGTM"}](${gif.url})`;
  const copyURLValue = gif.url;
  const { onCopy: onCopyMD, hasCopied: hasCopiedMD } = useClipboard(copyMarkdownValue);
  const { onCopy: onCopyURL, hasCopied: hasCopiedURL } = useClipboard(copyURLValue);
  const twitterShareURL = `http://twitter.com/share?url=https://www.lgtmgifs.com/gifs/${gif.slug}/&text=LGTM+${gif.name}`;
  const facebookShareURL = `http://www.facebook.com/sharer/sharer.php?u=https://www.lgtmgifs.com/gifs/${gif.slug}`;
  const pageTitle = `${gif.name} | LGTM Gifs`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Stack w={"100%"} maxWidth={"1260px"} px={{ md: "40px", base: 0 }} m={"auto"}>
        <Text as="h1" fontWeight={600} fontSize="20px">
          {gif.name} LGTM
        </Text>
        <SimpleGrid columns={{ md: 2, base: 1 }} spacing={8}>
          <Stack>
            <Box>
              <CardWrap>
                <Box as="img" h="full" w="full" objectFit="cover" src={gif.url} />
                {/* <Box
                  as="video"
                  src={gif.smallUrl}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  onError={() => {}}
                ></Box> */}
              </CardWrap>
            </Box>
          </Stack>
          <Stack w={"100%"} maxW={"500px"}>
            <Box>
              <CardWrap>
                <Stack spacing={4}>
                  <Button
                    variant={"outline"}
                    onClick={onCopyMD}
                    data-splitbee-event-copymd={gif.slug}
                    data-splitbee-event="Copy"
                  >
                    <Icon as={SiMarkdown} mr={2} /> {hasCopiedMD ? "Copied" : "Copy Markdown"}
                  </Button>
                  <Button
                    variant={"outline"}
                    onClick={onCopyURL}
                    data-splitbee-event-copyurl={gif.slug}
                    data-splitbee-event="Copy"
                  >
                    <Icon as={HiLink} mr={2} /> {hasCopiedURL ? "Copied" : "Copy Direct Link"}
                  </Button>
                </Stack>
              </CardWrap>
            </Box>
            <Box>
              <CardWrap>
                <Box>
                  <Wrap spacing={4}>
                    {gif.tags &&
                      gif.tags.map((tag) => {
                        const slug = slugify(tag.toLowerCase());
                        return (
                          <Box key={slug}>
                            <Tag name={tag} slug={slug} />
                          </Box>
                        );
                      })}
                  </Wrap>
                </Box>
              </CardWrap>
            </Box>
            <Box>
              <CardWrap>
                <Text mb={2}>Share:</Text>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <Tooltip label="Share on Twitter" placement="top">
                      <Link href={twitterShareURL} backgroundColor={"#1da1f2"} px={"7px"} pt={"10px"} pb={"7px"}>
                        <Icon as={BsTwitter} color={"white"} width={"20px"} />
                      </Link>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip label="Share on Facebook" placement="top">
                      <Link href={facebookShareURL} backgroundColor={"#3b5998"} px={"7px"} pt={"10px"} pb={"7px"}>
                        <Icon as={BsFacebook} color={"white"} width={"20px"} />
                      </Link>
                    </Tooltip>
                  </Box>
                </Stack>
              </CardWrap>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
};

const CardWrap = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { colorMode } = useColorMode();
  return (
    <Box backgroundColor={colorMode === "light" ? "#f8f8f8" : "#282e33"} p={4}>
      {children}
    </Box>
  );
};

export const getStaticPaths = async () => {
  const allGifs: Gif[] = [];
  const res = await fetch(`https://lgtm-api.vercel.app/api/gifs`);
  const gifs: Gif[] = await res.json();
  gifs.forEach((gif) => {
    allGifs.push(gif);
  });

  const paths = allGifs.map((gif) => {
    return { params: { slug: gif.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://lgtm-api.vercel.app/api/gifs/${params!.slug}`);
  const gif = await res.json();
  return {
    props: { gif },
  };
};

export default SingleGif;
