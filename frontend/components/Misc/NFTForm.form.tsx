import type { NextComponentType, NextPageContext } from "next";
import { Box, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";

const UploadForm: NextComponentType = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState<any>();
  const { user } = useUser();

  const onSubmit = (data: any) => setFormData(data);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    const data = {
      user: user?.email,
      ...formData,
    };

    console.log(data);
    axios
      .get("/api/access")
      .then((res) => {
        console.log(res.data);

        axios
          .post(
            "https://gatelinks-production.up.railway.app/api/create/nft",
            data,
            { headers: { Authorization: `Bearer ${res.data.data}` } }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="please enter title..."
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("title")}
        />
        <Input
          textColor="gray.700"
          bgColor="#F9F7FB"
          _focus={{}}
          _active={{}}
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="enter a short desc"
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("description")}
        />
        <Input
          textColor="gray.700"
          bgColor="#F9F7FB"
          _focus={{}}
          _active={{}}
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="url for the resource"
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("url")}
        />
        <Input
          textColor="gray.700"
          bgColor="#F9F7FB"
          _focus={{}}
          _active={{}}
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="contract address"
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("updateAuthority")}
        />
        <Input
          textColor="gray.700"
          bgColor="#F9F7FB"
          _focus={{}}
          _active={{}}
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="name of the nft"
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("nftName")}
        />
        <Input
          textColor="gray.700"
          bgColor="#F9F7FB"
          _focus={{}}
          _active={{}}
          w="96"
          h="10"
          px="3"
          fontWeight="500"
          fontSize="sm"
          placeholder="marketplace link for the nft"
          _placeholder={{ color: "#606366", fontWeight: "500" }}
          {...register("nftMarketplace")}
        />

        <Button
          colorScheme="messenger"
          isLoading={loading}
          type="submit"
          onClick={handleClick}
          _active={{}}
          _focus={{}}
        >
          Upload
        </Button>
      </Box>
    </form>
  );
};

export default UploadForm;
