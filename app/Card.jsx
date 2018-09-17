import React, {Component} from 'react';
import CheckList from './CheckList.jsx';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                <div className="card_details">{this.props.description}</div>
                <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
            </div>
        );
    }
}

export default Card;