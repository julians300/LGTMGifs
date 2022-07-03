import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../components/GifList/GifList";
import { Gif } from "../types/Gif";
import Hero from "../components/Hero/Hero";
import slugify from "slugify";

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
      <Hero
        h1={"The Perfect Pull Request Approval Responses"}
        sub={"Say more with gifs and level up your pull request approvals."}
      />
      <GifList gifs={allGifs} nextLink="/page/2" />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all/1`);
  const allGifs = await res.json();
  return {
    props: { allGifs },
  };
};

export default Home;
