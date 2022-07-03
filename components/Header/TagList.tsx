import React from "react";
import {
  Box,
  Stack,
  Flex,
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
import Container from "../common/Container";
import Tag from "../common/Tag";
import tags from "./headertags";
import allTags from "./alltags";
import { BsThreeDots } from "react-icons/bs";

const TagList = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box borderBottomWidth={1} borderColor={colorMode === "light" ? "#f9f9f9" : "#333a44"}>
      <Container>
        <Flex justifyContent={"space-between"} align={"center"}>
          <Stack isInline spacing={"16px"} py={4} pr={4}>
            {tags.map((tag, index) => (
              <Box key={index}>
                <Tag name={tag.name} slug={tag.slug} />
              </Box>
            ))}
            <Box>
              <Tooltip label={"More Tags"} placement={"top"}>
                <Box
                  transition={".15s ease all"}
                  transform={"translateY(-2px)"}
                  _hover={{ transform: "translateY(-4px)" }}
                >
                  <Button
                    display={"inline-block"}
                    onClick={onOpen}
                    variant={"link"}
                    py={".25rem"}
                    rounded={3}
                    lineHeight={"1rem"}
                    whiteSpace={"nowrap"}
                    backgroundColor={colorMode === "light" ? "#fff3c6" : "#343b42"}
                  >
                    <Icon as={BsThreeDots} color={colorMode === "light" ? "#545965" : "#ffffff"} />
                    <VisuallyHidden>All Tags</VisuallyHidden>
                  </Button>
                </Box>
              </Tooltip>
            </Box>
          </Stack>
        </Flex>

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
      </Container>
    </Box>
  );
};

export default TagList;
