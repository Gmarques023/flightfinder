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
        </div>
    )
}

export default Navbar