import React, { Component } from 'react';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetails from './VideoDetails';
import '../index.css';
const API = "AIzaSyCuEmF-9vCkEtuA07A0VzcIT0v0cvYJ7_0";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            videos: [],
            selectedVideos: null
        }
    }

    handleChange = (event) => {
        if(event.target.name === 'input1') {
            this.setState({text: event.target.value});
        }
        else {
            YTSearch({key: API, term: event.target.value}, (data) => {
                this.setState({videos: data,
                               selectedVideos: data[0]});
          });
        }
    }

    render() {
        return (
            <div>
                <div  className = 'div1'>
                    <input name = 'input1' value = {this.state.text} type = 'text' 
                            onChange = {this.handleChange} className = 'search-bar'/>
                    <button name = 'search' value = {this.state.text} 
                            onClick = {this.handleChange} className = 'search-button'>
                        Submit
                        </button>
                    <VideoDetails video = {this.state.selectedVideos} />
               </div>
               <VideoList videos = {this.state.videos} 
                          onVideoSelect = {onUserSelected => this.setState({selectedVideos: onUserSelected})} />
            </div>
        );
    }
}

export default SearchBar;