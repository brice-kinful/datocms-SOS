import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const FaqsPage = ({ data }) => {
  const page = data.datoCmsFaqsPage;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="FAQs" className="page">
        <h1>{page.title}</h1>
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
