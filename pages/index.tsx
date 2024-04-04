import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../components/GifList/GifList";
import { Gif } from "../types/Gif";
import Hero from "../components/Hero/Hero";
import { Stack } from "@chakra-ui/react";

interface Props {
  allGifs: Gif[];
}

const Home = ({ allGifs }: Props) => {
  return (
    <Box>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Stack spacing={8}>
        <Hero
          h1={"The Perfect Pull Request Approval Responses"}
          sub={"Looks good to me! Say more with gifs and level up your pull request approvals."}
        />
        <GifList gifs={allGifs} nextLink="/page/2" />
      </Stack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://lgtm-api.vercel.app/api/gifs?page=1`);
  const allGifs = await res.json();
  return {
    props: { allGifs },
  };
};

export default Home;
