import type { NextPage } from "next";
import { NavBar, ResourceCard } from "../../components";
import { Box, Image, Text, Center, useDisclosure } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import axios from "axios";

const Account: NextPage = () => {
  const { user } = useUser();
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/api/access");
      const data = await axios.post(
        `${process.env[`NEXT_PUBLIC_API_URL`]}/info/resourcesByUser`,
        { user: user?.email },
        { headers: { Authorization: `Bearer ${await res.data}` } }
      );

      setData(data.data.resources);
    }

    getData();
  }, [user, setData]);

  return (
    <>
      <NavBar />

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
              key={d._id}
              id={d.resourceId}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Account;
