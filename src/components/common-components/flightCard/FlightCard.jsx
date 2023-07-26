import React from 'react';
import { Button } from 'react-bootstrap';

function Card() {
  return (
    <>
    <div className='card-container'>
        <p><b>Avilable Tickets</b></p>
        <div className='card'>
            <div className='card-details-section'>
             <div className='card-detail'>
             <div className='hotel-cnt'>
               <p className='hotel-name'>From</p>
                <b>Delhi</b>
                <p className='city-name'>To</p>
                <b>Goa</b>
                <p className='rating'>AirLine</p>
                <b>Vistara</b>
               </div>
               <div className='check-cnt'>
               <p className='check-in'>Departure</p>
                <b>2023-2-15</b>
                <p className='check-out'>Return</p>
                <b>2023-2-15</b>
               </div>
               <div className='price-cnt'>
               <p className='price'>Price</p>
                <b>4000 Per Night</b>
                <p className='room'>Via</p>
                <b>Kolkata</b>
                <p className='guest'>Duration</p>
                <b>2hour</b>
               </div>
             </div>
               <div className='book-btn-container'>
                <Button variant="outline-primary"> Book</Button>
               </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Card;
