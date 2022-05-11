import type { NextPage } from "next";
import { useRouter } from "next/router";

const Resource: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <></>;
};

export default Resource;
