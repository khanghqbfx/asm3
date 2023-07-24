import { useState , useEffect } from "react";
import { popupActions } from "../../store/Popup";
import classes from './Popup.module.css';
import { useDispatch, useSelector } from "react-redux";
import React from "react";


 const Popup =  () => {

  
    const[product, setProduct] =  useState ([]);
    const dispatch = useDispatch()
   const isPopup= useSelector((state) => state.popup.isPopup)
  
   const closeImghanler = () => {
    if (isPopup) {
      dispatch(popupActions.hidePopup());
    } else {
      dispatch(popupActions.showPopup());
    }
  };



    useEffect(() =>{
      const  fetchData = async () => {
       try{
          const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
           const data = await response.json();
         
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
      <div className= {classes.container}>
      <div className= {classes.popup}>
       <ul className= { classes.ul}>
       {product.slice(0, 1).map((item) => (
         <li key = {item.key} className= { classes.li}>
          <div>
          <img src={item.img1} alt= {item.name}  className={classes.img} />
          </div>
          <div className={classes.title}>
           
          <h2>{item.name}</h2>
          <span className={classes.icon} onClick={closeImghanler}>x</span>
           <p className={classes.vnd}>{formatPrice(item.price)} VND</p>
           <p className={classes.long}>{item.short_desc}</p>
           <button className={classes.btn}>View Deltai</button>
          </div>
         </li>
     ))}
     </ul>
        
     </div>
    </div>
    )
    
      
      
    
    
 }
 


export default Popup