import * as React from "react"

// CHAKRA COMPONENTS
import {
  Box,
  Heading
} from "@chakra-ui/react"

// CONSTANTES
import {
  COLOR_GRAY2,
  LIGHT_SHADOW,
  MONTSERRAT_FAMILY
} from "../constants/STYLES"

const Projects = () => {
  return (
    <>
      <Box bg={"white"} borderRadius={"xl"} p={"5"} as={"section"} w={"100%"} mt={5} boxShadow={LIGHT_SHADOW}>
        <Heading
          as={"h4"}
          // FONT STYLES
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={600}
          fontSize={18}
          color={COLOR_GRAY2}
        >
          Projects
        </Heading>
      </Box>
    </>
  )
}

export default Projects;