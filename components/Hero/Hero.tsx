import React from "react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  heroList: any;
  item: any;
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionStack = motion(Stack);

export const Hero = ({ heroList, item }: Props) => {
  return (
    <Box position="relative">
      <MotionBox
        background="lavender.200"
        height="calc(100% + 160px)"
        width="100%"
        position="absolute"
        zIndex="-1"
        transformOrigin="top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      <Container maxWidth="6xl" pt="32" pb="4">
        <MotionStack spacing="4" animate="visible" variants={heroList}>
          <MotionHeading
            size="md"
            mb="8"
            color="lavender.900"
            initial={{ opacity: 0, x: -10 }}
            variants={item}
          >
            Snehil Tripathi
          </MotionHeading>
          <MotionHeading
            maxWidth="2xl"
            pb="4"
            size="2xl"
            initial={{ opacity: 0, x: -10 }}
            variants={item}
          >
            Helping to provide the support and care needed to vulnerable people
          </MotionHeading>
          <MotionText
            maxWidth="xl"
            initial={{ opacity: 0, x: -10 }}
            variants={item}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            unde. Deserunt adipisci ipsa fugit itaque quis minima hic
            necessitatibus dolor rerum, alias corrupti cumque quo impedit nemo
            nostrum quam sint.
          </MotionText>
          <MotionStack
            direction="row"
            spacing="2"
            initial={{ opacity: 0, x: -10 }}
            variants={item}
          >
            <Button size="lg" colorScheme="lavender">
              CV
            </Button>
            <Button size="lg" colorScheme="lavender">
              LinkedIn
            </Button>
            <Button size="lg" colorScheme="lavender">
              Email me
            </Button>
          </MotionStack>
        </MotionStack>
      </Container>
    </Box>
  );
};
