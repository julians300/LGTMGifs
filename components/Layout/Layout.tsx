import React from "react";
import Head from "next/head";
import { Stack, useColorMode, Box } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../common/Container";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box backgroundColor={colorMode === "light" ? "#ffffff" : "#14171b"} borderTop={"2px solid #e65942"}>
        <Stack spacing={8}>
          <Box>
            <Header />
          </Box>
          <Box>
            <Container>
              <Box>{children}</Box>
            </Container>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
