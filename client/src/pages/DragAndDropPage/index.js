import React, { Component } from "react";
import API from "../../utils/API";
// import NavBar from "./components/NavBar";
import Sidebar from "../../components/Sidebar";
import Choice from "../../components/Choice";
import "./dragAndDropPage.css";
// import DragDrop from "../../components/Draggable";
let   quesAnsArray=[];

class DragDropPage extends Component {
  state = {
  
    questions: [],
    choice1: [],
    choices: []
    // QuesAnsArray:[]
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
    let choices = this.state.choices.map(item => {
        item.category= "dragged"
      if (item.choice !== choice) {
        item.category = 'notDragged';
      }
      return item;
    });

    this.setState({
        ...this.state,
        choices
      });
      console.log("Dropped : " + choice);
    }

  // ==================================


  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
        console.log(res.data);

        
        res.data.map(item=>(
                this.setState({
                    questions:item.question,
                    choice1:item.choice1,
                    choices:[
                        {
                          choice:item.choice1,
                          category: "notDragged"
                        },
                        {
                          choice:item.choice2,
                          category: "notDragged"
                        },{
                          choice:item.choice3,
                          category: "notDragged"
                        }
                    ]

                })
        ));
       
      })
      .catch(err => console.log(err));
    }

   
  

  render() {
    // console.log(this.state.questions)
   console.log(this.state.choices)

  var choices = {
    notDragged: [],
    dragged: []
  };

  this.state.choices.forEach(item => {
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


    return (
      <div className="DragDrop">
        <h6 className="text-center">Drag And Drop Page</h6>
        {/* <p>Hello</p> */}
        <div className="row">
          <div className="col-12 col-sm-2 cardDiv" >
            <Sidebar />
          </div>
          <div className="col-12 col-sm-10">
            {/* <DragDrop /> */}
            <div>This div is for question</div>
            <div
                id="dropArea"
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
            <button className="btn btn-primary">Submit</button>

          </div>
        </div>
      </div>
    );
  }
}

export default DragDropPage;
