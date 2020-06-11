import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import QuestionAnswer from "../components/faqs/question-answer";

const FaqsPage = ({ data }) => {
  const { title, page, seoSettings } = data.datoCmsFaqsPage;
  const { seoTitle, description } = seoSettings;
  const {
    globalTitle,
    globalDescription,
  } = data.datoCmsSite.globalSeo.fallbackSeo;

  return (
    <Layout>
      <HelmetDatoCms
        title={seoTitle ? seoTitle : `${title} | Share Our Suzy`}
        description={description ? description : globalDescription}
      />
      <div id="faqs" className="page">
        <section className="hero pink-bg">
          <div className="wrapper center-text">
            <h1 className="big-caslon-font text-3xl">{title}</h1>
          </div>
        </section>
        {page.map((item, index) => {
          return (
            <React.Fragment key={index}>
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
    datoCmsSite {
      globalSeo {
        fallbackSeo {
          globalTitle: title
          globalDescription: description
        }
      }
    }
    datoCmsFaqsPage {
      seoSettings {
        seoTitle: title
        description
      }
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
