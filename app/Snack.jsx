import React, {PropTypes, Component} from 'react';
import {DragSource} from 'react-dnd';
import constants from './constants.js';

const snackSpec = {
    beginDrag(props) {
        return {
            name: props.name
        };
    },
    endDrag(props, monitor) {
        const dragItem = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult) {
            console.log(`You dropped ${dragItem.name} into ${dropResult.name}`);
        }
    }
};
let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Snack extends Component {
    render() {
        const {name, isDragging, connectDragSource} = this.props;
        const opacity = isDragging ? 0.4 : 1;
        const style = {
            opacity: opacity
        };
        return (
            connectDragSource(
                <div className='snack' style={style}>
                    {name}
                </div>
            )
        );
    }
}

Snack.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};
export default DragSource(constants.SNACK, snackSpec, collect)(Snack);