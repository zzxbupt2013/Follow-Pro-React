import React, {Component, PropTypes} from 'react';

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist_task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist_task--remove"></a>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit enter to add a task"/>
            </div>
        );

    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};
export default CheckList;