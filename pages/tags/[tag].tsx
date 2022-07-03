import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../../components/GifList/GifList";
import { Gif } from "../../types/Gif";
import Hero from "../../components/Hero/Hero";

interface Props {
  allGifs: Gif[];
  tag: string;
}

const Page = ({ allGifs, tag }: Props) => {
  return (
    <Box>
      <Head>
        <title>{tag} | LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero h1={`#${tag}`} sub={"Level up your pull request approvals with LGTM Gifs."} />
      <GifList gifs={allGifs} />
    </Box>
  );
};

// export const getStaticPaths = async ({ params }) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all/${params!.tag}`);
//   const allGifs = await res.json();
//   const formattedGifs = allGifs.map((gif: any) => cleanRecordData(gif));
//   const paths = formattedGifs.map((gif: Gif) => {
//     return {
//       params: { slug: slugify(gif.name) },
//     };
//   });
//   return {
//     paths: [...paths, { params: {} }],
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags/${params!.tag}`);
  const allGifs = await res.json();
  return {
    props: { allGifs, tag: params!.tag },
  };
};

export default Page;
