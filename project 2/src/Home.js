import { AppBar, Button, Toolbar, Stack } from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
    useEffect(()=>{
        document.title='SIM';
    })
    const a=useNavigate();
    function po()
    {
        a('/');
    }
    return (
        <div className='outer'>
            <div className='div4'>
              
                <h1>SIM</h1>
            </div>
           
            <div className='div5'>
                
                <AppBar position="static" style={{ backgroundColor: 'black', height: '60px',marginTop:'50px'}}>
                   
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{color:'white' }} className='t'>SIM EVENTS<br/>
                </h1>
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" onClick={po}>LOG OUT</Button>
            <Button color="inherit">SUPPORT</Button>
            <Button color="inherit">CONTACT US</Button>
            <Button color="inherit">Theme</Button>
          </Stack>
          </Toolbar>
               </AppBar>
                <div className='div7'>
                    <div className='div8'>
                        <table cellSpacing={25}>
                            <tr>
                                <td><button className='aa'><div className='div9'></div></button></td>
                                <td><button className='aa'><div className='div10'></div></button></td>
                                <td><button className='aa'><div className='div11'></div></button></td>
                            </tr>
                            <tr>
                                <td><b>WEDDING PLANNER</b></td>
                                <td><b>BIRTHDAY PARTY</b></td>
                                <td><b>CORPORATE EVENTS</b></td>
                            </tr>
                            <tr>
                                <td><button className='aa'><div className='div12'></div></button></td>
                                <td><button className='aa'><div className='div13'></div></button></td>
                                <td><button className='aa'><div className='div14'></div></button></td>
                            </tr>
                            <tr>
                                <td><b>ENGAGEMENT</b></td>
                                <td><b>HOUSE WARMING</b></td>
                                <td><b>PUBERTY CEREMONY</b></td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        
                    </div>
                </div>
           
                
      
            </div>
            
        </div>
    );
};

export default Home;