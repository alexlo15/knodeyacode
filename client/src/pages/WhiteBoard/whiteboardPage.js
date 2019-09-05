import React from "react";
import Sidebar from '../../components/Sidebar';
import { SketchField, Tools } from 'react-sketch';
import "./whiteboard.css";

class WhiteBoardPage extends React.Component {

    // const refreshPage() {
    //     window.location.reload(false);
    //   }
      


    render() {
        return (
            <div>
                <Sidebar />
                <div id="content">
                    
                    <button id="reset" onClick={()=> window.location.reload(false)}>Reset</button>
                </div>

                <div id="whiteboard">
                    <SketchField width='1122px'
                        height='768px'
                        tool={Tools.Pencil}
                        backgroundColor="white"
                        lineColor='black'
                        lineWidth={3} />
                </div>
            </div>)
    }
}

export default WhiteBoardPage;