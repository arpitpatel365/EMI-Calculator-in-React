
import React from 'react'
import './css/App.css';
import EMICalculator from './components/EMICalculator';
import { BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";

import LoginPage from './components/LoginPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './components/ForgotPassword';
import Error from './components/Error';
import { SignUpForm } from './components/SignUpForm';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>


function App() {

  return (
    <React.Fragment>




      <Router>
        <Navbar bg="primary" variant="dark" className='navbar' id='navbar1'>

          <Container>
            <Nav className="me-auto">
              <Link to='/LoginPage' id='loginPage'>
                <Nav.Link href="/LoginPage">Login</Nav.Link>
              </Link>
              <Link to='SignUpForm' id='sign_up_form'>
                <Nav.Link href="/SignUpForm">Sign Up</Nav.Link>
              </Link>
              <Link to='/EMICalculator'>
                <Nav.Link href="/EMICalculator"></Nav.Link>
              </Link>
              <Link to='/ForgotPassword'></Link>
              <Link to='/LoginPage' id='out'>
                <Nav.Link href='/LoginPage'>Log out</Nav.Link>
              </Link>
              

            </Nav>
          </Container>
        </Navbar>
        <Routes >
          <Route path='/' element={<LoginPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/SignUpForm' element={<SignUpForm />} />
         
          <Route path='/EMICalculator' element={<EMICalculator />} />
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/*' element={<Error/>} />
        </Routes>
      </Router>

     

    </React.Fragment>
  );
}

export default App;

