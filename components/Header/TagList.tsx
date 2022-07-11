import React from "react";
import {
  Box,
  HStack,
  useColorMode,
  Icon,
  Tooltip,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Wrap,
  WrapItem,
  VisuallyHidden,
} from "@chakra-ui/react";
import Tag from "../common/Tag";
import tags from "./headertags";
import allTags from "./alltags";
import { BsThreeDots } from "react-icons/bs";

const TagList = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box borderColor={colorMode === "light" ? "#f9f9f9" : "#333a44"}>
      <HStack spacing={3} position="relative" pr={"50px"} w="100%">
        {tags.map((tag, index) => (
          <Box key={index}>
            <Tag name={tag.name} slug={tag.slug} />
          </Box>
        ))}
        <Box>
          <Tooltip label={"All Tags"} placement={"top"}>
            <Box transition={".15s ease all"} transform={"translateY(1px)"} _hover={{ transform: "translateY(-2px)" }}>
              <Button
                display={"inline-block"}
                onClick={onOpen}
                variant={"link"}
                py={".25rem"}
                rounded={3}
                lineHeight={".825rem"}
                whiteSpace={"nowrap"}
                backgroundColor={colorMode === "light" ? "#fff3c6" : "#343b42"}
              >
                <Icon as={BsThreeDots} color={colorMode === "light" ? "#545965" : "#ffffff"} />
                <VisuallyHidden>All Tags</VisuallyHidden>
              </Button>
            </Box>
          </Tooltip>
        </Box>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All Tags</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Wrap py={4} spacing={4}>
                {allTags.map((tag, index) => (
                  <WrapItem key={index}>
                    <Tag name={tag.name} slug={tag.slug} />
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TagList;
