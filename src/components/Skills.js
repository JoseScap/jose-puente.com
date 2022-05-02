import * as React from "react"

// CHAKRA COMPONENTS
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Button
} from "@chakra-ui/react"

// CONSTANTES
import {
  COLOR_BLUE1,
  COLOR_GRAY2,
  LIGHT_SHADOW,
  MONTSERRAT_FAMILY
} from "../constants/STYLES"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

const Skills = ({ title, skills = [] }) => {
  const { useState } = React;

  // HOOKS
  const [showSkills, setShowSkills] = useState(false)

  // HANDLERS
  const handleShowSkills = () => {
    setShowSkills(oldState => !oldState)
  }

  return (
    <Box bg={"white"} borderRadius={"xl"} p={"5"} h={showSkills ? "fit-content" : "60px"} overflow={"hidden"} boxShadow={LIGHT_SHADOW}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Heading
          as={"h5"}
          // ESTILOS DE FUENTE
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={700}
          fontSize={18}
          lineHeight={"22px"}
          color={COLOR_GRAY2}
          textTransform={"uppercase"}
        >
          {title}
        </Heading>
        <Button
          // ESTILOS DE FUENTE
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={700}
          fontSize={18}
          lineHeight={"22px"}
          color={showSkills ? COLOR_BLUE1 : COLOR_GRAY2}
          // BUTTON PROPS
          variant={"ghost"}
          onClick={handleShowSkills}
          p={0}
          h={"fit-content"}
          transform={showSkills ? "rotate(180deg)" : "rotate(0)"}
          transition={"all ease .3s"}
        >
          <FontAwesomeIcon icon={faAngleUp}/>
        </Button>
      </Box>
      <SkillList skills={skills} showSkills={showSkills}/>
    </Box>
  )
}

const SkillList = ({ skills = [], showSkills }) => {
  return (
    <UnorderedList
      // WITHOUT BULLETS
      listStyleType={"none"}
      // MARGENES
      mx={0}
      mb={0}
      mt={4}
    >
      {
        skills.length > 0 && (
          skills.map(({skill, experience}, idx) => (
            <ListItem mt={2} key={idx} display={showSkills ? "block" : "none" }>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text
                  // ESTILOS DE FUENTE
                  fontFamily={MONTSERRAT_FAMILY}
                  fontWeight={500}
                  fontSize={16}
                >
                  {skill}
                </Text>
                <Text
                  // ESTILOS DE FUENTE
                  fontFamily={MONTSERRAT_FAMILY}
                  fontWeight={600}
                  fontSize={16}
                  color={COLOR_BLUE1}
                >
                  {experience}
                </Text>
              </Box>
            </ListItem>
          ))
        )
      }
    </UnorderedList>
  )
}


export default Skills