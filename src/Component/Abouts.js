import React from 'react'
import {useParams} from 'react-router-dom'

export const Location = () => {
    const {city, salonName } = useParams();
    return (
        <div>
        {salonName}
        {city}
            this is about
        </div>
    )
}
