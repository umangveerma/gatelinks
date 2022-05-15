import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NavBar } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, Link, Button } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const Resource: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  console.log(data);
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    router ? setId(router.query.id as string) : null;
  }, [router, id]);

  useEffect(() => {
    axios.get("/api/access").then((res) => {
      id
        ? axios
            .post(
              `${process.env[`NEXT_PUBLIC_API_URL`]}/info/${
                id.split("-")[1] as string
              }`,
              {
                resourceId: id,
              },
              { headers: { Authorization: `Bearer ${res.data.data}` } }
            )
            .then((res) => {
              setData(res.data.resource);
            })
        : null;
    });
  }, [id]);

  return (
    <>
      <NavBar />

      <Box
        display="flex"
        justifyContent="center"
        flexDir="column"
        gap="8"
        alignItems="center"
      >
        <Box
          h="64"
          w="64"
          rounded="md"
          bgColor="gray.700"
          mt="16"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontFamily="inter"
        >
          <Text textColor="gray.100" fontSize="xl">
            {data.title}
          </Text>
          <Text textColor="gray.300" fontSize="lg">
            {data.description}
          </Text>

          <Link isExternal href={data.url} textColor="white">
            <FiExternalLink size={22} />
          </Link>
        </Box>

        <Button colorScheme="purple" fontFamily="inter" fontWeight="500">Verify NFT</Button>
      </Box>
    </>
  );
};

export default Resource;
