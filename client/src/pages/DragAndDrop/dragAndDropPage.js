import React, { Component } from "react";
import API from "../../utils/API";
// import NavBar from "./components/NavBar";
import Sidebar from "../../components/Sidebar";
import "./dragAndDropPage.css";
import DragDrop from "../../components/Draggable";

class DragDropPage extends Component {
  state = {
    questions: [],
    choice1: [],
    choices: []
    // QuesAnsArray:[]
  };

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
        console.log(res.data);

        res.data.map(item => (
          this.setState({
            questions: item.question,
            choice1: item.choice1,
            choices: [
              item.choice1, item.choice2, item.choice3
            ]

          })
        ));




        // this.setState({ questions: res.data });
      })
      .catch(err => console.log(err));
    //   =======================

  }

  // =====================


  render() {
    // console.log(this.state.questions)
    console.log(this.state.choices)

    return (
      <div className="DragDrop">
        <h6 className="text-center">Drag And Drop Page</h6>
        {/* <p>Hello</p> */}
        <div className="row">
          <div className="col-12 col-sm-2 cardDiv" >
            <Sidebar />
          </div>
          <div className="col-12 col-sm-10">
            <DragDrop />
            <div>This div is for question</div>
            <div>drop area</div>
            <div>for choices 1 componenet 3 times</div>
            <button className="btn btn-primary">Submit</button>
            <div>
              {/* {this.state.questions.map(item => (
                <div>
                  <h3 key={item._id}> {item.question}</h3>

                  <p key={item.choice1}>{item.choice1}</p>
                  <p key={item.choice2}>{item.choice2}</p>
                  <p key={item.choice3}> {item.choice3}</p>
                </div>
              ))}
              ; */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropPage;
