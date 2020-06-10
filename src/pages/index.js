import React from "react";
import { graphql } from "gatsby";
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

// import "../styles/home.sass";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;

  return (
    <Layout>
      <HelmetDatoCms />
      <div id="home" className={`page`}>
        <Hero content={datoCmsHome.hero} />
        <Intro content={datoCmsHome.intro} />
        <WhatWeDo content={datoCmsHome.whatWeDo} />
        <CommunityCarousel
          title={datoCmsHome.communityTitle}
          content={datoCmsHome.communityCarousel}
        />
        <HowYouCanHelp content={datoCmsHome.howYouCanHelp} />
        <PatientAssistance content={datoCmsHome.patientAssistance} />
        <PatientStoriesCarousel
          title={datoCmsHome.patientStoriesTitle}
          content={datoCmsHome.patientStoriesCarousel}
        />
        <AnnualEventsAccordion
          title={datoCmsHome.annualEventsTitle}
          content={datoCmsHome.annualEventsAccordion}
        />
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
          id
          title
          headline
          copy
        }
        ... on DatoCmsImageIconGroup {
          id
          imagesIcons {
            originalId
            url
            title
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
          id
          title
        }
        ... on DatoCmsLeftColumn {
          id
          headline
          subheadline
          textBlock
          ctaButtonText
          customUrl
          ctaButtonUrlPageLink {
            ... on DatoCmsAboutPage {
              slug
            }
            ... on DatoCmsAssistancePage {
              slug
            }
            ... on DatoCmsFaqsPage {
              slug
            }
          }
          ctaButtonUrl
        }
        ... on DatoCmsRightColumnItem {
          id
          headline
          subheadline
          ctaText
          ctaUrlPageLink {
            ... on DatoCmsAboutPage {
              slug
            }
            ... on DatoCmsAssistancePage {
              slug
            }
            ... on DatoCmsFaqsPage {
              slug
            }
          }
          customUrl
          ctaUrl
        }
      }
      patientAssistance {
        id
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
        image {
          url
          fluid(maxWidth: 830, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
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
        ctaButtonText
        ctaButtonUrl
      }
    }
  }
`;
