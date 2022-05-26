
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";

const Addressdiv=styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  .navbar-div > div {
    flex: 1 2 auto;
  }
   *
  
  .cart-products {
    display: flex;
    width: 70%;
    padding-top:3%;
    margin: auto;
    gap: 5%;
    //  border: 1px solid red; 
  }
  .cart-item {
    width: 65%;
    height: 100vh;
    /* border: 1px solid red; */
  }
  .content-div {
    line-height: 2;
  }
  .span {
    font-size: 1.5rem;
  }
  .span-color {
    color: #8f8a8a;
  }
  .product-details {
    display: flex;
    gap: 10%;
    margin: 5% 0 3% 0;
    font-family: "Mier demi" -500;
  
    font-size: 18px;
    color: #464545;
  }
  
  .img-div {
    width: 7vmax;
  }
  .img-div > img {
    width: 100%;
  }
  
  
  .price-div {
    width: 30%;
    line-height: 2;
  }
  .price-div > p {
    color: #0f0c0c;
    font-size: 1.3vw;
  }
  .price-div-list {
    display: flex;
    justify-content: space-between;
    font-size: 1.3vw;
    color: #8f8a8a;
  }
  .total-price {
    display: flex;
    
    justify-content: space-between;
    color: #0f0c0c;
    font-size: 20px;
  }
  .total-price>p{
    font-size: 1.3vw;
  }
  .continue-btn {
    font-size: 1.5vw;
    width: 100%;
    border: none;
    background-color: green;
    color: white;
    padding: 2%;
    border: 2px solid green;
    border-radius: .5vw;
    margin: 10px auto;
  }
  .continue-btn:hover{
    background-color: white;
    color: red;
  }
  .btn-img-div {
    width: 100%;
  }
  .btn-img-div > img {
    width: 100%;
  }
  /* adding css */
  #left {
    float: left;
    margin-left: 30%;
    margin-top: 2vh;
    padding-left: 2%;
    width: 70%;
    height: 88vh;
    //  border: 1px solid red; 
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  form{
      width: 98%;
      font-size: 1.2vw;
      text-align: left;
      
      //  border: 1px solid red; 
  }
  
  h3 {
    font-size: 1.3vw;
    margin-left: 30%;
  }
  h2{
    font-size: 1.3vw;
  }
  input {
    width: 97%;
    height: 5vh;
  font-size: 1vw;
    margin-top: 2vh;
  }
  .city {
    width: 49%;
  }
  #btn {
      font-size: 1.2vw;
    margin-top: 6vh;
    color: white;
    border-radius: .5vw;
    border: 2px solid green;
    background-color: green;
  } 
  #btn:hover{
      background-color: white;
      color: red;
  }


`;
export const Address = ()=>{
  const [adData, setData] =useState({})
  const handleChange=(e)=>{
    let key=e.target.name;
        setData(
            {
                ...adData,
                [key]: e.target.value,
            }
        )
 }



  const totalPrice = JSON.parse(localStorage.getItem("totalp"));

    // console.log("rupee", totalPrice)

    return (
    <Addressdiv>
       <div id="navbar-main">
        <div className='cart-products'>
            <div className='cart-item'>
              {/* Adding div and form */}
            <h3>Select Delivery Address</h3>
            <div id='left'>
              <h2>Contact details</h2>
              <form onSubmit={(e)=>{
                e.preventDefault();
                axios.post(`https://project-assignment-gul.herokuapp.com/address`, adData).then((res)=>{
                     
                console.log(res)
                alert("Your address has been successfully saved")
     });

              }}>
                <p>Name</p>
                <input type="text" name='Name' onChange={handleChange} placeholder='Name' required />
                <p>Phone number</p>
                <input type="number" name='phone' onChange={handleChange} placeholder='Phone number' required />
                <p>House no.</p>
                <input type="number" name='house_no' onChange={handleChange} placeholder='House no./ Building Name' required />
                <p>Area/ Colony</p>
                <input type="text" name='area' onChange={handleChange} placeholder='Road/ Area/ Colony' required />
                <p>Pincode</p>
                <input type="number" name='pincode' onChange={handleChange} placeholder='Pincode' required />
                <p>City</p>
                <input className='city' name='city' onChange={handleChange} type="text" placeholder='City' required /><span><input className='city' type="text" name='state' onChange={handleChange} placeholder='State' required /></span>
                <p>Nearby Location (optional)</p>
                <input type="text" name='location' onChange={handleChange} placeholder='Nearby Location' required />
               
                <input id='btn' type="submit"  value="Save Address & Continue"/>
              </form>
            </div>
            {/* Ending div and form */}
            </div>
            <div className='price-div'>
              <p>Price Details</p>
               <div className='price-div-list'>
                 <div>Product Charges</div>
                 <div>&#x20B9; {totalPrice}</div>
               </div>
               <div className='price-div-list'>
                 <div>Delivery Charges</div>
                 <div>+ &#x20B9; 0</div>
               </div>
               <div className='price-div-list'>
                 <div>COD Charges</div>
                 <div>+ &#x20B9; 0</div>
               </div>
               <div className='price-div-list'>
                 <div>1st Order Discount</div>
                 <div>- &#x20B9; 100</div>
               </div>
               <div className='total-price'>
                 <p>Order Total</p>
                 <p> &#x20B9; {totalPrice - 100}</p>
               </div>
                  <div style={{textAlign:"center", color:"gray", fontSize:"1.1vw"}}>Clicking on ‘Continue’ will not deduct any money</div>
                   <Link to="/products/payment" >
                  <button className='continue-btn'>Continue</button>
                  </Link>
            </div>
        </div>
      </div>
      </Addressdiv>
    )
 
}