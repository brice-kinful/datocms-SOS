require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Share Our Suzy`,
    titleTemplate: "%s | Share Our Suzy",
    description: "To honor the spirit of Suzy Mcgrane by raising money and resources to assist and support breast cancer patients from diagnosis to remission.",
    siteUrl: "https://shareoursuzy.netlify.app",
    image: "/og-image.jpg", // Path to your image you placed in the 'static' folder    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // data: `@import "${__dirname}/src/styles/index";`,
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
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
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};