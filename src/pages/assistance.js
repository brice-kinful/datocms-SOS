import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import Hero from "../components/assistance/hero";
import Help from "../components/assistance/help";
import Application from "../components/assistance/application";

const AssistancePage = ({ data }) => {
  const { page } = data.datoCmsAssistancePage;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="assistance" className="page">
        {/* <h1>{page.title}</h1> */}
        {page.map(({ __typename }, index, item) => {
          switch (__typename) {
            case "DatoCmsAssistanceHero":
              return (
                <React.Fragment key={index}>
                  <Hero content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAssistanceHelp":
              return (
                <React.Fragment key={index}>
                  <Help content={item[index]} />
                </React.Fragment>
              );
            case "DatoCmsAssistanceApplication":
              return (
                <React.Fragment key={index}>
                  <Application content={item[index]} />
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

export default AssistancePage;

export const query = graphql`
  query AssistanceQuery {
    datoCmsAssistancePage {
      title
      page: assistanceContent {
        ... on DatoCmsAssistanceHero {
          id
          headline
        }
        ... on DatoCmsAssistanceHelp {
          id
          title
          leftCol
          rightCol
        }
        ... on DatoCmsAssistanceApplication {
          id
          title
          headline
          subheadline
          bodyCopy
          buttonText
          buttonUrl {
            ... on DatoCmsAssistancePage {
              slug
            }
            ... on DatoCmsAboutPage {
              slug
            }
            ... on DatoCmsFaqsPage {
              slug
            }
            ... on DatoCmsPage {
              slug
            }
          }
          externalButtonUrlToggle
          externalButtonUrl
          asterikText
        }
      }
    }
  }
`;
