import React from 'react'
import './SearchBar.scss'

class SearchBar extends React.Component {
    render() {
        return (
            <div data-testid="search-bar">
                <form onSubmit={this.props.handleSubmit} role="search">
                    <label htmlFor="search">Search for stuff</label>
                    <input onChange={(event) => this.props.onKeywordChange(event.target.value)} id="search" type="search" placeholder="Search..." autoFocus required />
                    <button id="submit-button" type="submit">Go</button>    
                </form>
            </div>
        );
    }
}

export default SearchBar;