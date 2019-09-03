import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar/sidebarIndex";

class DragDropPage extends React.Component {

    render() {
        return (
            <div className="DragDrop">
                <NavBar />
                <Sidebar />
            </div>
        );
    }
}

export default DragDropPage;