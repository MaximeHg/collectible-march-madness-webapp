import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import './Bracket.css';

export default class BracketEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item1Classes:"",
      item2Classes:""
    }

    this.chooseTeam1 = this.chooseTeam1.bind(this);
    this.chooseTeam2 = this.chooseTeam2.bind(this);
    this.resetResults = this.resetResults.bind(this);
  }

  resetResults() {
    this.props.result(14,-1)
    if(this.props.game % 9 <= 2) {
      this.props.result(8, -1)
      this.props.result(12, -1)
    } else if (this.props.game % 9 <= 4) {
      this.props.result(9, -1)
      this.props.result(12, -1)
    } else if (this.props.game % 9 <= 6) {
      this.props.result(10, -1)
      this.props.result(13, -1)
    } else {
      this.props.result(11, -1)
      this.props.result(13, -1)
    }
  }

  chooseTeam1() {
    if(!this.props.view) {
      if (!this.props.finalFour) this.resetResults()
      this.props.result(this.props.game-1, this.props.team1-1)
      let item1Classes = "font-weight-bold"
      let item2Classes = ""
      this.setState({item1Classes})
      this.setState({item2Classes})
    }
  }

  chooseTeam2() {
    if(!this.props.view) {
      if (!this.props.finalFour) this.resetResults()
      this.props.result(this.props.game-1, this.props.team2-1)
      let item2Classes = "font-weight-bold"
      let item1Classes = ""
      this.setState({item2Classes})
      this.setState({item1Classes})
    }
  }

  render() {
    return(
      <div>
        <div>
          <ListGroup variant="flush">
            <ListGroup.Item className={this.state.item1Classes+" entry"} onClick={this.chooseTeam1}>
              {this.props.teams[this.props.team1-1]}
            </ListGroup.Item>
            <ListGroup.Item className={this.state.item2Classes+" entry"} onClick={this.chooseTeam2}>
              {this.props.teams[this.props.team2-1]}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <p className="small">{this.props.date}</p>
        </div>
      </div>
    );
  }
}