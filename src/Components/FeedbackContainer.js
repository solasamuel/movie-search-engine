import React from 'react'
import Item from './Item'
import './FeedbackContainer.css'

class FeedbackContainer extends React.Component {
    render = () => {
        const wait = 1000;
        const maxNumOfItems = 5;
        const items = [];
        let numOfItems = this.props.index.length;

        if (numOfItems > maxNumOfItems) {
            numOfItems = maxNumOfItems;
        }

        for (var i = 0; i < numOfItems; i++) {
            items.push(
                <Item 
                key={i}
                identifier={i}
                index={this.props.index}
                wait= {wait} />
            );
        }

        return (
            <div className="feedback-container" data-testid="feedback-container">
                {items}
            </div>
        );
    }
}

export default FeedbackContainer

