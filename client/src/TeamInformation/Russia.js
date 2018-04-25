import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import groupA from '../img/groups/groupA.png';
import russia from '../img/players/russia.jpg';
import flag from '../img/flags/RUS.png';
import RussiaFixtures from '../MatchFixtures/RussiaFixtures'
import RussiaResults from '../MatchResults/RussiaResults'

class Russia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {
    return (<div className="match-cell">
      <h2 align="left" onClick={() => this.setState({open: !this.state.open })}>Russia <br/> <img alt="" src={flag}/><br/> </h2>
      {/* Collapse Div */}
      <Panel id="collapseable-panel" align="left" expanded={this.state.open}>
        <Panel.Collapse>
          <Panel.Body>
            <em>
            <img alt="" src={russia}/> <br/>
              FIFA World Football Rank: 65
            </em><br/>
            <em>Group: F </em><br/>
            <em>Group Countries</em><br/>
            <img alt="" src={groupA}/><br/><br/>
            <p>Lates Results</p>
            <RussiaResults /><br/>
            <p>UpComing Games</p>
            <RussiaFixtures /> <br/>
            <p>history:</p>
            <p>
              Russia has participated in 10 FIFA World Cups 7 of which were as the Soviet Union. Their best performance was as the Soviet Union reaching 4th place in England 1966. Russia's best performance after the dissolution of the Soviet Union was 18th place in the 1994 FIFA World Cup hosted by the United States of America.</p>
            <p></p>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    </div>);
  }
}
export default Russia;
