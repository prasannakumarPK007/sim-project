import { Toaster, toast } from 'react-hot-toast';
//import { Mail } from 'lucide-react';
import * as React from 'react';
//import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
//import {Link} from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
const Login = () => {
  const [email,setemail]=React.useState("");
  const [password,setpassword]=React.useState("");
  useEffect(()=>{ 
    document.title = 'Login';
  })
  const a=useNavigate()
  function aa(event) {
    
    
    event.preventDefault();
    axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
    .then(res=>{
      if(res.data.length>0)
      {
        alert(`login succesful`);
        a('/home');
      }
      else{
        alert(`invalid username or password`);
  
      }
    })
    .catch(err=>{console.log(err)})
  }
  function ab()
  {
    a('/signup');  
  }
  function lk(event)
  {
    
  }
  return (
    <>
    <div className='div1'>
      <div className="oll">
        <br></br>
        <h1><b>SIM EVENTS</b></h1>
        <form >
          <table cellPadding={10} cellSpacing={10} >
            <tr>
              <td style={{textAlign:'center'}}><TextField id="standard-basic" label="Email" variant="standard" inputProps={{required: true}} onChange={(event)=>{setemail(event.target.value)}}/></td>
            </tr>
            <tr>

              <td style={{textAlign:'center'}}>  <TextField id="standard-basic" label="Password" variant="standard" type="password" InputProps={{required: true}} onChange={(event)=>{setpassword(event.target.value)}}/></td>
            </tr>
          </table>
         <button class="button1" type="submit" onClick={aa}>Login</button>

          <p>New here?Click sign up to create account</p><button onClick={ab}>Signup</button>

        </form>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
    </>
  )
}

export default Login;