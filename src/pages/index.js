import * as React from "react"
import Helmet from "react-helmet"

// CHAKRA COMPONENTS
import {
  Grid, 
  GridItem,
  Box
} from "@chakra-ui/react"

// CUSTOM COMPONENTS
import {
  Profile,
  Skills
} from "../components"

// MOCKS
import { 
  MY_SKILLS
} from "../mocks/skills"

// MARKUP
const IndexPage = () => {
  return (
    <main style={{ backgroundColor: "#f0f0f0", minHeight: '100vh' }}>
      <Helmet>
        <title>Jose Puente</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Box className="content-wrapper" maxW={1440} margin={"0 auto"} p={"16"}>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
          <GridItem w={"100%"}>
            <Profile />
          </GridItem>
          <GridItem colSpan={2}>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
              {
                MY_SKILLS.map((props, idx) => (
                  <GridItem w={"100%"} key={idx}>
                    <Skills {...props}/>
                  </GridItem>
                ))
              }
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </main>
  )
}

export default IndexPage
