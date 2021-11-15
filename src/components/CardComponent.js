import React from 'react'
import './Card.css'
const  CardComponent = (props) =>{
    return (
        <div className="card-container">
            <div className="image-container">

                <img className="card-image" src={props.image} alt={"image"} />
                <div className="card-thumb-top">
                    <p>featured</p>
                    <p>featured</p>
                </div>

                <div className="card-thumb-bottom">   
                    <p> bottom </p>
                    <p className="dark-btn"> {props.status} </p>
                </div>

            </div>

            <div className="card-body"> 
                <h3 className="card-heading"> {props.title}</h3>
                <p className="card-location"> {props.location}</p>
                <p className="card-date-added"> {props.date_added}</p>

                <p className="card-description"> {props.description}</p>

            </div>
        </div>
    )
}

export default CardComponent
