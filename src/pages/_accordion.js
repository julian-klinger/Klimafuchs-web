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
            <div className="block">Was ist Klimafuchs?</div>
            <div className="block">
              {this.state.index !== 1 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms"
            isOpen={this.state.index === 1}
            onChange={({ collapseState }) => {
              this.setState({ item1: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item1: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(2)}>
            <div className="block">Wie kann ich mitmachen?</div>
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
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(3)}>
            <div className="block">Überprüft jemand, ob ich Challenges tatsächlich erfüllt habe?</div>
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
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(4)}>
            <div className="block">Wer steckt dahinter?</div>
            <div className="block">
              {this.state.index !== 4 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 4}
            onChange={({ collapseState }) => {
              this.setState({ item4: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item4: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(5)}>
            <div className="block">Was passiert mit meinen Daten?</div>
            <div className="block">
              {this.state.index !== 5 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 5}
            onChange={({ collapseState }) => {
              this.setState({ item5: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item5: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(6)}>
            <div className="block">Wo kommen die Challenges her?</div>
            <div className="block">
              {this.state.index !== 6 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 6}
            onChange={({ collapseState }) => {
              this.setState({ item6: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item6: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(7)}>
            <div className="block">Wie lange dauert eine Season?</div>
            <div className="block">
              {this.state.index !== 7 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 7}
            onChange={({ collapseState }) => {
              this.setState({ item7: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item7: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(8)}>
            <div className="block">Wie kann ich mit meinen Freunden spielen?</div>
            <div className="block">
              {this.state.index !== 8 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 8}
            onChange={({ collapseState }) => {
              this.setState({ item8: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item8: collapseState });
            }}
          >
            <p className="accordion-body">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single </p>
          </Collapse>
        </div>

      </div>
    );
  }
}
