import { Heading } from "@chakra-ui/react";
import { Experience } from "../components/Experience/Experience";
import { Hero } from "../components/Hero/Hero";
import { motion } from "framer-motion";

export default function Home() {
  const heroList = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const cardList = {
    visible: {
      opacity: 1,
      delay: 0.6,
      transition: {
        delayChildren: 1.6,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    visible: { x: 0, opacity: 1 },
  };
  const card = { visible: { y: 10, opacity: 1 } };
  return (
    <>
      <Hero heroList={heroList} item={item} />
      <Experience
        cardList={cardList}
        card={card}
        data={[
          {
            company: "C.C.M. Medical College and Hospital",
            role: "Trainee Researcher",
            content: (
              <p>
                My duties involved gathering primary data and producing research
                reports during clinical trials of a potential new medicine.
              </p>
            ),
          },
          {
            company: "Constance Care",
            role: "Carer",
            content: (
              <p>
                As a care worker, I worked with disabled, mentally ill and
                terminally ill elderly. My duties included providing personal
                assistance with a variety of daily tasks including personal
                grooming, meal preparation, feeding and light housework.
              </p>
            ),
          },
          {
            company:
              "Hospital education department at Royal Hospital for Children",
            role: "Volunteer",
            content: (
              <p>
                I volunteered at the Royal Hospital for Children as a primary
                level teacher. My responsibilities were to educate children
                (between the ages of 5 and 12) under a prescribed curriculum to
                promote their intellectual growth.
              </p>
            ),
          },
          {
            company: "Roboto Studio",
            role: "Copywriter & content designer",
            content: (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quae, quod beatae explicabo inventore harum ullam?
                Explicabo vero, mollitia ad aliquam porro a non consequuntur?
                Quos, doloribus! Distinctio, obcaecati nulla.
              </p>
            ),
          },
          {
            company: "Alzheimer Scotland",
            role: "Volunteer",
            content: (
              <p>
                In my position as a volunteer, my primary job responsibility was
                to provide personalised support. My duties included befriending
                and supporting people with Dementia.
              </p>
            ),
          },
          {
            company: "Military Cadet Corps",
            role: "Recruit",
            content: (
              <p>
                The training involved drill, shooting, physical fitness, map
                reading, first aid, gliding/flying, boat pulling, sailing and
                camp training covering basic of military training in Army, Navy
                and Air Force.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
