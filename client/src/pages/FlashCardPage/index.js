import React, { Component } from "react";
import Img from "../../components/flashcardsURL/Img";
import ImgContainer from "../../components/flashcardsURL/ImgContainer";
import FlashCard from "../../components/flashcardsURL/FlashCardArea";
import API from "../../utils/API";
import "../../components/shared/Navigation/style.css";
import Sidebar from "../../components/shared/Navigation"

let topicSelected = [];

class FlashCardPage extends Component {
  state = {
    images: [
      {
        id: 1,
        name: "HTML",
        src: "./image/html.png",
        category: "notDragged"
      },
      {
        id: 2,
        name: "CSS",
        src: "./image/css.png",
        category: "notDragged"
      },
      {
        id: 3,
        name: "JS",
        src: "./image/js.png",
        category: "notDragged"
      }
    ],
    questionArray: [],
    userName: "5d75870a1c73633b04e65267"
    };

  // This are drag and drop functionality
  // ====================================================
  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, id) => {
    console.log("dragStart : " + id);
    ev.dataTransfer.setData("id", id);
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    topicSelected.push(id);
    let images = this.state.images.filter(img => {
      if (img.name === id) {
        img.category = cat;
      }
      return img;
    });

    this.setState({
      ...this.state,
      images
    });
    console.log("Dropped : " + id);
  };
  // ===========================================================

  onSubmitClick = () => {
    // alert('click attached');
    console.log(topicSelected);
    if (topicSelected.length > 0) {
      API.searchQuestions(topicSelected)
        .then(res => {
          console.log(res.data);
          this.setState({
            questionArray: res.data
          });
        })
        .catch(err => console.log(err));
    }

  
    if(topicSelected === "CSS"){
      console.log("went thru")
      const studying = {
        flashcardCSS: true,
        flashcardHTML: false,
        flashcardJS: true
      }

      API.updateIfStudiedTopic(this.state.userName, studying)
      .then(res => {
        console.log(res.data);
      }).catch(err => console.log(err));
    }
  
  };

  render() {
    console.log(topicSelected);
    console.log(topicSelected === "CSS")
    var images = {
      notDragged: [],
      dragged: []
    };

    this.state.images.forEach(img => {
      images[img.category].push(
        <Img
          key={img.id}
          src={img.src}
          alt={img.name}
          draggable
          onDragStart={e => this.onDragStart(e, img.name)}
        >
          {img.name}
        </Img>
      );
    });

    return (
      <div id="Flashpagebox">


      
        <Sidebar />

        <div className="Flashpage container">

          <div className="row">
            {/* <div className="col-12 col-md-2"> */}

            {/* </div> */}

            {/* <div className="col-12 col-md-2">
          <p>poop</p>
          </div> */}

            <div className="col-12 col-md-10">

              {this.state.questionArray.length > 0
                ? <FlashCard questionArray={this.state.questionArray} />
                : <ImgContainer
                  onDrop={this.onDrop}
                  onDragOver={this.onDragOver}
                  onSubmitClick={this.onSubmitClick}
                  imagesNotDragged={images.notDragged}
                  imagesDragged={images.dragged}
                />
              }

            </div>

          </div>

        </div>
        </div>
        );
}
}
 
export default FlashCardPage;
