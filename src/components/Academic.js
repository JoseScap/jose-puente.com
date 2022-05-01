import * as React from "react"

// CHAKRA COMPONENTS
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react"

// CONSTANTS
import {
  COLOR_GRAY1,
  COLOR_GRAY2,
  COLOR_GRAY3,
  MONTSERRAT_FAMILY
} from "../constants/STYLES"

const Academic = ({ careers = [] }) => {
  return (
    <Box bg={"white"} borderRadius={"xl"} p={"5"} as={"section"} maxW={{ base: "100%", md: 750 }} margin={"0 auto"} h={"100%"}>
      <Heading
        as={"h3"}
        // FONT STYLES
        fontFamily={MONTSERRAT_FAMILY}
        fontWeight={500}
        fontSize={24}
        color={COLOR_GRAY2}
      >
        Academic
      </Heading>
      {
        careers.length > 0 && (
          careers.map((props, idx) => (
            <AcademicItem {...props} key={idx}/>
          ))
        )
      }
    </Box>
  )
}

const AcademicItem = ({ title, company, period, description, logo }) => {
  return (
    <Box display={"flex"} mt={"10"}>
      <img src={logo} alt="Soy-Henry's log" style={{ width: "80px", height: "80px", display: "inline-block" }}/>
      <Box ml={"4"}>
        <Text
          // FONT STYLES
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={500}
          fontSize={14}
          color={COLOR_GRAY3}
        >
          { period }
        </Text>
        <Heading
          as={"h5"}
          // FONT STYLES
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={600}
          fontSize={16}
          color={COLOR_GRAY1}
          // MARGINS
          mt={"3"}
        >
          { title } at { company }
        </Heading>
        <Text
          // FONT STYLES
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={500}
          fontSize={16}
          lineHeight={"20px"}
          color={COLOR_GRAY3}
          // MARGINS
          mt={"5"}
        >
          { description }
        </Text>
      </Box>
    </Box>
  )
}

export default Academic