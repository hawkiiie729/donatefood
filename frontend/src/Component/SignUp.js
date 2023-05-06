import * as React from 'react';
import {useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, } from '@mui/material';

import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../Context/AuthContext';
import { Link,useNavigate} from 'react-router-dom'
import './Signup.css'
import { auth } from '../firebase';

export default function SignUp() {
    
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [error,setError]=useState('');
   
    const navigate=useNavigate();
    const {signup}=useContext(AuthContext);

    const handleClick= async()=>{
        try{
            setError('')
            let userObj=await signup(email,password)
            navigate('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000)
          
        }
    }
  return (
    <div className='signupWrapper'>
        <div className='signupCard'>
            <Card variant='outlined'>
              <CardContent>
                 <Typography variant="subtitle1" >
                     SignUp to be the change you want to see in the world.
                 </Typography>
                 {error!='' && <Alert severity="error">{error}</Alert>}
                 <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth='true' margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <TextField id="outlined-basic" type='password' label="Password" variant="outlined" fullWidth='true' margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth='true' margin="dense" size="small" value={name} onChange={(e)=>setName(e.target.value)}/>
             </CardContent>
             <CardActions>
                 <Button  color="primary" fullWidth='true' variant="contained"  onClick={handleClick}>
                      SignUp
                 </Button>
             </CardActions>
             <CardContent>
                 <Typography  variant="subtitle1" >
                     By signing up, you agree to Terms, Conditions and Cookies policy
                 </Typography>
             </CardContent>
            </Card>
            <Card variant='outlined' >
               <CardContent>
                    <Typography  variant="subtitle1" >
                          Having an account ? <Link to="/login" style={{textDecoration:'none'}}>LogIn</Link>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    </div>
  );
}