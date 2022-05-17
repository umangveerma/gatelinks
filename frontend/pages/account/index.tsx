import type { NextPage } from "next";
import { NavBar, CreateModal, ResourceCard } from "../../components";
import { Box, Image, Text, Center, useDisclosure } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import axios from "axios";

const Account: NextPage = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<any>();
  console.log(data);

  useEffect(() => {
    axios
      .get("/api/access")
      .then((res) => {
        console.log(res.data);
        axios
          .post(
            `${process.env[`NEXT_PUBLIC_API_URL`]}/info/resourcesByUser`,
            { user: user?.email },
            { headers: { Authorization: `Bearer ${res.data.data}` } }
          )
          .then((res) => {
            console.log(res);
            setData(res.data.resources);
          });
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <CreateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <NavBar handleCreateClick={onOpen} />

      <Box
        bgColor="#F9F7F1"
        w="full"
        py="8"
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

        <Box
          my="12"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="3"
        >
          {data?.map((d: any) => (
            <ResourceCard
              title={d.title}
              desc={d.description}
              url={d.url}
              type={d.verificationType}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Account;
