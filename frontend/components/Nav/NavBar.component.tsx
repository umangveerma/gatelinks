import type { NextComponentType, NextPageContext } from "next";
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

interface Props {
  handleCreateClick: () => void;
}

const NavBar: NextComponentType<NextPageContext, {}, Props> = ({
  handleCreateClick,
}) => {
  const router = useRouter();
  const { user } = useUser();

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
          fontFamily="poppins"
          fontWeight="600"
          fontSize="md"
        >
          <Text>Home</Text>
          <Text>GitHub</Text>
        </Flex>

        <Flex gap="3">
          <Button
            colorScheme="purple"
            w="32"
            rounded="lg"
            h="10"
            _focus={{}}
            onClick={handleCreateClick}
          >
            Create Link
          </Button>

          {user ? (
            <>
              <Menu>
                <MenuButton
                  rounded="full"
                  cursor="pointer"
                  _hover={{ border: "3px solid", borderColor: "purple.600" }}
                  transition="all"
                  transitionDuration="75ms"
                  height="10"
                  width="10"
                >
                  <Image src={user?.picture as string} rounded="full" />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    display="flex"
                    flexDir="row"
                    gap="2"
                    onClick={()=>router.push("/account")}
                  >
                    <AiOutlineUser />
                    Account
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    display="flex"
                    flexDir="row"
                    gap="2"
                    textColor="red.500"
                    onClick={()=>router.push("/api/auth/logout")}
                  >
                    <FiLogOut />
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
              colorScheme="messenger"
              onClick={() => router.push("/api/auth/login")}
            >
              Login
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
