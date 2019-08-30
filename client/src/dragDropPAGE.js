import React from "react";
import NavBar from "./components/NavBar";
import Test from "./components/test"


class DragDropPage extends React.Component {

    render() {
        return (
            <div className="DragDrop">
                <NavBar />
                <Test />
            </div>
        );
    }
}

export default DragDropPage;