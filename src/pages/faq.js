import React from "react"
import { Link } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import Layout from "../components/layout"
import SEO from "../components/seo"

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
          <h1 className="text-white text-3xl">FAQ</h1>

          <div className="py-4">
            <Accordion accordion={false}>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Was kann ich bei Klimafuchs machen?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Wer steckt dahinter?</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Eine andere interessante Frage</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Wer steckt dahinter?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Complex title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </div>

          <Link className="text-white" to="/">Zurück</Link>
        </div>
      </Layout>
    )
  }
}

export default Faq
