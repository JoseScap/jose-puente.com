module.exports = {
  siteMetadata: {
    title: `Jose Puente`,
    siteUrl: `https://jose-puente.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-fontawesome-css`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  }]
};