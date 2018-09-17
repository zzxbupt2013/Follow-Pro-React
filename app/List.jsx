import React, {Component} from 'react';
import Card from './Card.jsx';

class List extends Component {
    render() {
        var cards = this.props.cards.map((card,key) => {
            return <Card id={card.id} title={card.title} description={card.description} tasks={card.tasks} key={key}/>
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;