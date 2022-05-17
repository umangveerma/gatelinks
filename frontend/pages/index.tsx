import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../components";
import { Box } from "@chakra-ui/react";

import { useUser } from "@auth0/nextjs-auth0";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>🗼 GatedLinks</title>
        <meta name="description" content="Solana Gated Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box>
        {user ? (
          <>hi, {user?.name}</>
        ) : (
          <>
            <Link href="/api/auth/login">Login</Link>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
