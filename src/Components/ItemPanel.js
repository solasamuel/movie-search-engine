import React, { Component } from 'react'
import './ItemPanel.scss'

export default class ItemPanel extends Component {
    render() {
        let index = this.props.index;
        let title = index[this.props.identifier]["title"];
        return (
            <div className="item-panel" data-testid="item-panel">
                <h3>{title}</h3>
            </div>
        )
    }
}