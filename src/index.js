import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'; 

const API_KEY = 'AIzaSyAP2osbuFyDqEve2FtcOhOSakUwk2Boiqg'; 

class App extends Component{
    
    constructor(props){
        super(props);
        
        this.state= {videos:[]};    

        YTSearch({key:API_KEY,term:'surfboards'} ,(videos)=>{
            this.setState({videos});
        });
    }; 

    render(){
        return( <div>
            <SearchForm/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }
}

ReactDOM.render(<App/>,document.querySelector('.container')) ;