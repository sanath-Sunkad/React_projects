import React from 'react'
import {Link} from 'react-router-dom'

 
const Artistslist =(props)=>{

    const list=({allArtists})=>{
        if(allArtists){
            
            return allArtists.map((item)=>{

                const style={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`


                }

                return(
                    <Link key={item.id} to={`/artists/${item.id}`} className="artists_item" style={style}>
                        <div>{item.name}</div>
                        
                    </Link>
                    
                )
            })

        }
        
    }


    return(
        <div className="artists_list">
            <h4>Brows the artists</h4>
            {list(props)}
        </div>
    )
}

export default Artistslist;