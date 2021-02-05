import React, { Component } from 'react'

class Fave extends Component{

    handleClick = (e) => {
        console.log('Handling the click!')
    }

    render(){
        return(
            <div>
                <div className="filme-row-fav add_to_queue">
                    <p className="material-icons">add_to_queue</p>
                </div>
            </div>
        )
    }
}


export default Fave