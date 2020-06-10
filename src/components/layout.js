import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { TransitionState } from "gatsby-plugin-transition-link";
// import { motion, AnimatePresence } from "framer-motion";

import PromoBar from "./promo-bar";
import Header from "./header";
import Footer from "./footer";

import "../styles/index.sass";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsPromoBar {
            enablePromoBar
            promoText
            promoBarBackgroundColor {
              hex
            }
            promoBarPageLink {
              ... on DatoCmsAssistancePage {
                slug
              }
              ... on DatoCmsAboutPage {
                slug
              }
              ... on DatoCmsFaqsPage {
                slug
              }
            }
            promoBarCustomUrl
            promoBarExternalUrl
          }
          datoCmsMainMenu {
            leftMenuItems {
              ... on DatoCmsMenuItem {
                id
                menuItemText
                menuItemPageLink {
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
                menuItemCustomLink
                isThisAButton
              }
            }
            rightMenuItems {
              ... on DatoCmsMenuItem {
                id
                menuItemText
                menuItemPageLink {
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
                menuItemCustomLink
                isThisAButton
              }
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
          }
          datoCmsInstagram {
            handle
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <HelmetDatoCms
              favicon={data.datoCmsSite.faviconMetaTags}
              seo={data.datoCmsHome.seoMetaTags}
            />
            {data.datoCmsPromoBar && <PromoBar {...data.datoCmsPromoBar} />}
            <Header
              leftMenu={data.datoCmsMainMenu.leftMenuItems}
              rightMenu={data.datoCmsMainMenu.rightMenuItems}
            />

            <TransitionState>
              {({ mount, transitionStatus }) => {
                // console.log(transitionStatus);
                transitionStatus == "entering" &&
                  setTimeout(() => {
                    window.scrollTo(0, 1);
                  }, 500);
                return <>{children}</>;
              }}
            </TransitionState>
            {/* {children} */}

            <Footer handle={data.datoCmsInstagram.handle} />
          </>
        );
      }}
    />
  );
};

export default Layout;
