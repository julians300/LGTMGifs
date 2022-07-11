import React from "react";
import { Button, Icon, useClipboard, Tooltip, HStack, useColorMode, Box } from "@chakra-ui/react";
import { SiMarkdown } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { useReward } from "react-rewards";

interface Props {
  url: string;
  name: string;
  slug: string;
}

const CopyLinks = ({ url, name, slug }: Props) => {
  const { colorMode } = useColorMode();
  const rewardType = Math.random() > 0.5 ? "confetti" : "balloons";
  const { reward: rewardMd } = useReward(`${slug}-md-party`, rewardType, {
    position: "absolute",
    lifetime: 150,
    startVelocity: rewardType === "balloons" ? 10 : 35,
    elementCount: rewardType === "balloons" ? 20 : 50,
  });
  const { reward: rewardLink } = useReward(`${slug}-link-party`, rewardType, {
    position: "absolute",
    lifetime: 150,
    startVelocity: rewardType === "balloons" ? 10 : 35,
    elementCount: rewardType === "balloons" ? 20 : 50,
  });
  const copyMarkdownValue = `![${name || "LGTM"}](${url})`;
  const copyURLValue = url;
  const { onCopy: onCopyMD, hasCopied: hasCopiedMD } = useClipboard(copyMarkdownValue);
  const { onCopy: onCopyURL, hasCopied: hasCopiedURL } = useClipboard(copyURLValue);
  return (
    <HStack spacing={0} pos="relative">
      <Tooltip label={hasCopiedMD ? "Copied" : "Copy Markdown"} placement="top">
        <Button
          onClick={() => {
            onCopyMD();
            rewardMd();
          }}
          size={"xs"}
          variant={"ghost"}
          aria-label={`Copy markdown for ${name} gif`}
          data-splitbee-event-copymd={slug}
          data-splitbee-event="Copy"
        >
          <Box as="span" zIndex={99} id={`${slug}-md-party`} />

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
          onClick={() => {
            onCopyURL();
            rewardLink();
          }}
          size={"xs"}
          variant={"ghost"}
          aria-label={`Copy image url for ${name} gif`}
          data-splitbee-event-copyurl={slug}
          data-splitbee-event="Copy"
        >
          <Box as="span" zIndex={99} id={`${slug}-link-party`} />
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
