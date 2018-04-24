import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import groupC from '../img/groups/groupC.png'
import australia from '../img/players/australia.jpg';
import flag from '../img/flags/AUS.png';
import AustraliaFixtures from '../MatchFixtures/AustraliaFixtures'
import AustraliaResults from '../MatchResults/AustraliaResults'
;
class Australia extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }
  render(){
    return(
      <div className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <h2 align ="left">Australia<br /> <img alt="" src={flag}/><br/> </h2>
        <Panel id="collapseable-panel" align="left" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              <img alt="" height = "auto" width= "auto" src={australia}/><br/>
                <em> FIFA World Football Rank: 39 </em><br/>
                <em>Group: C</em><br/>
                <em>Group Countries</em><br/>
                <img alt="" src={groupC}/> <br/>
                <em>Latest Resultss</em> <br/>
                 <AustraliaResults /> <br/>
                <em>UpComing Games</em> <br/>
                 <AustraliaFixtures /> <br/>
                <p>History</p>
                <p> The Australia national soccer team nicknamed the Socceroos has represented Australia at the FIFA World Cup on four occasions:
                  in 1974, 2006, 2010, 2014 and will represent Australia in the 2018 World Cup. In Australia's first appearance representing OFC a team made up entirely of amateurs secured a scoreless draw against Chile though eventually departed from the 1974 tournament without a goal to show from their inaugural appearance. Australia made up for lost time at Germany 2006 and qualified for the Round of 16 before narrowly falling to eventual champions Italy.</p>
            <p>The German theme continued at South Africa 2010 although this time Australia now representing the AFC suffered a 4-0 loss against the European giants
               in a scoreline which ultimately scuppered their progress. A ten-man 1–1 draw against Ghana and a 2–1 win against Serbia saw Australia eliminated on goal difference three goals off the Africans.
               Australia were to lose all three games in a tough group at Brazil 2014.</p>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
</div>
    );
  }
}
export default Australia;
