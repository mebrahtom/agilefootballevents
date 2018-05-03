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
   const playerstats = renderPlayerGoalTable(this.props.playerstats);
   const teamstats = renderTeamGoalTable(this.props.teamstats);
    return(
      <div>
        <h3>Player Statistics</h3>
        <h4 className="col-sm-6">Top Scores</h4>
        <h4 className="col-md-6">Assists</h4>
          <ListGroup className="col-md-6">
            { playerstats }
          </ListGroup>
          <ListGroup className="col-md-6">
            <ListGroupItem><h4>Name 1 <span className="pull-right score-margin">38</span></h4>Country 1</ListGroupItem>
            <ListGroupItem><h4>Name 1 <span className="pull-right score-margin">38</span></h4>Country 2</ListGroupItem>
            <ListGroupItem><h4>Name 1 <span className="pull-right score-margin">38</span></h4>Country 3</ListGroupItem>
            <ListGroupItem><h4>Name 1 <span className="pull-right score-margin">38</span></h4>Country 1</ListGroupItem>
            <ListGroupItem><h4>Name 1 <span className="pull-right score-margin">38</span></h4>Country 2</ListGroupItem>
          </ListGroup>
        
        <h3>Team Statistics</h3>
        <h4 className="col-sm-6">Goals Scored</h4>
        <h4 className="col-md-6">Possesion</h4>     
        <ListGroup className="col-md-6">
          { teamstats }
        </ListGroup>

        <ListGroup className="col-md-6">
          <ListGroupItem header="Name 1">Country 1</ListGroupItem>
          <ListGroupItem header="Name 2">Country 2</ListGroupItem>
          <ListGroupItem header="Name 3">Country 3</ListGroupItem>
          <ListGroupItem header="Name 2">Country 2</ListGroupItem>
          <ListGroupItem header="Name 3">Country 3</ListGroupItem>
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

function renderTeamGoalTable(stats) {
  var allRows = [];
 for(var i = 0; i < stats.length; i++){
    if(i < 5){                            //Very ugly code, how to fix?
      allRows.push(<TeamGoalRow key={i}      
        goals={stats[i].goals}
        countryName={stats[i].countryName}/>);
    }
  }

  return allRows;
}

// Exported to another class
export function renderStatistics(group, groupresults) {

console.log(group);

  if(group.length === 0){
    return <p>No group yet</p>
  }
  return (
    <p> test </p>

  );
}

class PlayerGoalRow extends Component {
  render() {
    const images = importAll(require.context('../img/profiles', false, /\.(png)$/));

    return (
      <ListGroupItem><img src={images[this.props.image+'.png']} alt={''} width={35} height={25}/><h4>{this.props.name}<span className="pull-right score-margin">{this.props.goals}</span></h4>{this.props.countryName}</ListGroupItem>
    );
  }
}

class TeamGoalRow extends Component {
  render() {
    const images = importAll(require.context('../img/flags', false, /\.(png)$/));

    return (
      <ListGroupItem><img src={images[this.props.countryName+'.png']} alt={''} width={35} height={25}/><h4>{this.props.countryName}<span className="pull-right">{this.props.goals}</span></h4></ListGroupItem>
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
