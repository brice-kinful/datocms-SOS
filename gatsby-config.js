require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Share on Suzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // data: `@import "${__dirname}/src/styles/index";`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_API_TOKEN,
        previewMode: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};