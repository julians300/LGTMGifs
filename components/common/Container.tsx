import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: Props) => {
  return (
    <Box
      width={"100%"}
      maxWidth={"1600px"}
      margin={"auto"}
      px={{ xl: "52px", lg: "40px", md: "20px", sm: "16px", base: "12px" }}
    >
      {children}
    </Box>
  );
};

export default Container;
