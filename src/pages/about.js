import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// import "../styles/about.sass";

import Hero from "../components/about/hero";
import Goal from "../components/about/goal";

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
                <React.Fragment key={item.id}>
                  <Hero content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAboutGoal":
              return (
                <React.Fragment key={item.id}>
                  <Goal content={item[index]} />
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
      }
    }
  }
`;
