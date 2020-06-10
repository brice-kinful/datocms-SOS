import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// import "../styles/about.sass";

import Hero from "../components/about/hero";
import Goal from "../components/about/goal";
import Suzy from "../components/about/suzy";
import Cta from "../components/about/cta";
import Board from "../components/about/board";

const AboutPage = ({ data }) => {
  const { page } = data.datoCmsAboutPage;
  //   console.log(page);
  return (
    <Layout>
      <HelmetDatoCms />
      <div id="about" className="page">
        {page.map(({ __typename }, index, item) => {
          switch (__typename) {
            case "DatoCmsAboutHero":
              return (
                <React.Fragment key={index}>
                  <Hero content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAboutGoal":
              return (
                <React.Fragment key={index}>
                  <Goal content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAboutSuzy":
              return (
                <React.Fragment key={index}>
                  <Suzy content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAboutCta":
              return (
                <React.Fragment key={index}>
                  <Cta content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAboutBoard":
              return (
                <React.Fragment key={index}>
                  <Board content={item[index]} />
                </React.Fragment>
              );
            default:
              break;
          }
        })}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    datoCmsAboutPage {
      title
      page: aboutContent {
        ... on DatoCmsAboutHero {
          id
          headline
          backgroundImage {
            fluid(
              maxWidth: 2400
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsAboutGoal {
          id
          headline
          bodyCopy
        }
        ... on DatoCmsAboutSuzy {
          id
          title
          image {
            fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          bodyCopy
        }
        ... on DatoCmsAboutCta {
          id
          headline
          bodyCopy
          buttonText
          buttonUrl {
            ... on DatoCmsAssistancePage {
              slug
            }
            ... on DatoCmsAboutPage {
              slug
            }
          }
          externalButtonUrlToggle
          externalButtonUrl
        }
        ... on DatoCmsAboutBoard {
          id
          title
          names
        }
      }
    }
  }
`;
