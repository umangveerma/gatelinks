import Head from 'next/head';
import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return <div>hi {user.name}</div>;
  }

  return (
    <>
      <Head>
        <title>🗼 GatedLinks</title>
        <meta name='description' content='Solana Gated Links' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Link href={'/api/auth/login'}>Login</Link>
    </>
  );
};

export default Home;
