import type { NextComponentType, NextPageContext } from "next";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { BsLink45Deg } from "react-icons/bs";

interface Props {
  title: string;
  desc: string;
  url: string;
  type: "nft" | "tkn";
}

const ResourceCard: NextComponentType<NextPageContext, {}, Props> = ({
  title,
  desc,
  url,
  type,
}) => {
  return (
    <>
      <Box
        w="70%"
        py="3"
        px="6"
        bgColor="gray.700"
        rounded="lg"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
      >
        <Flex gap="2" alignItems="center">
          <Text
            textColor="gray.100"
            fontFamily="redHat"
            fontSize="lg"
            fontWeight="600"
          >
            {title}:
          </Text>
          <Text
            textColor="gray.200"
            fontWeight="500"
            fontSize="md"
            fontFamily="inter"
          >
            {desc}
          </Text>
        </Flex>

        <Flex gap="2" alignItems="center" textColor="white">
          <Link isExternal href={url}>
            <BsLink45Deg size="25" cursor="pointer" />
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default ResourceCard;
