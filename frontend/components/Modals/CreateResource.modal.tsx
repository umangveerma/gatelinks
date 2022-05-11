import type { NextComponentType, NextPageContext } from "next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CreateModal: NextComponentType<NextPageContext, {}, Props> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _focus={{}} color="white" />

          <ModalBody bgColor="#111827" py="8">
            <Text
              fontFamily="redHat"
              textAlign="center"
              fontSize="xl"
              textColor="gray.100"
              fontWeight="600"
            >
              Upload Resource{" "}
            </Text>

            <Box
              my="10"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              fontFamily="poppins"
            >
              <Input
                bgColor="#F9F7FB"
                _focus={{}}
                _active={{}}
                w="80"
                h="10"
                px="3"
                fontWeight="500"
                fontSize="sm"
                placeholder="please enter title..."
                _placeholder={{ color: "#606366", fontWeight: "500" }}
              />
              <Input
                bgColor="#F9F7FB"
                _focus={{}}
                _active={{}}
                w="80"
                h="10"
                px="3"
                fontWeight="500"
                fontSize="sm"
                placeholder="enter a short desc"
                _placeholder={{ color: "#606366", fontWeight: "500" }}
              />
              <Input
                bgColor="#F9F7FB"
                _focus={{}}
                _active={{}}
                w="80"
                h="10"
                px="3"
                fontWeight="500"
                fontSize="sm"
                placeholder="url for the resource"
                _placeholder={{ color: "#606366", fontWeight: "500" }}
              />
              <Input
                bgColor="#F9F7FB"
                _focus={{}}
                _active={{}}
                w="80"
                h="10"
                px="3"
                fontWeight="500"
                fontSize="sm"
                placeholder="contract address"
                _placeholder={{ color: "#606366", fontWeight: "500" }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
