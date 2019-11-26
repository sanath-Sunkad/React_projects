import React from 'react';



const AlbumList = (props) => {



    const showList = ({albumList}) =>{

       if(albumList){

            return albumList.map((item,index)=>{

                return (
                    
                    <div>
                    <img key={index} alt="" src={`/images/albums/${item.cover}.jpg`}></img>
                    
                    </div>
                    

                )

            })

       }

    }



    return(

         <div className="albums_list">

            {showList(props)}

        </div>

    )





}



export default AlbumList;