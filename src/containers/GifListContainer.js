import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
    render(){
        return(
            <div>
                
                {this.props.gifs.map(gif => <GifList gif={gif}/>)}
                
               
            </div>
        )

    }
}
export default GifListContainer