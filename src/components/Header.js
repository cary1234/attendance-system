import PropTypes from 'prop-types'

import logoUrl from '../assets/images/logo.png';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = (props) => {
    return (
        <header>
            {/* <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src={logoUrl} height="75" alt="SPEDI Logo" />
                    </a>

                    <h4>SPEDI Construction, Inc</h4>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse text-center" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link">Profile</a>
                            <a href="#" className="nav-item nav-link">Messages</a>
                            <a href="#" className="nav-item nav-link disabled" tabIndex="-1">Reports</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav> */}



            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <a href="#" className="navbar-brand">
                            <img src={logoUrl} height="75" alt="SPEDI Logo" />
                            SPEDI Construction, Inc
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


// Header.propTypes = {
//     title: PropTypes.number.isRequired,
// }

export default Header