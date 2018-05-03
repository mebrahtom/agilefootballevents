import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'

class StatisticsTable extends Component {

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getTeamStats().then(() => {
      /* Do stuff after fetching */
    })
    this.props.getPlayerStats();

  }
  render() {
   { /* const tables = renderTables(this.props.groups, this.props.groupresults, images); */ }
   const playergoals = renderPlayerGoalTable(this.props.playerstats);
   const playerassists = renderPlayerAssTable(this.props.playerstats);
   const teamgoals = renderTeamGoalTable(this.props.teamstats);
   const teampossesion = renderTeamPossTable(this.props.teamstats);
    return(
      <div>
        <h3>Player Statistics</h3>
        <h4 className="col-sm-6">Top Scores</h4>
        <h4 className="col-md-6">Assists</h4>
          <ListGroup className="col-md-6">
            { playergoals }
          </ListGroup>
          <ListGroup className="col-md-6">
            { playerassists }
          </ListGroup>
        
        <h3>Team Statistics</h3>
        <h4 className="col-sm-6">Goals Scored</h4>
        <h4 className="col-md-6">Possesion</h4>     
        <ListGroup className="col-md-6">
          { teamgoals }
        </ListGroup>

        <ListGroup className="col-md-6">
          { teampossesion }
        </ListGroup>
        {/* tables */}
      </div>

    );
  }
}

function renderPlayerGoalTable(stats) {
  var allRows = [];
  for(var i = 0; i < stats.length; i++){
    if(i < 5){                            //Very ugly code, how to fix?
      allRows.push(<PlayerGoalRow key={i}      
        name={stats[i].firstname+" "+stats[i].surname}
        goals={stats[i].goals}
        countryName={stats[i].countryName}
        image={stats[i].img_id}/>);

    }
  }

  return allRows;
}

function renderPlayerAssTable(stats) {
  var allRows = [];
  for(var i = 0; i < stats.length; i++){
    if(i < 5){                            //Very ugly code, how to fix?
      allRows.push(<PlayerAssistRow key={i}      
        image={stats[i].img_id}/>);
      
    }
  }

  return allRows;
}

function renderTeamGoalTable(stats) {
  var allRows = [];
 for(var i = 0; i < stats.length; i++){
    if(i < 5){                            //Very ugly code, how to fix?
      allRows.push(<TeamGoalRow key={i}      
        goals={stats[i].goals}
        countryName={stats[i].countryName}
        abr={stats[i].abbreviation}/>);
    }
  }

  return allRows;
}

function renderTeamPossTable(stats) {
  var allRows = [];
 for(var i = 0; i < stats.length; i++){
    if(i < 5){                            //Very ugly code, how to fix?
      allRows.push(<TeamPossRow key={i}      
        countryName={stats[i].countryName} //Not used yet (should be)
        abr={stats[i].abbreviation}/>); //Not used yet (should be)
    }
  }

  return allRows;
}

class PlayerGoalRow extends Component {

  render() {
    const images = importAll(require.context('../img/profiles', false, /\.(png)$/));

    return (
      <ListGroupItem><h4><img className="stats-images" src={images[this.props.image+'.png']} alt={''} width={35} height={35}/>{this.props.name}<span className="pull-right score-margin">{this.props.goals}</span></h4>{this.props.countryName}</ListGroupItem>
    );
  }
}

class PlayerAssistRow extends Component {
  render() {
    const images = importAll(require.context('../img/profiles', false, /\.(png)$/));

    return (
      <ListGroupItem><h4><img className="stats-images" src={images['dummy.png']} alt={''} width={35} height={35}/>Player Name<span className="pull-right score-margin">6</span></h4>Country Name</ListGroupItem>
    );
  }
}


class TeamGoalRow extends Component {


  render() {
    const link_team = "/team/" + this.props.abr;

    const images = importAll(require.context('../img/flags', false, /\.(png)$/));

    return (
      <ListGroupItem><img className="stats-images" src={images[this.props.countryName+'.png']} alt={''} width={35} height={25}/><h4><span className="pull-right">{this.props.goals}</span><a href={link_team}>{this.props.countryName}</a></h4></ListGroupItem>
    );
  }
}

class TeamPossRow extends Component {

  

  render() {
    const link_team = "/team/" + this.props.abr;
    
    const images = importAll(require.context('../img/flags', false, /\.(png)$/));

    return (
      <ListGroupItem><img src={images['dummy.png']} alt={''} width={35} height={25}/><h4>Country Name<span className="pull-right">Possesion Value</span></h4></ListGroupItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamstats : state.teamstats,
    playerstats : state.playerstats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsTable);
