import type { GetStaticProps } from "next";
import slugify from "slugify";
import {
  Box,
  Image,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode,
  useClipboard,
  Link,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import Tag from "../../components/common/Tag";
import { Gif } from "../../types/Gif";
import { SiMarkdown } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Head from "next/head";
import { GIFS_PER_PAGE } from "../../constants/constants";

interface Props {
  gif: Gif;
}

const SingleGifPageLayout = ({ gif }: Props) => {
  const copyMarkdownValue = `![${gif.name || "LGTM"}](${gif.thumbnail.url})`;
  const copyURLValue = gif.thumbnail.url;
  const { onCopy: onCopyMD, hasCopied: hasCopiedMD } = useClipboard(copyMarkdownValue);
  const { onCopy: onCopyURL, hasCopied: hasCopiedURL } = useClipboard(copyURLValue);
  const twitterShareURL = `http://twitter.com/share?url=https://www.lgtmgifs.com/gifs/${slugify(gif.name)}/&text=LGTM+${
    gif.name
  }`;

  const facebookShareURL = `http://www.facebook.com/sharer/sharer.php?u=https://www.lgtmgifs.com/gifs/${slugify(
    gif.name
  )}`;
  return (
    <>
      <Head>
        <title>{gif.name} | LGTM Gifs </title>
      </Head>
      <Box w={"100%"} maxWidth={"1260px"} px={{ md: "40px", base: 0 }} m={"auto"}>
        <SimpleGrid columns={{ md: 2, base: 1 }} spacing={8}>
          <Stack>
            <Box>
              <CardWrap>
                <Image src={gif.thumbnail.url} w={{ base: "100%" }} />
              </CardWrap>
            </Box>
          </Stack>
          <Stack w={"100%"} maxW={"500px"}>
            <Box>
              <CardWrap>
                <Stack spacing={4}>
                  <Button variant={"outline"} onClick={onCopyMD}>
                    <Icon as={SiMarkdown} mr={2} /> {hasCopiedMD ? "Copied" : "Copy Markdown"}
                  </Button>
                  <Button variant={"outline"} onClick={onCopyURL}>
                    <Icon as={HiLink} mr={2} /> {hasCopiedURL ? "Copied" : "Copy Direct Link"}
                  </Button>
                </Stack>
              </CardWrap>
            </Box>
            <Box>
              <CardWrap>
                <Box mb={-4}>
                  <Stack isInline spacing={4} shouldWrapChildren flexWrap={"wrap"}>
                    {gif.tags &&
                      gif.tags.map((tag) => {
                        const slug = slugify(tag.toLowerCase());
                        return (
                          <Box mb={4} key={slug}>
                            <Tag name={tag} slug={slug} />
                          </Box>
                        );
                      })}
                  </Stack>
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
      </Box>
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
  // const totalRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/total`);
  // const total = totalRes.data;
  // console.log(11111, total);

  const totalRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/total/`);
  const total = await totalRes.json();
  const pageCount = Math.ceil(total / GIFS_PER_PAGE);
  const allGifs: Gif[] = [];

  for (let i = 1; i <= pageCount; i++) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all/${i}`);
    const gifs: Gif[] = await res.json();
    gifs.forEach((gif) => {
      allGifs.push(gif);
    });
  }

  const paths = allGifs.map((gif) => {
    return { params: { slug: slugify(gif.name) } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gifs/${params!.slug}`);
  const gif = await res.json();
  return {
    props: { gif },
  };
};

export default SingleGifPageLayout;
