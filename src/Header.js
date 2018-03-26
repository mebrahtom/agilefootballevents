import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <header className="intro-header ttt">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <font color="tsigabu"><h2> 2018 World Cup Russia</h2></font>
                <font color="tomato"><span className="subheading">  2018 World Cup Russia From 14 June- 15 July</span></font>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
