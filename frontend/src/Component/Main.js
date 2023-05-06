import React from 'react'
import { useState } from 'react';
import axios from "axios";
import './Main.css';
import logo from '../Assets/logo.avif'
import { Link,useNavigate} from 'react-router-dom'
function Main() {
    const navigate=useNavigate();
    const [data,setData]=useState({
        Name:'',
        AddressLatitude:'',
        AddressLongitude:'',
        Food:'',
        Serving:'',
        Date:'',
        Mobile:null
      });
      
      const handleNameChange=(val)=>{
        setData((prev)=>{
          return {...prev,Name:val}
        })
        
      }
      const handlePhone=(val)=>{
        setData((prev)=>{
          return {...prev,Mobile:val}
        })
      }
      const handleServingChange=(val)=>{
        setData((prev)=>{
          return {...prev,Serving:val}
        })
      }
      const handleDateChange=(val)=>{
        setData((prev)=>{
          return {...prev,Date:val}
        })
      }
      const handleFoodChange=(val)=>{
        setData((prev)=>{
          return {...prev,Food:val}
        })
      }
      const handleClick=async()=>{
        console.log('hello');
        console.log('data',data);
        let message=await axios.post('/sendMail',data);
        console.log('data',message);
        navigate('/')
      }
      const handleLocation=()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
          setData((prev)=>{
            return {...prev,AddressLatitude:position.coords.latitude}
          });
          setData((prev)=>{
            return {...prev,AddressLongitude:position.coords.longitude}
          });
        });
      }
      return (
        <>
         <div class="navbar">
            <div class="heading">
                <img src={logo} alt=""/>
                <h1>Striving To Remove Starvation</h1>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">CONTACT</a>
                </li>
            </ul>
        </div>
        <div className='request'>
          <h1>Please fill up the form!!</h1>
        </div>
        <section>
            <div className="donate">
            <h2>Name</h2>
                <div class="type"><input type="text" onChange={(e)=>handleNameChange(e.target.value)}/></div>
                {console.log('data',data)}
                <h2>Address</h2>
                <button onClick={handleLocation} className='location'>Use current location</button>
                <h2>Type Of Food</h2>
                <div class="type"><input type="text" placeholder="Raw or Cooked"  onChange={(e)=>handleFoodChange(e.target.value)}/></div>
                <h2>Approximate Servings</h2>
                <div class="type"><input type="text"  onChange={(e)=>handleServingChange(e.target.value)}/></div>
                <h2>Mobile Number</h2>
                <div class="type"><input type="number"  onChange={(e)=>handlePhone(e.target.value)}/></div>
                <h2>Date of Food Preperation</h2>
                <div class="type"><input type="date"  onChange={(e)=>handleDateChange(e.target.value)}/></div>
                <div class="Button">
                    <button onClick={handleClick} style={{cursor:'pointer'}}>Submit</button>
                </div> 
            </div>
        </section>
        </>
       
      );
}

export default Main