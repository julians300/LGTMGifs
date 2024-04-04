import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";

interface Props {
  h1: string;
  sub: string;
}

const Hero = ({ h1, sub }: Props) => {
  return (
    <Box>
      <Stack spacing={3}>
        <Text as={"h1"} fontWeight={700} lineHeight={1.1} fontSize={{ md: "2.2rem", sm: "20px" }}>
          {h1}
        </Text>
        <Text fontWeight={400} color="gray.500" lineHeight={1.1} fontSize={{ md: "1rem", sm: "15px" }}>
          {sub}
        </Text>
      </Stack>
    </Box>
  );
};

export default Hero;
