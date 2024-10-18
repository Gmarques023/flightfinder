import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h6>Fligh Finder</h6>
                </div>
                <div className='col-6'></div>
                <div className='col-2 d-flex'>
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <FontAwesomeIcon icon={faHeart} />
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        Log In
                    </div>
                    <FontAwesomeIcon icon={faBars} />    
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Link to="/route1" className='btn btn-primary'>Flights</Link>
                    <Link to="/route2" className='btn btn-secondary'>Hotels</Link>
                    <Link to="/route3" className='btn btn-success'>Car Hire</Link>
                </div>
                <div className='col-8'></div>
            </div>
        </div>
    )
}

export default Navbar