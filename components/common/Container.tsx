import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children, ...restProps }: Props) => {
  return (
    <Box
      width={"100%"}
      // maxWidth={"1600px"}
      margin={"auto"}
      px={{ xl: "64px", lg: "40px", md: "20px", sm: "16px", base: "12px" }}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Container;
