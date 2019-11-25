import React from 'react'
import NewsItems from './news_list_items'

const newsList=(props)=>{

    const items=props.news.map((item)=>{
        return(
            
            <NewsItems key={item.id} item={item}></NewsItems>
            
        )
    })
    return(
        <div>   
        
        <div className='newslist'>{items}</div>
        </div>

    )
    
}

export default newsList;
