import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NavBar } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, Link, Button, Badge, useToast } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import type { PhantomProvider } from "../@types/Phantom.types";

const Resource: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [id, setId] = useState<string | undefined>(undefined);

  const toast = useToast();

  useEffect(() => {
    router ? setId(router.query.id as string) : null;
  }, [router, id]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/api/access");

      const data = await axios.post(
        `${process.env[`NEXT_PUBLIC_API_URL`]}/info/${
          (id?.split("-")[1] as string) === "nft" ? "nft" : "token"
        }`,
        {
          resourceId: id,
        },
        { headers: { Authorization: `Bearer ${res.data.token}` } }
      );

      setData(data.data.resource);
    }

    getData();
  }, [id]);

  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);

  const verifyNFT = async () => {
    try {
      const res = await axios.post(
        `${process.env[`NEXT_PUBLIC_API_URL`]}/verify/nft`,
        {
          walletAddress: walletKey,
          updateAuthority: data.updateAuthority,
        }
      );

      if (res.status === 200) {
        toast({
          title: "Ownership Verified",
          description: "Ownership verified for the SPL Tokens!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      // @ts-ignore
      if (err.response.status === 400) {
        toast({
          title: "Couldn't verify ownership",
          description: "Oops! Looks like ownership isn't verified",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  const verifySPL = async () => {
    try {
      const res = await axios.post(
        `${process.env[`NEXT_PUBLIC_API_URL`]}/verify/token`,
        {
          walletAddress: walletKey,
          mintAddress: data.mintAddress,
          amount: data.amount,
        }
      );

      if (res.status === 200) {
        toast({
          title: "Ownership Verified",
          description: "Ownership verified for the SPL Tokens!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      // @ts-ignore
      if (err.response.status === 400) {
        toast({
          title: "Couldn't verify ownership",
          description: "Oops! Looks like ownership isn't verified",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

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
          {data ? (
            <>
              <Text textColor="gray.100" fontSize="xl">
                {data.title}
              </Text>
              <Text textColor="gray.300" fontSize="lg">
                {data.description}
              </Text>

              <Link isExternal href={data.url} textColor="white">
                <FiExternalLink size={22} />
              </Link>
            </>
          ) : null}
        </Box>

        {provider && !walletKey && (
          <Button
            colorScheme="green"
            fontFamily="inter"
            fontWeight="500"
            onClick={connectWallet}
          >
            Connect to Phantom Wallet
          </Button>
        )}

        {provider && walletKey && (
          <>
            <Badge
              rounded="full"
              py="1"
              px="4"
              display="grid"
              placeItems="center"
              fontFamily="poppins"
              bgColor="purple.500"
              textColor="white"
            >
              {/* @ts-ignore */}
              {walletKey}
            </Badge>

            {id?.split("-")[1] === "nft" ? (
              <Button
                colorScheme="green"
                fontFamily="inter"
                fontWeight="500"
                onClick={verifyNFT}
              >
                Verify NFT Ownership
              </Button>
            ) : (
              <Button
                colorScheme="green"
                fontFamily="inter"
                fontWeight="500"
                onClick={verifySPL}
              >
                Verify SPL Ownership
              </Button>
            )}
          </>
        )}

        {!provider && (
          <p>
            No provider found. Install{" "}
            <a href="https://phantom.app/">Phantom Browser extension</a>
          </p>
        )}
      </Box>
    </>
  );
};

export default Resource;
