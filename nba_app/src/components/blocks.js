import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal'; // REACT REVEAL
import 'animate.css/animate.css'; //  REACT REVEAL
import { delay } from 'q';

const generateBlocks = ({blocks}) => {

    if (blocks) {
        return blocks.map((item) => {
            return (
                <Reveal key={item.id} effect="animated fadeInUp" delay >
                    <div className={`item `+item.type}>
                        <div className="veil"></div>
                        <div className="image" style={{background:'url(/images/blocks/'+item.image+')'}}>
                            
                
                        
                        </div>
                        <div className="title" style={{color:'red'}}>
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </div>
                    
                </Reveal>
            )
        })
    }
}

const Blocks = (props) => {
    return (
        <div className="home_block">
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;