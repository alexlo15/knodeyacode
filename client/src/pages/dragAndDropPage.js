import React from "react";
// import NavBar from "./components/NavBar";
import Sidebar from "../components/Sidebar";

class DragDropPage extends React.Component {

    render() {
        return (
            <div className="DragDrop">
               <h1>Drag And Drop Page</h1>

            <Sidebar />
            </div>
        );
    }
}

export default DragDropPage;