import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Item from './Item'
import './FeedbackContainer.css'

class FeedbackContainer extends React.Component {
    render = () => {
        const wait = 1000;
        const maxNumOfItems = 7;
        const items = [];
        let numOfItems = this.props.index.length;

        if (numOfItems > maxNumOfItems) {
            numOfItems = maxNumOfItems;
        }

        for (var i = 0; i < numOfItems; i++) {
            items.push(
                <CSSTransition
                    key={i}
                    timeout={2250}
                    classNames="slide"
                >
                    <Item 
                    key={i}
                    identifier={i}
                    index={this.props.index}
                    wait= {wait} />
                </CSSTransition>
            );
        }

        return (
            <TransitionGroup className="feedback-container" data-testid="feedback-container">
                {items}
            </TransitionGroup>
        );
    }
}

export default FeedbackContainer

