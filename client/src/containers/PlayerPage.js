import React, { Component } from 'react'
import './PlayerPage.css';
import heading from '../img/headings/SWE_heading.png';
import placeholder_profile from '../img/placeholder_profile.png';
import banner from '../img/banners/SWE_banner.png'
import {Row, Col, Table} from 'react-bootstrap';

class PlayerPage extends Component {




  componentDidMount () {
    //const { id } = this.props.match.params

    console.log(this.props.playerId);

  }

  render() {

    return (
      <div className="container custom-container">
        <div className= "player-info">
          <img className = "banner" src={banner}></img>
          <p className="playername">#XX Playername</p>
          <img className = "profile" src={placeholder_profile}></img>
          <Table className="table-custom" responsive>
            <tbody>
              <tr>
                <td>Country</td>
                <td>Club</td>
              </tr>
              <tr>
                <td>Position</td>
                <td>Weight</td>
              </tr>
              <tr>
                <td>Goals</td>
                <td>Height</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}



const TeamHeading = () => (

  <div className="team-heading">
    <img src={heading}></img>
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
      <img src={placeholder_profile}></img>
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


export default PlayerPage;
