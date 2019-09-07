import React, { Component } from "react";
import API from "../../utils/API";
// import NavBar from "./components/NavBar";
import Sidebar from "../../components/shared/Sidebar";
import Choice from "../../components/dragdropURL/Choice";
import Question from "../../components/dragdropURL/Question";
import "./style.css";

let quesAnsArray = [];

class DragDropPage extends Component {
  state = {
    
    QuesAnsArray: [],
    buttonClicked: false,
    questionCount: 0,
    score:0,
    userSelected:""
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
    let choices = this.state.QuesAnsArray[this.state.questionCount].choices.map(item => {
      item.category = "dragged";
      if (item.choice !== choice) {
        item.category = "notDragged";
      }

      
      return item;
    });
    // this.generateScore(choice,this.state.questionCount)
    // if(this.state.quesAnsArray[this.state.questionCount].choices.map(item=>{

    // })===choice){
    //   this.setState({
    //     score:this.state.score+1
    //   })
    // }
    // this.setState({
    //   userSelected:choice
    // })
    
    this.setState({
      ...this.state,
      userSelected:choice,
      choices,
    });
    console.log("Dropped : " + choice);
    console.log('choice from drop : ' + this.state.userSelected)
    // this.generateScore(choice,this.state.questionCount);
  };

  generateScore=(choice)=>{
    let rightAnswer = this.state.QuesAnsArray[this.state.questionCount].choice1.trim();
    console.log('from fun choice : ' +choice)
   
    if(choice.trim() === rightAnswer ){
      this.setState({
              score : this.state.score + 1
            })

    }
    console.log('scroe from fun: '+this.state.score);
    
  }

  // ==================================

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
       
        res.data.map(
          item =>
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
          QuesAnsArray: quesAnsArray
        });
      })
      .catch(err => console.log(err));
  };

  onSubmitClick = () => {
    console.log(this.state.userSelected)
    this.generateScore(this.state.userSelected);
    this.setState({
      buttonClicked: true,
      questionCount: this.state.questionCount + 1
    });
    console.log(this.state.questionCount);
  };
  render() {
    console.log(this.state.QuesAnsArray);
    var choices = {
      notDragged: [],
      dragged: []
    };
    if (quesAnsArray.length > 0) {
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
            choices:choices,
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
      console.log("data not");
    }

    return (
      <div className="DragDrop">
        <h6 className="text-center">Drag And Drop Page</h6>
        <div className="row">
          <div className="col-12 col-sm-2 cardDiv">
          <h2>Score : <span>{this.state.score}</span></h2>
            <Sidebar />
          </div>
          
          <div className="col-12 col-sm-10">
            <div id="questionDiv">
              {QuestionComp}
            </div>
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
            <button className="btn btn-primary" onClick={this.onSubmitClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropPage;
