
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
    @media (max-width:415px){
      width: 97%;
      flex-direction: column;
    }
    //  border: 1px solid red; 
  }
  .cart-item {
    width: 65%;
    height: 100vh;
    @media (max-width:415px){
      width: 99%;
      height:83vh;
  }
    //  border: 1px solid red; 
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
  
  .price-div {
    width: 30%;
    @media (max-width:415px){
      width: 97%;
      line-height: 2.3;
    }
    line-height: 2;
    //  border: 1px solid red; 
  }
  .price-div > p {
    color: #0f0c0c;
    font-size: 1.3vw;
    @media (max-width:415px){
      font-size: 4.7vw;
      font-weight:bold;
    }
  }
  .price-div-list {
    display: flex;
    justify-content: space-between;
    font-size: 1.3vw;
    @media (max-width:415px){
      font-size: 4.5vw;
    }
    color: #8f8a8a;
    // border: 2px solid green;
  }
  .total-price {
    display: flex;
    
    justify-content: space-between;
    color: #0f0c0c;
    font-size: 20px;
  }
  .total-price>p{
    font-size: 1.3vw;
    @media (max-width:415px){
      font-size: 4.5vw;
      font-weight:500;
    }
  }
  .term{
      text-align:center;
      color:grey;
      font-size: 1.1vw;
    @media (max-width:415px){
      font-size: 3.5vw;
      font-weight:500;
    }
  }
  .continue-btn {
    font-size: 1.5vw;
    width: 100%;
    @media (max-width:415px){
      font-size: 4vw;
      font-weight:800;
    }
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
  
  /* adding css */
  #left {
    float: left;
    margin-left: 30%;
    margin-top: 2vh;
    padding-left: 2%;
    width: 70%;
    height: 88vh;
    @media (max-width:415px){
      margin-left: .2%;
      width: 99%;
      height:90%;
  }
    //  border: 1px solid red; 
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  form{
      width: 98%;
      font-size: 1.2vw;
      text-align: left;
      @media (max-width:415px){
        width: 100%;
      }
      //  border: 1px solid red; 
  }
  
  h3 {
    font-size: 1.3vw;
    @media (max-width:415px){
      font-size: 4.5vw;
      // font-weight:bolder;
      margin-left: 5%;
    }
    margin-left: 30%;
  }
  h2{
    font-size: 1.3vw;
    @media (max-width:415px){
      font-size: 4vw;
    }
  }
  input {
    width: 97%;
    height: 5vh;
    @media (max-width:415px){
      width: 100%;
      height:5.8vh;
      font-size: 3.5vw;
  }
  font-size: 1vw;
    // margin-top: 2vh;
  }
  .city {
    width: 50%;
  }
  #btn {
      font-size: 1.2vw;
    margin-top: 6vh;
    @media (max-width:415px){
      margin-top:2vh;
      font-size: 3.8vw;
        font-weight:750;
  }
    color: white;
    border-radius: .5vw;
    border: 2px solid green;
    background-color: green;
  } 
  #btn:hover{
      background-color: white;
      color: red;
  }
form p{
  line-height: 5.3vh;
  @media (max-width:415px){
  
      font-size: 3.7vw;
      font-weight:bolder;
    line-height: 3.3vh;
}
}

`;
export const Address = ()=>{
  const [adData, setData] =useState({});
  const [checkData, setCheck] =useState([])

  let navigate=useNavigate();

  //**function to handle input elements**//
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

    //**code to handle rendering data on browser**//
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
                axios.post(`https://new-updated.herokuapp.com/address`, adData).then((res)=>{
                     
                // console.log(res)
                setCheck(res);
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
                  <div className='term'>Clicking on ‘Continue’ will not deduct any money</div>

                  <button className='continue-btn' onClick={()=>{
                     if(checkData.length===0){
                       alert("You need to fill address details");
                       return;
                     }else{
                        navigate("/products/payment")
                     }
                  }}>Continue</button>
            </div>
        </div>
      </div>
      </Addressdiv>
    )
 
}