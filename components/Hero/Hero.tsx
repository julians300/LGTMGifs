import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";

interface Props {
  h1: string;
  sub: string;
}

const Hero = ({ h1, sub }: Props) => {
  return (
    <Box pb={"3vw"}>
      <Box textAlign={"center"}>
        <Stack spacing={2}>
          <Text as={"h1"} fontWeight={700} lineHeight={1.1} fontSize={{ md: "2.8vw", sm: "20px" }}>
            {h1}
          </Text>
          <Text fontWeight={400} lineHeight={1.1} fontSize={{ md: "1.1vw", sm: "15px" }}>
            {sub}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
