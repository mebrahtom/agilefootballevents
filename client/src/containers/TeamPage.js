import React, { Component } from 'react'
import './TeamPage.css';
import heading from '../img/headings/SWE_heading.png';
import Squad from '../components/Squad.js'



class TeamPage extends Component {


  render() {
    //const {match:{params}} = this.props;

    //console.log(this.props.match);

    return (
      <div className="container custom-container">

          <TeamHeading/>
          <div className="team-category"><p>Squad</p></div>
          <Squad abr={this.props.teamAbr}/>
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




export default TeamPage;
