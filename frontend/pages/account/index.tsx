import type { NextPage } from "next";
import { NavBar, CreateModal } from "../../components";
import { Box, Image, Text, useDimensions, useDisclosure } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";

const Account: NextPage = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <CreateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <NavBar handleCreateClick={onOpen} />

      <Box
        bgColor="#F9F7F1"
        w="full"
        py="4"
        display="flex"
        flexDir="column"
        gap="2"
        alignItems="center"
        justifyContent="center"
      >
        {" "}
        {user ? (
          <Image
            src={user?.picture as string}
            height="32"
            width="32"
            rounded="full"
          />
        ) : null}
        <Box textAlign="center">
          <Text
            fontFamily="redHat"
            fontSize="xl"
            fontWeight="700"
            color="gray.600"
          >
            {user?.name}
          </Text>
          <Text
            fontFamily="redHat"
            fontSize="lg"
            fontWeight="600"
            color="gray.500"
          >
            {user?.email}
          </Text>
        </Box>
      </Box>

      <Box my="8">
        <Text
          align="center"
          fontFamily="redHat"
          fontSize="2xl"
          fontWeight="800"
        >
          {" "}
          Created Resources{" "}
        </Text>
      </Box>
    </>
  );
};

export default Account;
