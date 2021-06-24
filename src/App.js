import './App.css';
import React from 'react'
import SearchBar from './Components/SearchBar';
import FeedbackContainer from './Components/FeedbackContainer';
import Api from './Api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      index: '',
      status: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateIndex();
  }

  onKeywordChange = (newValue) => {
    this.setState({keyword : newValue});
  }

  updateIndex = () => {
    Api.getData(this.state.keyword)
    .then((response)=>{
      this.setState({index : response.data.movie_results});
      this.setState({status : response.status});

    })
    .catch((error) => {
        console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          onKeywordChange={this.onKeywordChange}
          handleSubmit={this.handleSubmit}
          />
        <FeedbackContainer 
          index={this.state.index}
        />
      </div>
    );
  }
}

export default App;