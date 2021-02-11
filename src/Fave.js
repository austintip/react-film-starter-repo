import React, { useState, useEffect } from 'react'

function Fave(props) {
    // const [isFave, setIsFave] = useState(false)
    const [icon, setIcon] = useState('add_to_queue')

    // useEffect(() => {
    //     setIcon(isFave ? 'remove_from_queue' : 'add_to_queue')
    // }, [isFave])

    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling the click!')
        props.onFaveToggle()
        // setIsFave(!isFave)
    }



    return (
        <div>
            <div className={`film-row-fave ${props.isFave}`} onClick={handleClick}>
                <p className="material-icons">{icon}</p>
            </div>
        </div>
    )
}



export default Fave