import React, { Component } from 'react';
import Argentina from  '../TeamInformation/Argentina';
import Australia from  '../TeamInformation/Australia';
import Sweden from  '../TeamInformation/Sweden';
import Russia from  '../TeamInformation/Russia';
import Spain from  '../TeamInformation/Spain';

class TeamInformation extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
               <Spain />
                <Argentina />
                <Australia />
                <Sweden />
                 <Russia />

    </div>
    );
  }
}
export default TeamInformation;
