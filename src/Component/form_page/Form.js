import React, { useState } from 'react';
import './Form.css'; 
import Footer from '../../Component/Footer'
import axios from 'axios';
 
const Form = () => {

const [formData , setFormData] = useState({
  firstname: '',
  lastname: '',
  fathername: '',
  education: '',
  phonenumber: '',
  email: '',
  selectdob: '',
  selectbatch: '',
  selectdomain: ''
});

const handleSubmit = (event) => {
    event.preventDefault();

    const jsonData = JSON.stringify(formData);

    axios.post('https://jsonplaceholder.typicode.com/users',jsonData,{
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    .then(response => {
      console.log('user created:',response.data);
    })
    .catch(error => {
      console.log("error created:",error);
    });
};
const handleInputChange = event => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value
  }));
};


  return (
    <>
    <div>
      <div className="form-card-container"> 
        <h1 className="project-heading">
          SENCHOLA UNIVERSITY 
        </h1>
        <h2 className = "form-heading">USER FORM</h2> 

        <form onSubmit={handleSubmit} > 
          <div className="form-container">  
            <div className= "user-input-box">
              
              <label htmlFor="firstname" >First Name <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Enter your name' className="input-box" id="firstname"   value={formData.firstname}
              onChange={handleInputChange} name='firstname'/>
            </div> 
            <div className= "user-input-box">
            
                <label htmlFor="lastname" >Last Name </label>
                <input type="text" placeholder='Enter your name' className="input-box" id="lastname"   name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}/>
            
            </div>
            <div className= "user-input-box">
            
            <label htmlFor="fathername">Father Name <span className='asterisk'>*</span></label> 
            <input type="text" placeholder='Enter father name' className="input-box" id="fathername"  name="fathername"
              value={formData.fathername}
              onChange={handleInputChange} />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="education" >Education Qualification <span className='asterisk'>*</span></label>
            <select id="education" className='select-degree-box'  name="education"
              value={formData.education}
              onChange={handleInputChange}>
                <option value = {"selectyourDegree"}>--Select your Degree--</option>
                <option value={"B.E/B.Tech"}>B.E/B.Tech</option>
                <option value={"BCA"}>BCA</option>
                <option value={"MCA"}>MCA</option> 
            </select> 
            </div>

            

            <div className= "user-input-box">
            
            <label htmlFor="phonenumber" >Phone Number <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your number' className="input-box" id="phonenumber"  name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange} />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="email" >Email address <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your email' className="input-box" id="email"  name="email"
              value={formData.email}
              onChange={handleInputChange} />
        
            </div>
            <div className= "user-input-box">

            <label htmlFor="selectdob">Date of Birth(DOB) <span className='asterisk'>*</span></label>
            <input type="date" className="select-date-box" id="selectdob"   name="selectdob"
              value={formData.selectdob}
              onChange={handleInputChange}/>

            </div>
            <div className= "user-input-box">
            
            <label htmlFor="selectbatch" >Your Batch no <span className='asterisk'>*</span></label>
            <select id="selectbatch" className='select-degree-box'  name="selectbatch"
              value={formData.selectbatch}
              onChange={handleInputChange}>
                <option value = {"selectyourbatch"}>--Select your Batch--</option>
                <option value={2016}>2022</option>
                <option value={2017}>2021</option>
                <option value={2018}>2020</option> 
            </select>
        
            </div> 
            <div className= "user-input-box">
            
            <label htmlFor="selectdomain" >Your Domain <span className='asterisk'>*</span></label>
            <select id="selectdomain" className='select-degree-box'  name="selectdomain"
              value={formData.selectdomain}
              onChange={handleInputChange}>
                <option value = {"selectyourbatch"}>--Select your Domain--</option>
                <option value={"frontend"}>Frontend</option>
                <option value={'backend'}>Backend</option>
                <option value={'devops'}>Flutter</option> 
                <option value={'ui/ux'}>UI/UX</option> 
                <option value={'cybersecurity'}>CyberSecurity</option> 
            </select>
            </div>
            </div> 
            <div className='btn-container'>
            <button className='register-button'>REGISTER</button> 
            </div>
            
          
        </form> 
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Form


