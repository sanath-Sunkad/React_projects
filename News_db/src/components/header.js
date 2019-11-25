import React ,{Component} from 'react';


class Header extends Component{


    constructor(props){
        super(props);

        this.state={
            keywords:''
        }

    }
    

    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
        console.log(this.props)
    }
    render(){
        
        return(
            <header>
                <div className='logo'
                onClick={()=>console.log('clicked')}
                >Bengaluru Times</div>
                <input
                onChange={this.inputChange.bind(this)}
                ></input>
                
            
                
            </header>
        )
    }

}

export default Header;