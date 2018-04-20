import React, { Component } from 'react'
import './PlayerPage.css';
import placeholder_profile from '../img/placeholder_profile.png';
import banner from '../img/banners/SWE_banner.png'
import {Table} from 'react-bootstrap';




class PlayerPage extends Component {

  componentDidMount () {
    //const { id } = this.props.match.params

    console.log(this.props.playerId);

  }

  render() {

    return (
      <div className="container custom-container">
        <div className= "player-info">
          <img className = "banner" src={banner} alt=''></img>
          <p className="playername">#XX Playername</p>
          <img className = "profile" src={placeholder_profile} alt=''></img>
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


export default PlayerPage;
