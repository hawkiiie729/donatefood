import React,{useContext} from 'react'
import './Front.css';
import  { AuthContext}  from '../Context/AuthContext';
import con1 from '../Assets/con1.png'
import con2 from '../Assets/con2.png'
import con3 from '../Assets/con3.png'
import con4 from '../Assets/con4.png'
import con5 from '../Assets/con5.png'
import con6 from '../Assets/con6.png'
import bg from '../Assets/backdrop.avif'
import { Link} from 'react-router-dom'
import logo from '../Assets/logo.avif'
function Front() {
    const {logout}=useContext(AuthContext);
   
  return (
   <>
                <div class="navbar">
        <div class="heading">
            <img src={logo} alt=""/>
            <h1>Striving To Remove Starvation</h1>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">HOME</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">ABOUT</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">CONTACT</a>
            </li>
        </ul>
    </div>
    <section>
        <div className="first" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover',backgroundrepeat: 'no-repeat', backgroundposition:'center'}}>
            <div class="us">
                <div class="h3"><h3>WE MAKE IT EASY TO</h3></div>
                <h1>Find, Secure and Deliver Food</h1>
                <h6>We are a non-profit enabling the exchange of excess food from the food industry to those who need it most</h6>
                <div class="buttons">
                   <div class="donate"><Link to="/main" style={{textDecoration:'none'}}>Donate Food</Link></div>
                   <div class="need" onClick={logout} style={{cursor:'pointer'}}>LogOut</div>
                </div>
            </div>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,256C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
        </div>
        <div class="second">
            <div class="heading">How It Works</div>
            <div class="content">
                <div class="firstrow">
                    <div class="box">
                        <img src={con1} alt=""/>
                    </div>
                    <div class="box">
                        <img src={con2} alt=""/>
                    </div>
                    <div class="box">
                        <img src={con3} alt=""/>
                    </div>
                </div>
                <div class="secondrow">
                    <div class="box">
                        <div class="h1"><h1>Food Is Donated</h1></div>
                        <div class="h3"><h3>Farms, restaurants, cafeterias, hotels, stadiums, and grocery stores post excess food in under a minute on the Waste No Food app.</h3></div>
                    </div>
                    <div class="box">
                        
                            <div class="h1"><h1>Food Is Checked</h1></div>
                            <div class="h3"><h3>Pre-vetted charities immediately get notified about food donations and can claim any donations they can use to serve hungry clients.</h3></div>
                        
                    </div>
                    <div class="box">
                       
                            <div class="h1"><h1>Food Is Served</h1></div>
                            <div class="h3"><h3>The charity, or a network of volunteers, picks up the food and serves it to hungry people.</h3></div>
                        
                    </div>
                </div>
               
            </div>
        </div>
        <div class="third">
            <div class="heading"> <h1>A Solvable Problem</h1> </div>
            <div class="subheading"><h3>Service organizations want access to excess food, but there are barriers — locating the excess food, establishing their credentials, and efficiently deploying resources to transport food. Waste No Food breaks down these barriers.</h3></div>
        </div>
        <div class="fourth">
            <div class="box">
                <img src={con4} alt=""/>
                <h1>RAW FOOD</h1>
                <h3>40% of all food is thrown away or plowed over. In India, 100 billion</h3>
            </div>
            <div class="box">
                <img src={con5} alt=""/>
                <h1>COOKED FOOD</h1>
                <h3>In Uttar Pradesh alone, over 5 billion pounds of prepared food is thrown away every year</h3>
            </div>
            <div class="box">
                <img src={con6} alt=""/>
                <h1>HUNGER</h1>
                <h3>If only one-third of India’s excess food were diverted, it would resolve the hunger</h3>
            </div>
        </div>
    </section>
   </>
  )
}

export default Front