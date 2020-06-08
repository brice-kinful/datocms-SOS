import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const FaqsPage = ({ data }) => {
  // const {page} = data.datoCmsFaqsPage;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="FAQs" className="page">
        <section className="hero pink-bg">
          <div className="wrapper center-text">
            <h1 className="big-caslon-font text-3xl">
              Frequently Asked Questions
            </h1>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FaqsPage;

export const query = graphql`
  query FaqsQuery {
    datoCmsFaqsPage {
      title
    }
  }
`;
