import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NavBar } from "../components";

const Resource: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>
  <NavBar />

  </>;
};

export default Resource;
