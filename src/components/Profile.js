import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// CHAKRA COMPONENTS
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react"

// CONSTANTES
import {
  COLOR_GRAY2,
  COLOR_GRAY3,
  MONTSERRAT_FAMILY
} from "../constants/STYLES"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Profile = () => {
  return (
    <Box bg={"white"} borderRadius={"xl"} p={"5"} as={"section"} w={{ base: "100%", md: "50%", xl: "100%"}} maxW={464} margin={"0 auto"}>
      <StaticImage src="../images/profile.jpeg" alt="Jose Puente's Picture" placeholder="blurred" style={{ borderRadius: "12px" }} />
      <Heading
        as={"h1"}
        // ESTILOS DE FUENTE
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={600}
        fontSize={24}
        color={COLOR_GRAY2}
        // MARGENES
        mt={"5"}
      >
        Jose Puente Scapolatempo
      </Heading>
      <Heading
        // ESTILOS DE FUENTE
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={500}
        fontSize={18}
        color={COLOR_GRAY3}
        // MARGENES
        mt={"1.5"}
      >
        Fullstack Software Developer
      </Heading>
      <Text
        // ESTILDOS DE FUENTE
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={500}
        fontSize={18}
        color={COLOR_GRAY2}
        // MARGENES
        mt={"8"}
      >
        <FontAwesomeIcon icon={faEnvelope}/> info@jose-puente.com
      </Text>
      <Text
        // ESTILOS DE FUENTE
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={500}
        fontSize={18}
        color={COLOR_GRAY2}
        // MARGENES
        mt={"2.5"}
      >
        <FontAwesomeIcon icon={faPhone}/> (+54) 381 368-6040
      </Text>
      <Text
        // ESTILOS DE FUENTE
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={500}
        fontSize={18}
        lineHeight={"22px"}
        color={COLOR_GRAY3}
        // MARGENES
        mt={"9"}
      >
        I'm a software developer, enthusiastic about personal and professional growth. I'm in love with frontend and backend Javascript technologies.
      </Text>
    </Box>
  )
}

export default Profile;