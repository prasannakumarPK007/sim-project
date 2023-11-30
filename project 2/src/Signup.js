import React, { useEffect, useState } from 'react';
//import { User2 } from 'lucide-react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup=()=>{
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  useEffect(()=>{
    document.title = 'Signup';
  })
    const b=useNavigate();
    function p1(event) 
    {
        event.preventDefault();
        axios.post(`http://localhost:3001/users`,{email,password})
        .then(res=>{
          alert(`Signed Up SuccessFully`)
        b('/');
      })
        .catch(err=>{console.log(err)})
    }
  return(
    <div>
      <form onSubmit={p1}>
     <div className="mai">
        <div ><h1 style={{color:'black'}}>Signup</h1></div>  
            
            <div ><input type="TEXT" placeholder="UserName" className="oi" required/> </div><br/>
            <div><input type="email" placeholder="Enter-Email" className="oi" required onChange={(event)=>{setemail(event.target.value)}}/></div><br/>
            <div ><input type="number" placeholder="PhoneNumber"className="oi"  required/></div><br/>
            <div>
            <input type="password" placeholder="Password" className="oi" required onChange={(event)=>{setpassword(event.target.value)}}/></div><br/>
           
           <div><button className="button" type='submit'>Submit</button></div>
           </div>
            
    </form>
    </div>
  )
}
export default Signup;