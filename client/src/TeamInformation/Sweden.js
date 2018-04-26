import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import groupF from '../img/groups/groupF.png';
import sweden from '../img/players/sweden.jpg';
import flag from '../img/flags/SWE.png';
import SwedenFixtures from '../MatchFixtures/SwedenFixtures'
import SwedenResults from '../MatchResults/SwedenResults'
class Sweden extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    };
  }
  render(){
    return(
      <div className="match-cell">
        <h2 align ="left"onClick={() => this.setState({open:!this.state.open })}> Sweden <br/> <img alt="" src={flag}/><br/> </h2>
        {/* Collapse Div*/}
      <Panel id="collapseable-panel" align="left" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              <img alt="" src={sweden}/><br/>
                <em> FIFA World Football Rank: 18 </em><br/>
                <em>Group: F</em><br/>
                <em>Group Countries</em><br/>
                <img alt="" src={groupF}/> <br/>  <br/>
                <p>Lates Results</p><br/>
                    <SwedenResults />
                <p>UpComing Games</p><br/>
                  <SwedenFixtures /> <br/>
                <p>History</p>
                 <p> Sweden have been one of the more successful national teams in the history of the World Cup having reached 4 semi-finals and becoming
                   runners-up on home ground in 1958. They have been present at 11 out of 20 World Cups by 2014.
                   They will make their twelfth appearance at the finals in the 2018 FIFA World Cup in Russia. </p>
                    <p> Throughout the World Cup history Brazil became Sweden's historical rival. The two countries have met each other seven
                      times but Sweden never managed to win with five victories for the Brazilian side and two draws. Another historical opponent
                      of Sweden in the finals is (West) Germany: four encounters with three wins for Germany and one for Sweden. </p>
                <p></p>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
</div>
    );
  }
}
export default Sweden;
