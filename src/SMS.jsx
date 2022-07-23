import React, {  useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import {Form, Button } from 'react-bootstrap'
import './Signup.css';

export default function SMS (props) {
  // var countries = require('country-list');
  let history = useNavigate();
  const [number, setNumber] = useState("");
  const [otpForm, showForm] = useState(true);
  const [otp, setOtp] = useState("");
  const [phone, setPhone]= useState("");

const submitData = (e) => {
  Axios.post("http://localhost:9000/sendotp", { phone : "+"+phone.phone }).then(res => {
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

return<><NavBar/>
{  otpForm ?     <div className="center"><h1>SMS Verification</h1>

      <Form onSubmit={submitData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label className="txt_field1">Mobile Number</Form.Label>

          <PhoneInput country={'in'} name='phone' onChange={phone => setPhone({ phone })}/>

        </Form.Group>
        <Button className='button1' variant="primary" type="submit">Submit</Button><br></br>
      </Form>
    </div>
    
    : <div className="center"><h1>OTP Verification</h1>
    <Form onSubmit={submitData2}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="txt_field1">OTP</Form.Label>
        <Form.Control type="number"  placeholder={"Enter the otp"} name='number' onChange={(e) => { setNumber(e.target.value); } } />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button className='button1' variant="primary" type="submit">Submit</Button><br></br>
    </Form>
  </div>
  }
    </>      
}