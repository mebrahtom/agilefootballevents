import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import groupB from '../img/groups/groupB.png';
import spain from '../img/players/spain.jpg';
import flag from '../img/flags/SPA.png';
import SpainFixtures from '../MatchFixtures/SpainFixtures';
import SpainResults from '../MatchResults/SpainResults';
class Argentina extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }
  render(){
    return(
      <div className="match-cell">
        <h2 align="left" onClick={() => this.setState({open:!this.state.open })}> Spain <br/>
      <img alt="" src={flag}/><br/> </h2>
        {/* Collapse Div*/}
      <Panel id="collapseable-panel" align="left"  background-color ="blue" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
                <img alt=""  height ="auto" width= "auto" src={spain}/><br/>
                <h1 font color="red"> FIFA World Football Rank: 6 </h1><br/>
                <em>Group: B</em><br/>
                <em>Group Countries</em><br/>
                <img alt="" src={groupB}/><br/><br/>
                  <p>Latest Results</p>
                  <SpainResults /><br/>
                <p>UpComing Games</p>
                  <SpainFixtures />
                <p>History: </p>
                <p> Spain is one of only eight countries ever to have won the FIFA World Cup which it did at the 2010 FIFA World
                   Cup in South Africa the first time the team had reached the final. The team is one of the most present at the World Cup
                    finals with 14 appearances out of the 20 tournaments. Spain reached fourth-place in 1950 and has reached the quarter-finals four times</p>
                    <p> The Spanish team has also won three UEFA European Football Championships in 1964 2008 and 2012 and the Olympic football tournament in 1992.</p>
             </Panel.Body>
          </Panel.Collapse>
        </Panel>
</div>
    );
  }
}

export default Argentina;
