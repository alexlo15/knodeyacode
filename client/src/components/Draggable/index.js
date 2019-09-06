import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import React from "react";
// import ReactDOM from "react-dom";
// import DragDropPage from '../../pages/DragAndDrop/dragAndDropPage';

class DragDrop extends React.Component {

  render() {
    return (
      <div>
        <div>
          <DragDropContainer targetKey="foo" >
            <div>Drag Me!</div>
          </DragDropContainer>
          <DragDropContainer targetKey="foo" >
            <div>Drag Me!</div>
          </DragDropContainer>
          <DragDropContainer targetKey="foo" >
            <div>Drag Me!</div>
          </DragDropContainer>
        </div>

        <br></br>
        <div>
          <DropTarget targetKey="foo" >
            <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
          </DropTarget>
        </div>
      </div>
    )
  };



}

export default DragDrop;