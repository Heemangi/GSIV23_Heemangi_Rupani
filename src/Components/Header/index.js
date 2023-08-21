import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import SearchContainer from '../../Container/Search'; // Import your SearchComponent
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const HeaderComponent = ({ onSearch }) => {
   
  

  return (
    <header className='header'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <div className='d-flex'>
              <div className='me-auto'>
                {/* {<SearchContainer/>} */}
                <Link to='/search'>Search</Link>
                <SearchContainer onSearch={onSearch} />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
