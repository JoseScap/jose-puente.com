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
  Skills,
  Academic,
  Experience
} from "../components"

// MOCKS
import { 
  MY_SKILLS,
  MY_ACADEMICS,
  MY_EXPERIENCES
} from "../mocks"

// base: 0, sm: 480, md: 768, lg: 992, xl: 1280
// MARKUP
const IndexPage = () => {
  return (
    <main style={{ backgroundColor: "#f0f0f0", minHeight: '100vh' }}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Jose Puente</title>
        <meta name="description" content="Jose Puente, an enthusiastic about personal and professional growth. I'm in love with frontend and backend Javascript technologies." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Box className="content-wrapper" maxW={{ base: 464, md: 1280, xl: 1440 }} margin={"0 auto"} p={{ base: "4", sm: "6", md: "10", lg: "10", xl: "16" }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={6}>
          {/* LET SIDE, HERE THERE WILL BE PROFILE'S SECTIONS */}
          <GridItem w={"100%"} colSpan={{ base: 1, md: 2, xl: 1 }}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "1fr"}} gap={6}>
              <GridItem w={"100%"} colSpan={{ base: 1, md: 2, xl: 1}}>
                <Profile />
              </GridItem>
              <GridItem w={"100%"} colSpan={{ base: 1, md: 2, lg: 1, xl: 1}}>
                <Experience experiences={MY_EXPERIENCES}/>
              </GridItem>
              <GridItem w={"100%"} colSpan={{ base: 1, md: 2, lg: 1, xl: 1}}>
                <Academic careers={MY_ACADEMICS}/>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Grid templateColumns={{ base: "1fr" }} gap={6}>
              {/* SKILL SECTION */}
              <GridItem colSpan={{ base: 1}}>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} as={"section"}>
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
          </GridItem>
        </Grid>
      </Box>
    </main>
  )
}

export default IndexPage
