// import library to help create a component
import React,{ Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create a component
class Albumlist extends Component {
    state = { albums:[]};

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums : response.data}));
    }
    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
};

// export to all components
export default Albumlist;



