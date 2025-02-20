import React from "react";
import Layout from "../components/layout";
import Shabd from "../components/shabd";
import SEO from "../components/seo";
import Container from "../components/container";

const IndexPage = () => (
  <Layout>
    <SEO title="Speak Unadulterated Hindi" />
    <Container>
      <div className="my-12 flex flex-col sm:flex-row">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
          Speak <span className="text-4xl">
            <span className="text-brand"> unadulterated </span> Hindi.
          </span>
        </h2>
      </div>
    </Container>
    <Shabd />
  </Layout>
);

export default IndexPage;
