import React from 'react';


const NewsItems=({item})=>{
    return(
        <div className='news_item'>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
    )

}

export default NewsItems;