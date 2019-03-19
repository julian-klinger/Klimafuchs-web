import React, { Component } from "react"
import Collapse from '@kunukn/react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export class Accordion extends Component {
  state = {
    index: 0,
  };

  onToggle = index =>
    this.setState(state => ({ index: state.index === index ? "collapsed" : index }));

  render() {

    return (

      <div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(1)}>
            <div className="block">Bla bla question about Klimafuchs</div>
            <div className="block">
              {this.state.index !== 1 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 1}
            onChange={({ collapseState }) => {
              this.setState({ item1: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item1: collapseState });
            }}
          >
            <p className="body-transition">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(2)}>
            <div className="block">Bla bla question about Klimafuchs</div>
            <div className="block">
              {this.state.index !== 2 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 2}
            onChange={({ collapseState }) => {
              this.setState({ item2: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item2: collapseState });
            }}
          >
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(3)}>
            <div className="block">Bla bla question about Klimafuchs</div>
            <div className="block">
              {this.state.index !== 3 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 3}
            onChange={({ collapseState }) => {
              this.setState({ item3: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item3: collapseState });
            }}
          >
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>
      </div>
    );
  }
}
