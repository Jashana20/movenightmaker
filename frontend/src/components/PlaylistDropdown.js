import React from 'react'

class PlaylistDropdown extends React.Component{
    render(){
        return(
                 <option >{this.props.playlist}</option>
        )
    }
}

export default PlaylistDropdown