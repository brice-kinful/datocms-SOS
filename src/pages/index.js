import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";

import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import WhatWeDo from "../components/home/what-we-do";
import CommunityCarousel from "../components/home/community-carousel";
import HowYouCanHelp from "../components/home/how-you-can-help";
import PatientAssistance from "../components/home/patient-assistance";
import PatientStoriesCarousel from "../components/home/patient-stories-carousel";
import AnnualEventsAccordion from "../components/home/annual-events-accordion";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="home" className={`page`}>
        <Hero content={datoCmsHome.hero} />
        <Intro content={datoCmsHome.intro} />
        <WhatWeDo />
        <CommunityCarousel />
        <HowYouCanHelp />
        <PatientAssistance />
        <PatientStoriesCarousel />
        <AnnualEventsAccordion />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      hero {
        ... on DatoCmsHeadline {
          id
          text
        }
        ... on DatoCmsBackgroundImage {
          id
          image {
            fluid(
              maxWidth: 2400
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      intro {
        ... on DatoCmsIntroContent {
          headline
          copy
        }
        ... on DatoCmsImage {
          image {
            fluid(maxWidth: 550, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      whatWeDo {
        ... on DatoCmsWhatWeDoContent {
          title
          headline
          copy
        }
        ... on DatoCmsImageIconGroup {
          imagesIcons {
            originalId
            fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      communityTitle
      communityCarousel {
        id
        quote
        quoteSaidBy
      }
      howYouCanHelp {
        ... on DatoCmsHowYouCanHelpTitle {
          title
        }
        ... on DatoCmsLeftColumn {
          headline
          subheadline
          textBlock
          ctaButtonText
          ctaButtonUrl
        }
        ... on DatoCmsRightColumnItem {
          headline
          subheadline
          ctaText
          ctaUrl
        }
      }
      patientAssistance {
        headline
        subheadline
        copy
        ctaButtonText
        ctaButtonUrl
      }
      patientStoriesTitle
      patientStoriesCarousel {
        id
        headline
        copy
      }
      annualEventsTitle
      annualEventsAccordion {
        title
        copy
        image {
          fluid(maxWidth: 750, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;
