import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExplorMenu = ({category , setCategory}) => {
  return (
    <div className='explor_menu' id='explore_menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto pariatur alias fugit quia repellat optio quos iure sunt? Magni minus quos ullam enim blanditiis nobis repudiandae ipsum, voluptas eaque?</p>
    <div className='explore-menu-list'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_image?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className ={ category===item.menu_name?'active' :" "}src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>

                    </div>
                )

            })
        }


    </div>
    <hr/>
    </div>
  )
}

export default ExplorMenu