import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";
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
  Button,
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
  const [loading, setLoading] = useState<boolean>();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _focus={{}} color="white" />

          <ModalBody bgColor="#101827" py="8" px="8">
            <Tabs isFitted variant="enclosed" textColor="gray.100">
              <TabList>
                <Tab
                  _focus={{}}
                  _active={{}}
                  _selected={{ textColor: "gray.200", borderColor: "white" }}
                >
                  NFT
                </Tab>
                <Tab
                  _focus={{}}
                  _active={{}}
                  _selected={{ textColor: "gray.200", borderColor: "white" }}
                >
                  TKN
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text
                    fontFamily="redHat"
                    textAlign="center"
                    fontSize="xl"
                    textColor="gray.100"
                    fontWeight="600"
                  >
                    Upload w NFT thingy{" "}
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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

                    <Button
                      colorScheme="messenger"
                      isLoading={loading}
                      onClick={() => setLoading(true)}
                      _active={{}}
                      _focus={{}}
                    >
                      Upload
                    </Button>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Text
                    fontFamily="redHat"
                    textAlign="center"
                    fontSize="xl"
                    textColor="gray.100"
                    fontWeight="600"
                  >
                    Upload w TKN thingy{" "}
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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
                      textColor="gray.700"
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

                    <Button
                      colorScheme="messenger"
                      isLoading={loading}
                      onClick={() => setLoading(true)}
                      _active={{}}
                      _focus={{}}
                    >
                      Upload
                    </Button>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
