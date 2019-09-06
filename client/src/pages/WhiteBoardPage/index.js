import React from "react";
import Sidebar from '../../components/shared/Sidebar';
import { SketchField, Tools } from 'react-sketch';
import "./style.css";

class WhiteBoardPage extends React.Component {


    render() {
        return (
            <div id="fatherdiv">
                <Sidebar />
                <div id="content">
                    <button id="reset" onClick={()=> window.location.reload(false)}>Reset</button>
                </div>

                <div id="whiteboard">
                    <SketchField width='500px'
                        height='400px'
                        tool={Tools.Pencil}
                        backgroundColor="white"
                        lineColor='black'
                        lineWidth={3} />
                </div>
            </div>)
    }
}

export default WhiteBoardPage;