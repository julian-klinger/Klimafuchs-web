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
        <SEO title="FAQ" />
        <div className="container mx-auto">
          <h1 className="text-3xl">FAQ - Häufig gestellte Fragen</h1>

          <p className="text-thin text-base py-3">Du hast eine Frage, die hier nicht auftaucht? Dann schreib uns einfach an <a href="mailto:info@klimafuchs.org">info@klimafuchs.org</a>. Wir freuen uns auf Deine Nachricht. </p>

          <Accordion />


        </div>
        <div className="container mx-auto pt-10 pb-24">
          <Link to="/">Zurück</Link>
        </div>
      </Layout>
    )
  }
}

export default Faq
