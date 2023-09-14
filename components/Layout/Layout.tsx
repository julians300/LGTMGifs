import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Stack, useColorMode, Box } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../common/Container";
import { Gif } from "../../types/Gif";

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
      <Box backgroundColor={colorMode === "light" ? "#ffffff" : "#14171b"} borderTop={"2px solid #e65942"}>
        <Stack spacing={8}>
          <Header randomGif={randomGifUrl} />
          <Container overflow="hidden">{children}</Container>
          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
