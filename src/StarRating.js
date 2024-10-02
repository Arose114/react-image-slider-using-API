import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './index.css'

const StarRating = ({ noOfStars = 4 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)

    }

    function handleMouseHover(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
        setHover(rating) 

    }

    return (
        <div>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1

                    return (
                        <FaStar
                        className={index <= (hover || rating) ? 'active': 'inactive'}
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseHover(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            
                            size={40}

                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating