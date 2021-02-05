import React, { Component } from 'react'

class Fave extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFave: false
        }
    }
    handleClick = (e) => {
        console.log('Handling the click!')
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave})
    }

    render(){

        return(
            <div>
                <div className={`film-row-fave ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'}`} onClick={this.handleClick}>
                    <p className="material-icons">add_to_queue</p>
                </div>
            </div>
        )
    }
}


export default Fave