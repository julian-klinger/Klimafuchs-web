import React from "react"
import { Link } from "gatsby"
import { Collapse } from 'react-collapse';

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
        <div>FAQ</div>

        <div className="bg-red">
          <span>
            Show stuff
          </span>
          <Collapse isOpened={true}>
            <div>Random content </div>
          </Collapse>
        </div>

        <div className="bg-red">
          <span>
            Show stuff
          </span>
          <Collapse isOpened={false}>
            <div>Random content</div>
          </Collapse>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Faq
