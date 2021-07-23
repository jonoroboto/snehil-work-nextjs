import React, { ReactElement } from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  company: string;
  role: string;
  content: ReactElement;
  card: any;
}

const MotionBox = motion(Box);

export const Card = ({ company, role, content, card }: Props) => {
  return (
    <MotionBox
      p="8"
      bg="white"
      borderRadius="16"
      borderWidth="2px"
      borderColor="lavender.500"
      variants={card}
      initial={{ opacity: 0 }}
    >
      <Heading as="h3" size="sm" color="lavender.900">
        {company}
      </Heading>
      <Heading as="h2" size="lg" mt="1" mb="2">
        {role}
      </Heading>
      <Text>{content}</Text>
    </MotionBox>
  );
};
