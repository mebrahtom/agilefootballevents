import React, { Component } from 'react'
import './PlayerPage.css';
import placeholder_profile from '../img/placeholder_profile.png';
import placeholder_banner from '../img/banners/SWE_banner.png'
import {Table} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'


class PlayerPage extends Component {

  componentDidMount () {
    //const { id } = this.props.match.params
    this.props.getPlayer(this.props.playerId).then((data) => {
    })


  }

  render() {
    console.log(this.props.player);
    const player = this.props.player;
    console.log(player);

    const profile_images = importAll(require.context('../img/profiles', false, /\.(png)$/));
    var img_path_profile = profile_images[this.props.player[0].img_id + ".png"];
    if(img_path_profile == null){
      img_path_profile = placeholder_profile;
    }

    const images = importAll(require.context('../img/banners', false, /\.(png)$/));
    var img_path_banner = images[this.props.player[0].country.toUpperCase() + "_banner.png"];
    if(img_path_banner == null){
      img_path_banner = placeholder_banner;
    }

    return (
      <div className="container custom-container">
        <div className= "player-info">
          <img className = "banner" src={img_path_banner} alt=''></img>
          <p className="playername">#{this.props.player[0].shirtNumber} {this.props.player[0].firstname} {this.props.player[0].surname}</p>
          <img className = "profile" src={img_path_profile} alt=''></img>
          <Table className="table-custom" responsive>
            <tbody>
              <tr>
                <td>Country: {this.props.player[0].country}</td>
                <td>Club: {this.props.player[0].club}</td>
              </tr>
              <tr>
                <td>Position: {this.props.player[0].position}</td>
                <td>Weight: {this.props.player[0].weight} kg</td>
              </tr>
              <tr>
                <td>Goals: {this.props.player[0].goals}</td>
                <td>Height: {this.props.player[0].height} cm</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage)
