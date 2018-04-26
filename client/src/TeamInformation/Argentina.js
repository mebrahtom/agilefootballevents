import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import groupD from '../img/groups/groupD.png';
import argentina from '../img/players/argentina.jpg';
import flag from '../img/flags/ARG.png';
import ArgentinaFixtures from '../MatchFixtures/ArgentinaFixtures';
import ArgentinaResults from '../MatchResults/ArgentinaResults';
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
        <h2 align="left" onClick={() => this.setState({open:!this.state.open })}> Argentina<br/>
      <img alt="" src={flag}/><br/> </h2>
        {/* Collapse Div*/}
      <Panel id="collapseable-panel" align="left"  background-color ="blue" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
                <img alt=""  height ="auto" width= "auto" src={argentina}/><br/>
                <h1 font color="red"> FIFA World Football Rank: 4 </h1><br/>
                <em>Group: D</em><br/>
                <em>Group Countries</em><br/>
                <img alt="" src={groupD}/><br/><br/>
                  <p>Latest Results</p>
                  <ArgentinaResults /><br/>
                <p>UpComing Games</p>
                  <ArgentinaFixtures />
                <p>History</p>
                <p> Argentina is one of the most successful national football teams in the world having won 2 World Cups in 1978 and 1986.
                  Argentina has been runners up three times in the 1930 1990 and 2014.
                    The team was present in all but four of the World Cups being behind only Brazil Italy and Germany in number of appearances.
                    Argentina has also won the Copa América 14 times one less than Uruguay. </p>
                    <p> Moreover Argentina has also won the Confederations
                    Cup and the gold medal at the Olympic football tournament in 2004 and 2008. Prior to that occasion
                    Argentina had obtained two silver medals in the 1928 and 1996 editions. On other levels of international
                    competition Argentina has won the FIFA U-20 World Cup a record six times.
                     The FIFA U-17 World Cup is the only FIFA international competition yet to be obtained.</p> <br/>
                <p></p>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
</div>
    );
  }
}
export default Argentina;
