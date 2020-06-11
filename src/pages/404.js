import React from "react";
import Layout from "../components/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";

const NotFoundPage = () => (
  <Layout>
    <HelmetDatoCms title={"Page Not Found"} />
    <div className="page">
      <section>
        <div className="wrapper content center-text">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
