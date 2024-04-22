import type { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Button, VStack } from "@chakra-ui/react";
import GifList from "../components/GifList/GifList";
import { Gif } from "../types/Gif";
import Hero from "../components/Hero/Hero";
import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

interface Props {
  firstPageGifs: Gif[];
  totalCount: number;
}

const Home = ({ firstPageGifs, totalCount }: Props) => {
  const getNewProjects = async ({ page }: { page: number }) => {
    const { data } = await axios.get<Gif[]>(`https://lgtm-api.vercel.app/api/gifs?page=${page}`);
    return data;
  };
  const {
    data: currentGifs,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Gif[]>("home-gifs", ({ pageParam = 1 }) => getNewProjects({ page: pageParam }), {
    initialData: {
      pages: [firstPageGifs],
      pageParams: [1],
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
    enabled: false,
  });

  const displayGifs = currentGifs?.pages.flat() || [];

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
        <GifList
          gifs={displayGifs}
          // nextLink="/page/2"
        />
        <VStack>
          {totalCount !== displayGifs.length && (
            <Button
              onClick={() => fetchNextPage()}
              colorScheme="brand"
              _hover={{ textDecor: "none", bgColor: "#c64735" }}
              border="1px solid #be5643"
              boxShadow="0 1px 2px rgb(15 15 15 / 10%)"
              isLoading={isFetchingNextPage}
            >
              Load More
            </Button>
          )}
        </VStack>
      </Stack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://lgtm-api.vercel.app/api/gifs?page=1`);
  const allRes = await fetch(`https://lgtm-api.vercel.app/api/gifs`);
  const firstPageGifs = await res.json();
  const allGifs = await allRes.json();
  return {
    props: { firstPageGifs, totalCount: allGifs.length },
  };
};

export default Home;
