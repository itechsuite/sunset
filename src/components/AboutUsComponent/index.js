import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function AboutUsComponent(props) {
    return (
        <div className="col-md-4 col-sd-12 col-lg-6">
            <h3> <i className={props.icon}></i> {props.title} </h3>
            <p> {props.description} </p>
        </div>
    )
}

export default AboutUsComponent
