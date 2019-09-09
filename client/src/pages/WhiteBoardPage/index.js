import React from "react";
import Sidebar from '../../components/shared/Navigation';
import { SketchField, Tools } from 'react-sketch';
import "../../components/shared/Navigation/style.css";

class WhiteBoardPage extends React.Component {


    render() {
        return (
            <div id="fatherdiv">
                <div id="content">
                    <button id="reset" onClick={()=> window.location.reload(false)}>Reset</button>
                </div>

                <div id="whiteboard">
                    <SketchField
                        tool={Tools.Pencil}
                        lineColor='black'
                        lineWidth={3} />
                </div>
            </div>)
    }
}

export default WhiteBoardPage;