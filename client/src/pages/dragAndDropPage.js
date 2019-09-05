import React from "react";
import API from "../utils/API";
// import NavBar from "./components/NavBar";
// import Sidebar from "./components/Sidebar/sidebarIndex";

class DragDropPage extends React.Component {

    state={
        questions:[]
    }

    componentDidMount(){
        this.loadQuestions();
    }


    
  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
          console.log(res.data);
          this.setState({ questions: res.data })
        })
      .catch(err => console.log(err));
  };

    render() {
        return (
            <div className="DragDrop">
               <h1>Drag And Drop Page</h1>
               <h3>Question componenet on the top</h3>
               <h3>Drop Area</h3>
               <h3>Threee Choices </h3>
              
               <div>
                   {this.state.questions.map(item => (
                       <div>
                      <h3 key={item._id}> {item.question}</h3>
                      
                        <p key= {item.choice1}>{item.choice1}</p>
                        <p key= {item.choice2}>{item.choice2}</p>
                        <p key= {item.choice3}> {item.choice3}</p>
                     </div>
                   ))};
               </div>
              
            </div>
        );
    }
}

export default DragDropPage;