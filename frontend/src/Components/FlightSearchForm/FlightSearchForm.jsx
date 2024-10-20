import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFlightSearchDetails, fetchFlightResults } from '../../redux/actions/flightSearchActions';

const FlightSearchForm = () => {
    const searchDetails = useSelector((state) => state.flightSearch);
    const flightResults = useSelector((state) => state.flightSearch.flightResults); // Get flight results
    const loading = useSelector((state) => state.flightSearch.loading); // Get loading state
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(searchDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to set search details
        dispatch(setFlightSearchDetails(formData));
        // Dispatch action to fetch flight results (mocked)
        dispatch(fetchFlightResults());
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <div className='col-md-6'>
                        <label htmlFor='departureAirport' className='form-label'>Departure Airport</label>
                        <input
                            type='text'
                            className='form-control'
                            id='departureAirport'
                            name='departureAirport'
                            value={formData.departureAirport}
                            onChange={handleChange}
                            placeholder='Enter departure airport'
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='destinationAirport' className='form-label'>Destination Airport</label>
                        <input
                            type='text'
                            className='form-control'
                            id='destinationAirport'
                            name='destinationAirport'
                            value={formData.destinationAirport}
                            onChange={handleChange}
                            placeholder='Enter destination airport'
                            required
                        />
                    </div>
                </div>

                <button type='submit' className='btn btn-primary'>Search Flights</button>
            </form>

            {loading ? (
                <div>Loading flights...</div>
            ) : (
                <div className='flight-results'>
                    <h3>Available Flights</h3>
                    <ul>
                        {flightResults.map((flight) => (
                            <li key={flight.id}>
                                <div>Airline: {flight.airline}</div>
                                <div>Departure: {flight.departureTime}</div>
                                <div>Arrival: {flight.arrivalTime}</div>
                                <div>Price: {flight.price}</div>
                                <div>Duration: {flight.duration}</div>
                                <div>Stops: {flight.stops}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FlightSearchForm;
