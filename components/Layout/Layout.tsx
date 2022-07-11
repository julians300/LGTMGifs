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
  const [randomGifUrl, setRandomGifUrl] = useState("");
  useEffect(() => {
    getRandomGif().then((data) => {
      setRandomGifUrl(data.url);
    });
  }, []);
  return (
    <>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box
        backgroundColor={colorMode === "light" ? "#ffffff" : "#14171b"}
        borderTop={"2px solid #e65942"}
        overflow="hidden"
      >
        <Stack spacing={8}>
          <Header randomUrl={randomGifUrl} />
          <Container>{children}</Container>
          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
