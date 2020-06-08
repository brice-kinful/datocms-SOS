import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import QuestionAnswer from "../components/faqs/question-answer";

const FaqsPage = ({ data }) => {
  const { title, page } = data.datoCmsFaqsPage;
  // console.log(page);

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="faqs" className="page">
        <section className="hero pink-bg">
          <div className="wrapper center-text">
            <h1 className="big-caslon-font text-3xl">{title}</h1>
          </div>
        </section>
        {page.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <QuestionAnswer content={item} order={index} />
            </React.Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export default FaqsPage;

export const query = graphql`
  query FaqsQuery {
    datoCmsFaqsPage {
      title
      page: questionsAnswers {
        ... on DatoCmsQA {
          id
          question
          answer
        }
      }
    }
  }
`;
