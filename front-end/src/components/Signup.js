import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBInput,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';
import axios from 'axios';

function SignupBox({setLoginPage}) {
    const [signup,setSignup]=useState({firstName:'',lastName:'',email:'',password:'',password2:''});
    useEffect(()=>{
        console.log(signup);
    },[signup])

    const handleSignup=()=>{
        try{
            axios.post('http://localhost:5000/auth/register',signup).then((res)=>{
                if(res.data.signup){
                    alert('signup success');
                    setLoginPage(true);
                }else{
                    alert("signup failed");
                }
            }).catch((err)=>{
                console.log("error",err);
            })
        }catch(error){
            console.log('failed to connect',error);
        }
       
    }
    return (
        <>

            <MDBRow>
                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='fName' type='text' value={signup.firstName} onChange={(e)=>setSignup({...signup,firstName:e.target.value})}/>
                </MDBCol>

                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='lName' type='text' value={signup.lastName} onChange={(e)=>setSignup({...signup,lastName:e.target.value})} />
                </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' value={signup.email} onChange={(e)=>setSignup({...signup,email:e.target.value})} />
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={signup.password} onChange={(e)=>setSignup({...signup,password:e.target.value})}/>
            <MDBInput wrapperClass='mb-4' label='Re Password' id='password2' type='password' value={signup.password2} onChange={(e)=>setSignup({...signup,password2:e.target.value})} />

            <MDBBtn className="mb-4 px-5"  color='dark' size='lg' onClick={handleSignup}>Signup</MDBBtn>

            <div className='d-flex justify-content-start mb-4'>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <span className='fst-italic' onClick={()=>{setLoginPage(true)}} style={{ color: '#393f81' }}>Click here</span></p>
            </div>

            

           
        </>
    );
}

export default SignupBox;