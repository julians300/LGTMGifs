import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Stack, useColorMode, Box, Grid } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../common/Container";
import { Gif } from "../../types/Gif";
import TagList from "../Header/TagList";

interface Props {
  children: JSX.Element;
}

const getRandomGif = async (): Promise<Gif> => {
  return fetch("https://lgtm-api.vercel.app/api/gifs/random").then((data) => data.json());
};

const Layout = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  const [randomGifUrl, setRandomGifUrl] = useState<Gif>({
    id: "",
    height: 0,
    width: 0,
    name: "",
    slug: "",
    url: "",
    tags: [],
    smallUrl: "",
    mp4Url: "",
  });
  useEffect(() => {
    getRandomGif().then((data) => {
      setRandomGifUrl(data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box backgroundColor={colorMode === "light" ? "#ffffff" : "#14171b"} borderTop={"2px solid #e65942"} w="full">
        <Stack spacing={8}>
          <Header randomGif={randomGifUrl} />
          <Box>
            <Container>
              <Grid gridTemplateColumns={{ base: "1fr", lg: "180px 1fr" }}>
                <Box>
                  <Box position="sticky" top="20px">
                    <TagList />
                  </Box>
                </Box>
                <Box>{children}</Box>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
