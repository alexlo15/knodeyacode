import React, { Component } from "react";
import API from "../../utils/API";
// import NavBar from "./components/NavBar";

import Sidebar from "../../components/shared/Sidebar";
import Choice from "../../components/dragdropURL/Choice";
import Question from "../../components/dragdropURL/Question";
import Result from "../../components/dragdropURL/Result";

import "../../components/shared/Sidebar/style.css";
// import "./style.css";

let quesAnsArray = [];

class DragDropPage extends Component {
  state = {
    QuesAnsArray: [],
    buttonClicked: false,
    questionCount: 0,
    score: 0,
    userSelected: "",
    gameFinished: false
    // choices: {
    //   notDragged: [],
    //   dragged: []
    // }
  };

  // =============Drag And Drop Code ========================

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, choice) => {
    console.log("dragStart : " + choice);
    ev.dataTransfer.setData("choice", choice);
  };

  onDrop = (ev, cat) => {
    let choice = ev.dataTransfer.getData("choice");
    let choices = this.state.QuesAnsArray[this.state.questionCount].choices.map(
      item => {
        item.category = "dragged";
        if (item.choice !== choice) {
          item.category = "notDragged";
        }

        return item;
      }
    );

    this.setState({
      ...this.state,
      userSelected: choice,
      choices
    });
  };

  generateScore = choice => {
    let rightAnswer = this.state.QuesAnsArray[
      this.state.questionCount
    ].choice1.trim();

    if (choice.trim() === rightAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    // console.log('scroe from fun: '+this.state.score);
  };

  // ==================================

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
        res.data.map(item =>
          quesAnsArray.push({
            questions: item.question,
            choice1: item.choice1,
            choices: [
              {
                choice: item.choice1,
                category: "notDragged"
              },
              {
                choice: item.choice2,
                category: "notDragged"
              },
              {
                choice: item.choice3,
                category: "notDragged"
              }
            ]
          })
        );
        this.setState({
          QuesAnsArray: this.randomize(quesAnsArray)
        });
      })
      .catch(err => console.log(err));
  };

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  };

  onSubmitClick = () => {
    if (this.state.questionCount < 9) {
      this.generateScore(this.state.userSelected);
      this.setState({
        buttonClicked: true,
        questionCount: this.state.questionCount + 1
      });
      console.log(this.state.questionCount);
    } else {
      this.saveScore();
      this.setState({
        gameFinished: true
      });
    }
  };

  saveScore = () => {
    console.log("in save score fun");
    API.saveScore({
      userName: "AAA",
      email: "aaa@gmail.com",
      score: this.state.score
    })
      .then(res => console.log("score saved"))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.QuesAnsArray);
    var choices = {
      notDragged: [],
      dragged: []
    };
    if (quesAnsArray.length > 0 && this.state.questionCount < 10) {
      if (this.state.buttonClicked === false) {
        // console.log("in button click false");

        quesAnsArray[this.state.questionCount].choices.forEach(item => {
          choices[item.category].push(
            <Choice
              key={item.choice}
              choice={item.choice}
              draggable
              onDragStart={e => this.onDragStart(e, item.choice)}
            >
              {item.choice}
            </Choice>
          );
        });
      } else if (this.state.buttonClicked === true) {
        // console.log("in button click true");
        quesAnsArray[this.state.questionCount].choices.forEach(item => {
          choices[item.category].push(
            <Choice
              key={item.choice}
              choice={item.choice}
              draggable
              onDragStart={e => this.onDragStart(e, item.choice)}
            >
              {item.choice}
            </Choice>
          );
        });
        this.setState({
          choices: choices,
          buttonClicked: false
        });
        // this.setState({
        //   buttonClicked: false
        // });
      }

      var QuestionComp = (
        <Question
          questions={
            this.state.QuesAnsArray[this.state.questionCount].questions
          }
        />
      );

      // questionCount++;
    } else {
      // console.log("data not");
    }

    return (
      <div id="DragDropPage">
        <div className="DragDrop">
          <h2
            id="pageHeading"
            className={this.state.gameFinished === true ? "hide" : "show"}
          >
            Drag And Drop Quiz
          </h2>
          <div className="row">
            <div className="col-12 col-sm-2 cardDiv">
              <h2
                id="score"
                className={this.state.gameFinished === false ? "show" : "hide"}
              >
                Score : <span>{this.state.score}</span>
              </h2>
              <Sidebar />
            </div>

            <div className="col-12 col-sm-10">
              <div
                id="questionGameContainer"
                className={this.state.gameFinished === false ? "show" : "hide"}
              >
                <div id="questionDiv">{QuestionComp}</div>
                <div
                  id="dragDropArea"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "dragged")}
                >
                  {choices.dragged}
                </div>
                <div
                  id="dragComponentsDiv"
                  onDrop={e => this.onDrop(e, "notDragged")}
                  onDragOver={e => this.onDragOver(e)}
                >
                  {choices.notDragged}
                </div>
              </div>

              <div className="row" id="btnDiv">
                <div className="col-12">
                  {this.state.gameFinished === false ? (
                    <button
                      className="btn btn-primary"
                      onClick={this.onSubmitClick}
                    >
                      Next
                    </button>
                  ) : (
                    <Result score={this.state.score} />
                  )
                  // : <button className="btn btn-primary" onClick={this.onResultClick}>
                  //   <Link to="/Result" className="resultLink" >Result</Link>
                  //   </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropPage;
