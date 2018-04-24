import React, { Component } from 'react'
import './TeamPage.css';
import placeholder_banner from '../img/headings/placeholder_heading.png';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Squad from '../components/Squad.js'
import {importAll} from '../HelperFunctions.js'



class TeamPage extends Component {

  componentDidMount() {
    this.props.getAllCountries().then((data) => {
    })
  }
  render() {
    //const {match:{params}} = this.props;
    const abr = this.props.teamAbr ;
    var country = "";
    this.props.countries.forEach(function (entry) {
      if(entry.abbreviation === abr.toUpperCase()){
        country = entry.countryName;
      }
    });

    const images = importAll(require.context('../img/headings', false, /\.(png)$/));
    var img_path = images[abr.toUpperCase() + "_heading.png"];
    if(img_path == null){
      img_path = placeholder_banner;
    }
    return (
      <div className="container custom-container">
          <TeamHeading teamname={country} image={img_path}/>
          <div className="team-category"><p>Squad</p></div>
          <Squad abr={this.props.teamAbr}/>
      </div>
    );
  }
}
const TeamHeading = (props) => (

  <div className="team-heading">
    <img src={props.image} alt={''}></img>
    <p>{props.teamname}</p>
  </div>

)

function mapStateToProps(state) {
  return {
    countries: state.countries
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
