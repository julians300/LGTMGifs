import React from "react";
import { Button, Icon, useClipboard, Tooltip, HStack, useColorMode, Box } from "@chakra-ui/react";
import { SiMarkdown } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";

interface Props {
  url: string;
  name: string;
  slug: string;
}

const CopyLinks = ({ url, name, slug }: Props) => {
  const { colorMode } = useColorMode();
  const copyMarkdownValue = `![${name || "LGTM"}](${url})`;
  const copyURLValue = url;
  const { onCopy: onCopyMD, hasCopied: hasCopiedMD } = useClipboard(copyMarkdownValue);
  const { onCopy: onCopyURL, hasCopied: hasCopiedURL } = useClipboard(copyURLValue);
  return (
    <HStack spacing={2} pos="relative">
      <Tooltip label={hasCopiedMD ? "Copied" : "Copy Markdown"} placement="top">
        <Button
          onClick={onCopyMD}
          size={"md"}
          variant={"link"}
          aria-label={`Copy markdown for ${name} gif`}
          data-splitbee-event-copymd={slug}
          data-splitbee-event="Copy"
          rounded="full"
          bg="rgba(0,0,0,0.65)"
          p={2}
        >
          <Box as="span" zIndex={99} id={`${slug}-md-party`} />

          {hasCopiedMD ? (
            <Icon
              as={ImCheckmark}
              width={"24x"}
              height={"100%"}
              mx={1}
              color={colorMode === "light" ? "gray.100" : "gray.400"}
            />
          ) : (
            <Icon
              as={SiMarkdown}
              width={"24px"}
              height={"100%"}
              color={colorMode === "light" ? "gray.100" : "gray.400"}
            />
          )}
        </Button>
      </Tooltip>
      <Tooltip label={hasCopiedURL ? "Copied" : "Copy URL"} placement="top">
        <Button
          onClick={onCopyURL}
          size={"md"}
          variant={"link"}
          aria-label={`Copy image url for ${name} gif`}
          data-splitbee-event-copyurl={slug}
          data-splitbee-event="Copy"
          rounded="full"
          bg="rgba(0,0,0,0.65)"
          p={2}
        >
          <Box as="span" zIndex={99} id={`${slug}-link-party`} />
          {hasCopiedURL ? (
            <Icon
              as={ImCheckmark}
              width={"24x"}
              height={"100%"}
              mx={1}
              color={colorMode === "light" ? "gray.100" : "gray.400"}
            />
          ) : (
            <Icon as={HiLink} width={"24px"} height={"100%"} color={colorMode === "light" ? "gray.100" : "gray.400"} />
          )}
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default CopyLinks;
