import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt=''/>
            <p>Lorem, ipsum dolor sit amet vitae eligendi nostrum, ratione ipsum, vel non neque, aliquam quis quaerat incidunt deserunt, iste eum perferendis natus.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-cophyright">cophyright 2024 tomato.com - All right Reservied.</p>
    </div>
  )
}

export default Footer