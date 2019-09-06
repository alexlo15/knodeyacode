import React from "react";

import "./style.css";

function ImgContainer(props) {
  return (
    <main>
      <div>
        <div
          id="dragComponentsDiv"
          onDrop={e => props.onDrop(e, "notDragged")}
          onDragOver={e => props.onDragOver(e)}
        >
          {props.imagesNotDragged}
        </div>
      </div>

      <div
        id="dropArea"
        onDragOver={e => props.onDragOver(e)}
        onDrop={e => props.onDrop(e, "dragged")}
      >
        {props.imagesDragged}
      </div>
      {/* <div>{this.state.questionArray.length > 0 && <FlashCard />}</div> */}
      <div id="btnDiv">
        <button
          className="btn btn-primary btnSubmit"
          onClick={props.onSubmitClick}
        >
          Submit
        </button>
      </div>
    </main>
  );
}

export default ImgContainer;
