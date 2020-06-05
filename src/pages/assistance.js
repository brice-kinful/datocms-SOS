import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AssistancePage = ({ data }) => {
  const page = data.datoCmsAssistancePage;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="assistance" className="page">
        <h1>{page.title}</h1>
      </div>
    </Layout>
  );
};

export default AssistancePage;

export const query = graphql`
  query AssistanceQuery {
    datoCmsAssistancePage {
      title
    }
  }
`;
