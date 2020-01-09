import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Page = ({ data }) => {
  const { datoCmsPage } = data;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="" className="page">
        <h1>{datoCmsPage.title}</h1>
      </div>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
    }
  }
`;
