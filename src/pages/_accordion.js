import React, { Component } from "react"
import Collapse from '@kunukn/react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
            <div className="block">Wie kann ich mitmachen?</div>
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
            <p className="accordion-body">
              Einfach im Appstore oder Playstore nach der App „Klimafuchs“ suchen und herunterladen. Nach der Erstellung eines Profils bekommst du jede Woche neue Challenges, die dir dabei helfen, spielerisch CO2 zu sparen. Wenn dir das nicht reicht, gründe einfach ein Team oder vergleiche deine Punktzahl mit anderen Klimafüchsen.
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(2)}>
            <div className="block">Überprüft jemand, ob ich Challenges tatsächlich erfüllt habe?</div>
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
            <p className="accordion-body">
              Nein. Wenn du also nur hier bist, um die Rangliste anzuführen, klick einfach immer jede Challenge als erfüllt an und genieße deinen kurzen Moment des Triumphs. Solltest du allerdings ein Gewissen haben, wird dein trügerisches Hochgefühl aber wahrscheinlich recht schnell durch gähnende Leere ersetzt. Denn eigentlich geht’s ja darum, mit gutem Beispiel voran zu gehen :-)
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(3)}>
            <div className="block">Wer steckt dahinter?</div>
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
            <p className="accordion-body">
              Der Klimafuchs ist im universitären Umfeld entstanden verfolgt keinerlei monetäre Interessen. Wenn du mehr über die Entstehung des Klimafuchses erfahren möchtest, schau einfach mal <AniLink fade to="/about">hier</AniLink> vorbei.
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(4)}>
            <div className="block">Wo kommen die Challenges her?</div>
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
            <p className="accordion-body">
              In erster Linie aus unserem Klimafuchs-Wiki! Wenn Du Ideen hast, kannst Du dich gerne einbringen und Vorschläge für Themenwochen und Challenges machen. Schau einfach mal auf <AniLink fade to="wiki-link">Mach mit!</AniLink> vorbei.
            </p>
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
            <p className="accordion-body">
              Nicht viel. Wir benötigen für die Registrierung lediglich deine E-Mail-Adresse, ein Passwort und einen Benutzernamen. Diese Daten bleiben auf unserem Server und werden nicht weitergegeben. Deine E-Mail-Adresse ist für andere Nutzer nicht sichtbar.
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(6)}>
            <div className="block">Muss ich mich mit anderen vergleichen?</div>
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
            <p className="accordion-body">
              Nein. Wenn dich mit anderen vergleichen möchtest, kannst du ein Team gründen und Dich mit anderen Teams derselben Größe vergleichen. Wenn Du dich alleine mit anderen vergleichen möchtest, kannst Du ein „Solo-Team“ gründen.
            </p>
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
            <p className="accordion-body">
              Eine Season ist vergleichbar mit einer Jahreszeit und dauert immer ungefähr ein Vierteljahr. Jede Season werden Eure Punkte zurückgesetzt, um neuen Klimafüchsen auch eine Chance im Ranking zu geben.
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(8)}>
            <div className="block">Was macht Ihr mit meinen Daten?</div>
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
            <p className="accordion-body">
              Nichts. Wir benötigen für die Registrierung lediglich deine E-Mail-Adresse, ein Passwort und einen Benutzernamen. Diese Daten bleiben auf unserem Server und werden nicht weitergegeben. Deine E-Mail-Adresse ist für andere Nutzer nicht sichtbar.
            </p>
          </Collapse>
        </div>

        <div>
          <div className="flex justify-between accordion-title" onClick={() => this.onToggle(9)}>
            <div className="block">Wie kann ich mit meinen Freunden spielen?</div>
            <div className="block">
              {this.state.index !== 9 ? <FontAwesomeIcon className="icon-collapsed" icon={faAngleDown} /> : <FontAwesomeIcon className="icon-expanded" icon={faAngleUp} />}
            </div>
          </div>
          <Collapse
            className="collapse"
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
            isOpen={this.state.index === 9}
            onChange={({ collapseState }) => {
              this.setState({ item9: collapseState });
            }}
            onInit={({ collapseState }) => {
              this.setState({ item9: collapseState });
            }}
          >
            <p className="accordion-body">
              Unter „Teams“ kannst du ein Team gründen und deinen Freunden einen Invite-Link schicken, der sie entweder direkt in der App zu deinem Team schickt oder sie bittet, die App herunterzuladen und sie dann weiterleitet. Du kannst deinem Team einen Namen, einen Avatar und eine Beschreibung geben. Du kannst auch anderen Teams eine Beitrittsanfrage schicken.
            </p>
          </Collapse>
        </div>

      </div>
    );
  }
}
