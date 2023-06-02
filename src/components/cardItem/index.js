import React from 'react'


const CardItem = ({itemname,image}) => {
    return (
        <div className="card width-card" >
            <img src={image} />
            <div className="card-body">
                <h5 className="card-title">{itemname}</h5>
            </div>
        </div>
    )
}

export default CardItem