import React from "react";
import { Grid, Container, Box } from "@chakra-ui/react";
import { Card } from "./Card";
import { motion } from "framer-motion";

interface Props {
  data: any;
  cardList: any;
  card: any;
}

const MotionGrid = motion(Grid);

export const Experience = ({ cardList, card, data }: Props) => {
  return (
    <Box>
      <Container maxWidth="6xl" py="16">
        <MotionGrid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
          gap="32px"
          animate="visible"
          variants={cardList}
        >
          {data.map((item) => (
            <Card
              card={card}
              key={item.role}
              company={item.company}
              role={item.role}
              content={item.content}
            />
          ))}
        </MotionGrid>
      </Container>
    </Box>
  );
};
