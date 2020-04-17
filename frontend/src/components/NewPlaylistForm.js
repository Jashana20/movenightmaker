import React from 'react'


class NewPlaylistForm extends React.Component{
    render(){
        return (
            <div>
                <h3>Create New Playlist:</h3>
                    Name: <br />
                    <input type="text" value={this.props.name} onChange={this.props.handlePlaylistForm} /> 
                    <button onClick={this.props.createPlaylists}>done</button>
            </div>
        )
    }
}

export default NewPlaylistForm