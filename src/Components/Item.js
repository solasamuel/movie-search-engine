import React, { Component } from 'react'
import ItemPanel from './ItemPanel'
import './Item.css'

export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <ItemPanel 
                    identifier={this.props.identifier}
                    index={this.props.index} />
            </div>
        )
    }
}
