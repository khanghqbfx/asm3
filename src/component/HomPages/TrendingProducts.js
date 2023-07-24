import React, { useEffect } from 'react'
import { useState } from 'react'
import classes from './TrendingProducts.module.css';
import Popup from '../Popup/Popup';
import {useDispatch ,useSelector} from 'react-redux';
import { popupActions } from '../../store/Popup';







const TrendingProducts = () => {
  
   const[product, setProduct] =  useState ([]);
   const isPopup = useSelector((state) => state.popup.isPopup);
   const dispatch = useDispatch()
 
   
   
   const imgHanler = () => {
    if(isPopup === true)
    dispatch(popupActions.showPopup())
    }
 
   


   useEffect(() =>{
     const  fetchData = async () => {
      try{
         const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
          const data = await response.json();
          console.log(data)
          setProduct(data)
      }catch(error){
        console.error('Error fetching product data:', error)
      }
     };
     fetchData();
   }, []);

    const formatPrice =(price) => {
      return price.toLocaleString("vi-VN")
    }
    

  return (
    <div>
       <div className={classes.top}>
          <p className={classes.sub_head}><i>MADE THE HARD WAY</i></p>
          <h2 className={classes.heading}><i>TOP TRENDING PRODUCTS</i></h2>
       </div>
       <div >
        <ul className={classes.title}>
          {product.slice(0, 8).map((item) => (
            <li key = {item.key}>
              <img src={item.img1} alt= {item.name} className={classes.img} onClick={imgHanler} />
              <p>{item.name}</p>
              <p>{formatPrice(item.price)} VND</p>
            </li>
        ))}
    
        <Popup />
      
        </ul>
       </div>
    </div>
  )
}

export default TrendingProducts