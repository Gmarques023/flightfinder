import { Link } from 'react-router-dom';
import FlightSearchForm from '../../Components/FlightSearchForm/FlightSearchForm'


function Home() {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-6'>
                    <Link to="/flights" className='btn btn-primary'>Flights</Link>
                    <Link to="/hotels" className='btn btn-secondary'>Hotels</Link>
                    <Link to="/carHire" className='btn btn-success'>Car Hire</Link>
                </div>
                <div className='col-6'></div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h4>Millions of low-cost flights. One effortless search.</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <FlightSearchForm />
                </div>
            </div>
        </div>
    )
}

export default Home