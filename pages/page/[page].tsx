import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import GifList from "../../components/GifList/GifList";
import { Gif } from "../../types/Gif";
import { GIFS_PER_PAGE } from "../../constants/constants";

interface Props {
  gifs: Gif[];
  pageNumber: number;
  total: number;
}

const Page = ({ gifs, pageNumber, total }: Props) => {
  const prevPage = pageNumber === 1 ? "/" : `/page/${pageNumber - 1}`;
  const nextPage = `/page/${pageNumber + 1}`;
  const showNextPage = pageNumber * GIFS_PER_PAGE <= total;
  return (
    <Box>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs | Page {pageNumber}</title>
      </Head>
      <GifList gifs={gifs} prevLink={prevPage} {...(showNextPage ? { nextLink: nextPage } : {})} />
    </Box>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/total/`);
//   const count = await res.json();
//   let paths = [];
//   const pageCount = Math.ceil(count / GIFS_PER_PAGE);
//   for (let i = 1; i <= pageCount; i++) {
//     paths.push({ params: { page: `${i}` } });
//   }
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all/${params!.page}`);
  const gifs = await res.json();
  const totalRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/total`);
  const total = await totalRes.json();
  return {
    props: { gifs, pageNumber: Number(params!.page), total },
  };
};

export default Page;
