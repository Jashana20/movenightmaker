import React from 'react'
import PlaylistDropdown from './PlaylistDropdown'
import NewPlaylistForm from './NewPlaylistForm'


class PlaylistList extends React.Component{
    render(){
        return (
            <div>     
                <select>
                {this.props.playlists.map((playlist, i) => <PlaylistDropdown playlist={playlist} 
                addToPlaylist={this.props.addToPlaylist} key={i}/>)}
                </select>
                <NewPlaylistForm 
                name={this.props.name} 
                handlePlaylistForm={this.props.handlePlaylistForm}
                createPlaylists={this.props.createPlaylists}
                />
            </div>
        )
    }
}

export default PlaylistList