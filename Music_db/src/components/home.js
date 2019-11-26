import React, {Component} from 'react'

import Banner from './banner'

import Artistslists from './artist_lists'

const URL_ARTIST='http://localhost:3004/artists' 

class Home extends Component {

    constructor(props){
        super(props);

        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST,{
            method:'GET'
        })
        .then(response=> response.json())
        .then(json =>{
            this.setState({
                artists:json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <Artistslists allArtists={this.state.artists} ></Artistslists>
            </div>
        )
    }
}

export default Home;