import React, { useState } from 'react';
import {MDBBtn,MDBInput} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../toolkit/userSlice';
import {useDispatch} from 'react-redux'



function LoginBox({ setLoginPage }) {
    const [login,setLogin] = useState({email:'',password:''});

    const navigate= useNavigate();
    const dispatch = useDispatch();
    
    
    const handleLogin=()=>{
        try{
            axios.post('http://localhost:5000/auth/login',login).then((res)=>{
                if(res.data.login){
                    localStorage.setItem('token',res?.data?.token);
                    dispatch(setUser(res.data.user));
                    navigate('/home');
                }
            }).catch((err)=>{
                alert(err)
            })
        }catch(error){
            console.log('error',error);
        }

    }
    return (
        <>


            <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" onChange={(e)=>setLogin({...login,email:e.target.value})}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" onChange={(e)=>setLogin({...login,password:e.target.value})}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Login</MDBBtn>
            <a className="small text-muted" href="#!">Forgot password?</a>
            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <span className='fst-italic' onClick={() => { setLoginPage(false) }} style={{ color: '#393f81' }}>Register here</span></p>

        </>
    );

}

export default LoginBox;

