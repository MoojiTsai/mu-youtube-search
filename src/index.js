import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAP2osbuFyDqEve2FtcOhOSakUwk2Boiqg';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    };
    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const VideoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return (<div>
            <SearchForm onSearchChange={VideoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));