import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import CardComponent from './CardComponent';

function RecentProperties(props) {
    return (
        <div style={{width:'100%', height:'100vh'}} className="text-center">
            <p className="">Check out </p>   
            <h4> Properties</h4>
            <p> Check out some of our latest properties.</p>

            <Row>
               <Col>
                <CardComponent 
                    image="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    title="Guaranteed modern home "
                    value ="#4,000,000"
                    location= "Drive street apapa lagos state"
                    description = " Bedroom bathroom "
                    status ="FOR RENT"

                />

               </Col>

               <Col>
                <CardComponent 
                    image="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    title="Guaranteed modern home "
                    value ="#4,000,000"
                    location= "Drive street apapa lagos state"
                    description = " Bedroom bathroom  "
                    status ="FOR RENT"


                />

               </Col>
               

               <Col>
                <CardComponent 
                    image="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    title="Guaranteed modern home "
                    value ="#4,000,000"
                    location= "Drive street apapa lagos state"
                    description = " Bedroom bathroom  "
                    status ="FOR RENT"
                    date_added = "June 20 2020"


                />

               </Col>
         
            </Row>
        </div>
    );
}

export default RecentProperties;