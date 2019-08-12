import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'
// the App component should render out the GifListContainer component 

class App extends React.Component{
  state = {
    gifs: [],
    query: ""
  }

  setQuery = query => {
    this.setState({
      query: query
    })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(resp => this.setState({gifs: resp.data})) 
  }

  // getGifs = () => {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json).then(data => this.setState({gifs: data}))
  // }

  // componentDidUpdate(previousProps, previousState){
  //   if(previousProps.query !== this.props.query){
  //     fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(resp => this.setState({gifs: resp.data}))
  //   }
  // }

render(){
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifSearch setQuery={this.setQuery}/>
        < GifListContainer gifs={this.state.gifs}/>
    </div>
  )
}}

export default App
