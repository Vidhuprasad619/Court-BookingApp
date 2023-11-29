import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon
}
    from 'mdb-react-ui-kit';

import LoginBox from '../components/Login';
import SignupBox from '../components/Signup';

function Login() {
    const [loginPage,setLoginPage]=useState(true);
  return (
   
    <div>


    <MDBContainer className="my-5">

        <MDBCard >
            <MDBRow className='g-0'>

                <MDBCol md='6'>
                    <MDBCardImage src='https://swooperetail.com/admin/public/uploaded/venues/1620161529-dapper%20dash%20shop%20logo.png' alt="login form" className='rounded-start w-100' />
                </MDBCol>

                <MDBCol md='6'>
                    <MDBCardBody className='d-flex flex-column'>

                        <div className='d-flex flex-row mt-2'>
                            <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                            <span className="h1 fw-bold mb-0">Dapper Dash</span>
                        </div>
                        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                        <div>
                        {loginPage?<LoginBox setLoginPage={setLoginPage}/>:<SignupBox setLoginPage={setLoginPage}/>}
                        </div>

                       
                       

                    </MDBCardBody>
                </MDBCol>

            </MDBRow>
        </MDBCard>

    </MDBContainer>
</div>
  );
}

export default Login;