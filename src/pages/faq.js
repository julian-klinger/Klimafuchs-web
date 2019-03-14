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
          <h1 className="text-white  text-center text-3xl">FAQ</h1>

          <div className="py-4">
            <Accordion accordion={false}>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Was kann ich bei Klimafuchs machen?</h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Eine andere interessante Frage</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Some question</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Complex title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </Layout>
    )
  }
}

export default Faq
