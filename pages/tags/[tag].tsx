import type { GetStaticProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../../components/GifList/GifList";
import { Gif } from "../../types/Gif";
import Hero from "../../components/Hero/Hero";
import slugify from "slugify";

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
    props: { allGifs, tag: (params!.tag as string).replace("-", " ") },
  };
};

export default Tag;
