import React from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "../common-components/trainCard/TrainCard";
function Train() {
  return (
    <div className='common-container'>
       <div className='flight-info'>
        <Dropdown className='choose-way-container'>
          <span>Trip Type</span>
          <Dropdown.Toggle
            variant="success" id="dropdown-basic">
            choose way
          </Dropdown.Toggle>
          <label>Choose a car:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <Dropdown.Menu>
            <Dropdown.Item >One Way</Dropdown.Item>
            <Dropdown.Item >Two Way</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className='flight-input-section'>
          <div className='dest-from'>
            <p>From</p>
            <input type='text' placeholder='Mumbai' />
          </div>
          <div className='dest-to'>
            <p>To</p>
            <input type='text' placeholder='Delhi' />
          </div>
          <div className='depart'>
            <p>Departure</p>
            <input type='date' />
          </div>
          <div className="return">
            <p>Return</p>
            <input type='date' />
          </div>
        </div>
      </div>
      <div className='search-ticket-container'>
        <div className='search'>
          <Button variant="outline-primary">Search</Button>
        </div>
      </div>
      <Card/>
    </div>
  );
}

export default Train;
