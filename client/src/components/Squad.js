import React, { Component } from 'react'
import placeholder_profile from '../img/placeholder_profile.png';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap';
import '../containers/TeamPage.css';
import {importAll} from '../HelperFunctions.js'

class Squad extends Component {

  componentDidMount() {
    this.props.getSquad(this.props.abr).then((data) => {
    })
  }
  render(){
    var content = renderPlayers(this.props.squad);

    console.log('content', content);

    if (content.length === 0){
      content = (
        <div className="no-teams">
          <p>No squad have yet been added for this team</p>
        </div>
      );
    }

    return (
      <Row>
        {content}
      </Row>
    )
  }
}

const images = importAll(require.context('../img/profiles', false, /\.(png|jpe?g|svg)$/));

function renderPlayers(squad){
  //var players = [];
  const players = squad;
  const player_elements = players.map((player, index) => PlayerProfile(player));

  return player_elements;
}

function PlayerProfile(player) {

  var img_path = images[player.img_id + ".png"];
  if(img_path == null){
    img_path = placeholder_profile;
  }

  var link = "/player/" + player.id;

  return (
    <Col md={3} className="profile-col" key={player.id}>
      <a href={link}>
        <div className="player-profile">
          <img onError={(e)=>{e.target.src=placeholder_profile}} src={img_path} alt={''}></img>
          <Row className="row-custom">
            <Col xs={4} className="number-holder">
              <span>{player.shirtNumber}</span>
            </Col>
            <Col xs={8} className="info-holder">
              <p className="player-name">{player.firstname}<br/>{player.surname}</p>
              <p className="player-position">{player.position}</p>
            </Col>
          </Row>
        </div>
      </a>
    </Col>
  )

}





function mapStateToProps(state) {
  return {
    squad: state.squad
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Squad)
