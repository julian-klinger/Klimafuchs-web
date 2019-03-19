import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Accordion } from "./_accordion.js"

class Faq extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: true };
  }

  render() {
    return (
      <Layout>
        <SEO title="Impressum" />
        <div className="container mx-auto">
          <h1 className="text-3xl">FAQ</h1>

          <Accordion />

        </div>
      </Layout>
    )
  }
}

export default Faq
