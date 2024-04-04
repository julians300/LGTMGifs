import type { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import GifList from "../../components/GifList/GifList";
import { Gif } from "../../types/Gif";
import Hero from "../../components/Hero/Hero";
import allTags from "../../components/Header/alltags";

interface Props {
  allGifs: Gif[];
  tag: string;
}

const Tag = ({ allGifs, tag }: Props) => {
  const capTag = allTags.find((t) => t.slug === tag)?.name || "";
  const tagDesc = allTags.find((t) => t.slug === tag)?.desc || "Level up your pull request approvals with LGTM Gifs.";
  const title = `${capTag} LGTM Gifs | Pull Request Approval Gifs`;
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={tagDesc} />
      </Head>
      <Stack spacing={8}>
        <Hero h1={`${capTag}`} sub={tagDesc} />
        <GifList gifs={allGifs} />
      </Stack>
    </Box>
  );
};

interface Tag {
  label: string;
  slug: string;
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://lgtm-api.vercel.app/api/tags`);
  const allTags: Tag[] = await res.json();
  const paths = allTags.map((tag: Tag) => {
    return {
      params: { tag: tag.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://lgtm-api.vercel.app/api/gifs?tag=${(params!.tag as string).replace("-", " ")}`);
  const allGifs = await res.json();
  return {
    props: { allGifs, tag: params!.tag },
  };
};

export default Tag;
