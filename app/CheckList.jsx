import React,{Component} from 'react';
class CheckList extends Component{
render(){
    let tasks=this.props.tasks.map((task,key)=>(
        <li className="checklist_task" key={key}>
            <input type="checkbox" defaultChecked={task.done}/>
            {task.name}
            <a href="#" className="checklist_task--remove"></a>
        </li>
    ));
    return (
        <div className="checklist">
            <ul>{tasks}</ul>
        </div>
    );

}
}

export default CheckList;