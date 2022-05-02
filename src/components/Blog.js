import * as React from "react"

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
  LIGHT_SHADOW,
  MONTSERRAT_FAMILY
} from "../constants/STYLES"

const Blog = () => {
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
          My Blog
        </Heading>
      </Box>
      <Box bg={"white"} borderRadius={"xl"} p={"5"} as={"section"} w={"100%"} mt={4} boxShadow={LIGHT_SHADOW}>
        <Text
          // FONT STYLES
          fontFamily={MONTSERRAT_FAMILY}
          fontWeight={500}
          fontSize={16}
          lineHeight={"20px"}
          color={COLOR_GRAY3}
        >
          Coming soon. In my blog you will find articles about React, NodeJs, TypeScript, Javascript and much more.
        </Text>
      </Box>
    </>
  )
}

export default Blog;