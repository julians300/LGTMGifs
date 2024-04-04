import Head from "next/head";
import { Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";
import allTags from "../../components/Header/alltags";
import Tag from "../../components/common/Tag";

const TagPage = () => {
  const tagDesc =
    "Find the perfect reaction for every coding milestone with our comprehensive collection of LGTM Gifs, from 'Good Job' to 'Seinfeld', designed to add a dash of personality and celebration to your GitHub pull request approvals.";
  const title = `All Tags | LGTM Gifs | Pull Request Approval Gifs`;
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={tagDesc} />
      </Head>
      <Stack spacing={8}>
        <Hero h1={"All Tags"} sub={tagDesc} />
        <Box>
          <Wrap py={4} spacing={4}>
            {allTags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag name={tag.name} slug={tag.slug} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </Box>
  );
};

export default TagPage;
