import React from "react";
import { Button, Icon, useClipboard, Tooltip, HStack, useColorMode } from "@chakra-ui/react";
import { SiMarkdown } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";

interface Props {
  url: string;
  name: string;
}

const CopyLinks = ({ url, name }: Props) => {
  const { colorMode } = useColorMode();
  const copyMarkdownValue = `![${name || "LGTM"}](${url})`;
  const copyURLValue = url;
  const { onCopy: onCopyMD, hasCopied: hasCopiedMD } = useClipboard(copyMarkdownValue);
  const { onCopy: onCopyURL, hasCopied: hasCopiedURL } = useClipboard(copyURLValue);
  return (
    <HStack spacing={0}>
      <Tooltip label={hasCopiedMD ? "Copied" : "Copy Markdown"} placement="top">
        <Button
          display={"inline"}
          onClick={onCopyMD}
          size={"xs"}
          variant={"ghost"}
          aria-label={`Copy markdown for ${name || ""} gif`}
        >
          {hasCopiedMD ? (
            <Icon
              as={ImCheckmark}
              width={"20x"}
              height={"100%"}
              mx={1}
              color={colorMode === "light" ? "gray.500" : "gray.400"}
            />
          ) : (
            <Icon
              as={SiMarkdown}
              width={"20px"}
              height={"100%"}
              color={colorMode === "light" ? "gray.500" : "gray.400"}
            />
          )}
        </Button>
      </Tooltip>
      <Tooltip label={hasCopiedURL ? "Copied" : "Copy URL"} placement="top">
        <Button
          display={"inline"}
          onClick={onCopyURL}
          size={"xs"}
          variant={"ghost"}
          aria-label={`Copy image url for ${name || ""} gif`}
        >
          {hasCopiedURL ? (
            <Icon
              as={ImCheckmark}
              width={"20x"}
              height={"100%"}
              mx={1}
              color={colorMode === "light" ? "gray.500" : "gray.400"}
            />
          ) : (
            <Icon as={HiLink} width={"20px"} height={"100%"} color={colorMode === "light" ? "gray.500" : "gray.400"} />
          )}
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default CopyLinks;
