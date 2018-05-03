import React, { Component } from 'react'
import './TeamPage.css';
import placeholder_banner from '../img/headings/placeholder_heading.png';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Squad from '../components/Squad.js'
import {importAll} from '../HelperFunctions.js'
import {renderGroup} from '../components/GroupTable.js'
import {Row, Col} from 'react-bootstrap';
import ResultSmall from '../components/ResultSmall.js'
import UpcomingSmall from '../components/UpcomingSmall.js'



class TeamPage extends Component {

  componentDidMount() {
    this.props.getAllCountries().then((data) => {
    })
    this.props.getAllMatchesTeam(this.props.teamAbr).then((data) => {
    })
    this.props.getAllUpcomingMatchesTeam(this.props.teamAbr).then((data) => {
    })
    this.props.getCountryInfo(this.props.teamAbr).then((data) => {
    })
    this.props.getAllgroupresults();
  }
  render() {
    //const {match:{params}} = this.props;
    const abr = this.props.teamAbr ;
    var country = "";
    var country_group = [];
    this.props.countries.forEach(function (entry) {
      if(entry.abbreviation === abr.toUpperCase()){
        country = entry.countryName;
        country_group.push({groupName:entry.groupName});
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
          <Information upcomingmatches = {this.props.upcomingmatchesteam} results = {this.props.matchesteam} history = {this.props.countryinfo[0].history} group = {country_group} groupresults = {this.props.groupresults}/>
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

const Information = (props) => (
  <div className="team-information">
    <p className="info-heading">History</p>
    {renderHistory(props.history)}
    <Row>
      <Col sm={6} >
        <p className="info-heading" >Group {props.group[0] == null ? '' : props.group[0].groupName}</p>
        <div className="group-container-team">
          {renderGroup(props.group, props.groupresults )}
        </div>
      </Col>
      <Col sm={6}>
        <div>
          <p className="info-heading">Upcoming games</p>
          {renderUpComingGames(props.upcomingmatches)}
        </div>
        <div className="small-match-holder">
          <p className="info-heading">Latests results</p>
          {renderResults(props.results)}
        </div>

      </Col>
    </Row>
  </div>

)

function renderHistory(history){

  if(history === ""){
    return (<p>No history text added yet</p>)
  }

  return (<p>{history}</p>);

}

function renderUpComingGames(matches){

  var match_elements = [];
  if(matches != null){
    match_elements = matches.map((match, index) => <UpcomingSmall key={index} match={match}/>);
  }

    if(match_elements.length === 0 ){
      match_elements.push(<p>No upcoming matches yet</p>);
    }
  return match_elements;

}

function renderResults(matches){

  var match_elements = [];
  if(matches != null){
    match_elements = matches.map((match, index) => <ResultSmall key={index} match={match}/>);
  }

  if(match_elements.length === 0 ){
    match_elements.push(<p>No matches played yet</p>);
  }

  return match_elements;

}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    upcomingmatchesteam: state.upcomingmatchesteam,
    matchesteam: state.matchesteam,
    countryinfo: state.countryinfo,
    groupresults : state.groupresults
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
