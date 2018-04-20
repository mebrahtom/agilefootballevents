import React, { Component } from 'react'
import './TeamPage.css';
import heading from '../img/headings/SWE_heading.png';
import placeholder_profile from '../img/placeholder_profile.png';
import {Row, Col} from 'react-bootstrap';

class TeamPage extends Component {




  componentDidMount () {
    //const { id } = this.props.match.params

    console.log(this.props.teamAbr);

  }

  render() {
    //const {match:{params}} = this.props;

    //console.log(this.props.match);




    return (


      <div className="container custom-container">

          <TeamHeading/>
          <div className="team-category"><p>Players</p></div>
          <Squad/>
      </div>
    );
  }
}



const TeamHeading = () => (

  <div className="team-heading">
    <img src={heading} alt={''}></img>
    <p>Teamname</p>
  </div>

)

class Squad extends Component {

  render(){
    var players = renderPlayers();


    return (
      <Row>
        {players}
      </Row>
    )
  }
}


function renderPlayers(){
  var players = [];

  for(var i = 0; i < 10; i++ ){
    players.push(<PlayerProfile/>);
  }

  return players;
}

const PlayerProfile = () => (

  <Col md={3} className="profile-col">
    <div className="player-profile">
      <img src={placeholder_profile} alt={''}></img>
      <Row className="row-custom">
        <Col xs={4} className="number-holder">
          <span>XX</span>
        </Col>
        <Col xs={8} className="info-holder">
          <p className="player-name">Name</p>
          <p className="player-position">Position</p>
        </Col>
      </Row>
    </div>
  </Col>
)


export default TeamPage;
