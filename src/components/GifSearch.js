import React from 'react'

class GifSearch extends React.Component{
state = {
    input: ""
}

handleSubmit = event => {
    event.preventDefault()
    this.props.setQuery(this.state.input)
}

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="textfield" name="query" id="query" value={this.state.input} onChange={e => this.setState({
                    input: e.target.value
                })
                }/>
                <input type="submit" />
            </form>
        )
    }
}
export default GifSearch