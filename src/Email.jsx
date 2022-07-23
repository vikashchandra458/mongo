import React, { useRef, useEffect, useState } from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import {Form, Button } from 'react-bootstrap'
import './Signup.css';

export default function Email(props) {

  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [otpForm, showForm] = useState(true);

const submitData = (e) => {
  console.log(email);
  Axios.post("http://localhost:9000/sendmail", { email: email }).then(res => {
if(res.data.otp){
  setOtp(res.data.otp)
  alert(res.data.msg)
  showForm(false);
  // history('/confirm',{ state: { otp: res.data.otp} })
}
else{
  alert(res.data.msg)
}
});
  e.preventDefault()
};

const submitData2 = (e) => {
  if(otp === number){
    alert("Otp Verification successfull\nRegistration Process completed\nClick ok to Login");
    history('/Login');
}
else{
    alert("Invalid otp")
}
e.preventDefault()
};

useEffect(()=>{myref.current.focus()},[])
    const myref = useRef(null)

return<><NavBar/>
{  otpForm ? <div className="center"><h1>Email Verification</h1>
      <Form onSubmit={submitData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="txt_field1">Email Address</Form.Label>
          <Form.Control type="email" ref={myref} placeholder={"Enter Your Email"} name='email' onChange={(e) => { setEmail(e.target.value); } } />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button className='button1' variant="primary" type="submit">Submit</Button><br></br>
      </Form>
    </div>
    
    : <div className="center"><h1>OTP Verification</h1>
    <Form onSubmit={submitData2}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="txt_field1">OTP</Form.Label>
        <Form.Control type="number" ref={myref} placeholder={"Enter the otp"} name='number' onChange={(e) => { setNumber(e.target.value); } } />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button className='button1' variant="primary" type="submit">Submit</Button><br></br>
    </Form>
  </div>
}
    </>      
}