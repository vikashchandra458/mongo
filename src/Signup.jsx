import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import './Signup.css';
import  Axios  from 'axios';
import * as Yup from 'yup';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const formik = {Fname:"",Lname:"",username:"",email:"",gender:"",dob:"",password:"",Conpassword:"", phone:""}
     const FormValidationSchema= Yup.object().shape({
        Fname: Yup.string().max(20, 'Must be 20 characters or less').required('First Name is Required'),
        Lname: Yup.string().max(20, 'Must be 20 characters or less').required('Last Name is Required'),
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        phone: Yup.number().positive().integer().required("Phone Number is Required"),
        password: Yup.string().min(6, 'password must be at least 6 charaters').required('password is required'),
        Conpassword: Yup.string().oneOf([Yup.ref('password'), null], 'passwword must match').required('Confirm password is required'),
      })

    let history = useNavigate();
    const Loginform = () => {history('/Login')}

const handleFormSubmit = (values) => {
   Axios.post("http://localhost:9000/", {Fname: values.Fname,Lname:values.Lname,username:values.username,email:values.email,gender:values.gender,dob:values.dob,password:values.password, phone:values.phone}).then(res => {
    if(res.data === "Successfully Registered. !!!")
    { alert(`${res.data} ${values.Fname} ${values.Lname}`)
      history('/login')}
    else{alert(res.data)
      console.log(res.data);
    }
  });
    values.preventDefault()
  };

return (<><NavBar/><button onClick={Loginform}>Already Registered? Login Here</button>
<div className='centered'><h1>Registration Form</h1>
    <Formik initialValues={formik} onSubmit={(values => handleFormSubmit(values))} validationSchema={FormValidationSchema}>
        <Form>
            <label className='label'>First Name</label>
            <Field className="txt_field"  type="text" name="Fname" placeholder="Enter Your First Name"/>
            <p className='error'><ErrorMessage name="Fname"/></p>
            <label className='label'>Last Name</label>
            <Field className="txt_field"type="text" name="Lname" placeholder="Enter Your Last Name"/>
            <p className='error'><ErrorMessage name="Lname"/></p>
            <label className='label'>Username</label>
            <Field className="txt_field" type="text" name="username" placeholder="Choose Username"/><br/>
            <label className='label'>Email Address</label>
            <Field className="txt_field" type="email" name="email" placeholder="Enter Your Email Address"/>
            <p className='error'><ErrorMessage name="email"/></p>

            <label className='label'>Gender</label>
            <div className="gender1">
            <Field  type="radio" name="gender" value="Male"/>
            <label className='label'>Male</label>
           
            </div>
            
            <div className="gender2">
              <Field  type="radio" name="gender"  value="Female"/>
              <label className='label'>Female</label><br/>
            </div>
            
            <label className='label'>Date Of Birth</label>
            <Field className="txt_field"type="date" name="dob"/><br/>
            <label className='label'>Set Login password</label>
            
            <Field className="txt_field" type="text" name="password" placeholder="Set Your Login password"/>
            <p className='error'><ErrorMessage name="password"/></p>
            <label className='label'>Confirm Login password</label>
            <Field className="txt_field" type="password" name="Conpassword" placeholder="Confirm Your Login password"/>
            <p className='error'><ErrorMessage name="Conpassword"/></p>
            <label className='label'>Phone Number</label>
            <Field className="txt_field" type="number" name="phone" placeholder="Enter Your Phone Number"/>
            <p className='error'><ErrorMessage name="phone"/></p>
            <button className="button" type="submit">Submit</button>
        </Form>
    </Formik>
</div></>
) 
}
export default SignUpForm;
