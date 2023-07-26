import React, { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from "../common-components/flightCard/FlightCard";
import { getFlightDetails } from '../../services/flight';
// import { useForm } from "react-hook-form";


function Flight() {
  useEffect(()=>{
    getFlightDetails().then(data => console.log(data));
    console.log("new api")
  },[]);
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (

    <div className='common-container'>
      <div className='flight-info'>
        {/* <Dropdown className='choose-way-container'>
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
        </Dropdown> */}
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
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("from")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <select {...register("to")}>
        <option value="Mumbai">female</option>
        <option value="Delhi">male</option>
        <option value="Kolkata">other</option>
      </select>
      <input type="date" {...register("departure")} />
      <input type="date" {...register("return")} />
      <input type="submit" />
    </form> */}
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

export default Flight;
