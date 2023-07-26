import React from 'react';
import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

function Card(props) {
  // const {from,to} = props;
  console.log(props)
  return (
    <>
    <div className='card-container'>
        <p><b>Avilable Tickets</b></p>
        <div className='card'>
            <div className='card-details-section'>
             <div className='card-detail'>
             <div className='hotel-cnt'>
               <p className='hotel-name'>Hotel</p>
                <b>Boshan Hotels</b>
                <p className='city-name'>City</p>
                <b>Goa</b>
                <p className='rating'>Rating</p>
                <b>7/10</b>
               </div>
               <div className='check-cnt'>
               <p className='check-in'>CHECK-IN</p>
                <b>2023-2-15</b>
                <p className='check-out'>CHECK-OUT</p>
                <b>2023-2-15</b>
               </div>
               <div className='price-cnt'>
               <p className='price'>Price</p>
                <b>4000 Per Night</b>
                <p className='room'>Room</p>
                <b>Double</b>
                <p className='guest'>Guest</p>
                <b>2</b>
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
// Card.defaultProps = {
//   props: {},
// };

// Card.propTypes = {
//   props: PropTypes.objectOf(PropTypes.any),
//   from : PropTypes.string,
//   to: PropTypes.string

// };


export default Card;
