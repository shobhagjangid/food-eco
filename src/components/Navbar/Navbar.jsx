import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({setShowLogin}) => {
  const [showMediaIcon, setShowMediaIcon] = useState(false)
    const [menu,setMenu]=useState('home')

    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
       <Link to="/"><img src={assets.logo} alt='' className='logo'/></Link> 
        <ul className="navbar-menu">
            <Link to='/' onClick={(()=>setMenu("home"))} className={menu=== "home" ? "active" : ""}>HOME</Link>
            <a href='#explore_menu' onClick={(()=>setMenu("menu"))} className={menu=== "menu" ? "active" : ""}>MENU</a>
            <a href='#app-download' onClick={(()=>setMenu("mobile-app"))} className={menu=== "mobile-app" ? "active" : "" }>Mobile-app</a>
            <a href='#footer' onClick={(()=>setMenu("contact-us"))} className={menu=== "contact-us" ? "active" : ""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon}/></Link> 
                <div className={getTotalCartAmount()===0?"" :"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className='navbar-button'>Sign in</button>
        </div>
        <div className='hambuger-menu'>
          <a href='#' onClick={()=>setShowMediaIcon(!showMediaIcon)} ><GiHamburgerMenu/></a>
        
        </div>

    </div>
  )
}

export default Navbar