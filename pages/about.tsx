import Head from "next/head";
import { Box, Stack, Text, Link } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Head>
        <title>LGTM Gifs | Pull request approval gifs</title>
        <meta name="description" content="Pull Request Approval Gifs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box maxW={"800px"} margin={"auto"}>
        <Stack spacing={4}>
          <Text as={"h1"} fontSize={"28px"} fontWeight={"bold"}>
            About
          </Text>
          <Text>
            Hey there I&apos;m{" "}
            <Link href="https://jools.dev" isExternal color={"#e65942"}>
              Julian
            </Link>
            , a designer and developer from San Antonio, TX. 🇨🇱 🌮
          </Text>
          <Text>
            LGTM Gifs is a fun and simple weekend project. It&apos;s a resource that makes your day-to-day at work just
            a little more fun by giving you a quick way to respond to Pull Requests.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
