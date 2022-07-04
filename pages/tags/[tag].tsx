import type { GetStaticProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../../components/GifList/GifList";
import { Gif } from "../../types/Gif";
import Hero from "../../components/Hero/Hero";
import allTags from "../../components/Header/alltags";

interface Props {
  allGifs: Gif[];
  tag: string;
}

const Tag = ({ allGifs, tag }: Props) => {
  const title = `${tag} | LGTM Gifs | Pull request approval gifs`;
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero h1={`#${tag}`} sub={"Level up your pull request approvals with LGTM Gifs."} />
      <GifList gifs={allGifs} />
    </Box>
  );
};

export const getStaticPaths = async () => {
  const paths = allTags.map((tag) => {
    return {
      params: { tag: tag.slug || "" },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags/${params!.tag}`);
  const allGifs = await res.json();
  return {
    props: { allGifs, tag: params!.tag },
  };
};

export default Tag;
