import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import Albumlist from './albumLists'
const REQ_URL='http://localhost:3004/artists'

class Artist extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(response=>response.json())
        .then(json=>{

            console.log(json)

            this.setState({
                artist:json
            })
        })
    }
    
    
    render(){
        return(
            <div>
            <header ><Link to="/">Music db</Link></header><hr/>
            

            <div className="artist_bio">

                    <div className="avatar">

                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>

                    </div>

                    <div className="bio">

                        <h3>{this.state.artist.name}</h3>

                        <div className="bio_text">

                            {this.state.artist.bio}

                        </div>

                    </div>

                    <Albumlist key={this.state.artist.id} albumList={this.state.artist.albums}/>

            </div>

            </div>


        )

    }
}

export default Artist;