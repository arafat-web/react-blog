import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary border-bottom">
    //   <Container>
    //     <Link className='navbar-brand' to="/">My Blog</Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Link className='nav-link active' to="/">Home</Link>
    //         <Link className='nav-link' to="/about">About</Link>
    //         <Link className='nav-link' to="/contact">Contact</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className='border-bottom'>
      <Container>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-2">
          <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">My Blog</span>
          </Link>
          <ul class="nav nav-pills">
            <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li class="nav-item"><Link href="#" class="nav-link" to="/about">About</Link></li>
            <li class="nav-item"><Link href="#" class="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </header>
      </Container>
    </div>
  );
}

export default Navbars;