import React, {Component} from 'react';
import {render} from 'react-dom';
import DragContainer from './DragContainer.jsx';
class Drag extends Component {
    render(){
        return (
            <DragContainer/>
        );
    }
}
render(<Drag/>,document.getElementById('drag'));