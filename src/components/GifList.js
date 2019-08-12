import React from 'react'

class GifList extends React.Component{
    render(){
        {console.log(this.props.gif)}
        return(
           
            <img src={this.props.gif.images.original.url}/>
        )
    }
}
export default GifList