import type { NextComponentType, NextPageContext } from "next";
import { Box, Text, Button, Flex } from "@chakra-ui/react";

interface Props {
    handleCreateClick: () => void
}

const NavBar: NextComponentType<NextPageContext, {}, Props> = ({ handleCreateClick }) => {
  return (
    <>
      <Box
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        py="4"
        px="8"
      >
        <Text fontFamily="redHat" fontWeight="800" fontSize="xl">
          GateLinks
        </Text>

        <Flex
          dir="row"
          gap="4"
          fontFamily="inter"
          fontWeight="600"
          fontSize="md"
        >
          <Text>Home</Text>
          <Text>GitHub</Text>
        </Flex>

        <Button
          colorScheme="purple"
          fontFamily="inter"
          w="36"
          rounded="lg"
          h="10"
          _focus={{}}
          onClick={handleCreateClick}
        >
          Create Link
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
