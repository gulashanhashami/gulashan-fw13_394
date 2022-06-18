
import { useState } from 'react';
import {ReactComponent as CashLogo} from './svg/cashLogo.svg' ;
import {ReactComponent as PaymentLogo} from './svg/paymentLogo.svg' ;
import { useNavigate } from 'react-router-dom'; 
import styled from "styled-components";
import axios from 'axios';
const Stylediv=styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .navbar-div {
    width: 100%;
    margin: 0 0 1% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 2.5%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .navbar-div > div {
    flex: 1 2 auto;
  }
  .navbar-div > div:nth-child(1) img {
    width: 25%;
  }
  
  
  .cart-item {
    width: 60%;
    margin: auto;
   
    /* border: 1px solid red; */
  }
  .content-div {
    line-height: 2;
  }
  .span {
    font-size: 1.5vw;
  }
  .span-color {
    color: #8f8a8a;
  }
 
  .img-div {
    width: 7vmax;
  }
  .img-div > img {
    width: 100%;
  }
  
  
  .price-div {
    width: 35%;
    margin-left: 29%;
    height: 50vh;
    // border: 1px solid blue; 
    line-height: 5vh;
  }
  .price-div > p {
    color: #0f0c0c;
    font-size:2.1vw;
  }
  .price-div-list {
    display: flex;
    justify-content: space-between;
    font-size:1.5vw;
    color: #8f8a8a;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
    color: #0f0c0c;
    font-size:1.5vw;
  }
  .continue-btn {
    font-size: 1.5vw;
    width: 100%;
    border: 2px solid green;
    background-color: green;
    color: white;
    padding: 1.5%;
    border-radius: 5px;
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
  
  #cod_section {
    display: flex;
    flex-direction: row;
    background-color: rgb(231, 238, 255);
    margin-left: 15%;
    margin-top: 5%;
    padding: 15px;
    width: 60%;
  }
  
  .payment_text {
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.7px;
  }
  
  #paymentlogo_margin {
    margin-left: 45%;
  }
  
  #reselling_section {
    width: 60%;
  
    margin-top: 5%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    border: 1px solid rgb(190, 189, 189);
    margin-left: 15%;
    padding: 20px 20px;
    border: 1px solid red; 
  }
  
  #reselling_head {
    color: rgb(51, 51, 51);
    font-style: normal;
    font-weight: 700;
    font-size: 1.5vw;
    line-height: 28px;
  }
  
  #reselling_text {
    color: rgb(153, 153, 153);
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    margin-top: 2%;
  }
  
  #reselling_section_right {
    display: flex;
    flex-direction: row;
    margin-left: 70%;
    margin-top: -10%;
    display: flex;
    flex-direction: row;
    margin-left: 70%;
    margin-top: -10%;
  }
  
  .reselling_boolean_active {
    color: #f43397;
    width: 62px;
    height: 42px;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid rgb(244, 51, 151);
    background: rgb(253, 233, 242);
    padding: 8px 10px;
    margin: 6px 0px 6px 8px;
  }
  
  .reselling_boolean {
    color: rgb(163, 162, 162);
    width: 62px;
    height: 42px;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid rgb(240, 240, 240);
    background: rgb(249, 249, 249);
    padding: 8px 10px;
    margin: 6px 0px 6px 8px;
  }
  h1{
    font-size: 3.2vw;
  }
  #payment_head{
    font-size: 1.5vw;
    margin-top: 2%;
  }

`;

export const Payment = ()=>{
    const totalPrice = JSON.parse(localStorage.getItem("totalp"));
    let navigate = useNavigate();

//**code to handle rendering data on browser**//
    return <>
    <Stylediv>
       <div id="navbar-main">
        <div className='cart-products'>
            <div className='cart-item'>
              <div>
                <div id='payment_head'>  Payment Method</div>
              </div>

              <div id='cod_section'>
                  <div>
                      <CashLogo width={50}/>
                  </div>

                  <div className='payment_text'>
                         Cash on Delivery
                  </div>

                  <div id='paymentlogo_margin'>
                        <PaymentLogo/>
                  </div>
              </div>

              
              <div id='reselling_section'>
                  <div>
                  <div id='reselling_section_left'>
                      <div id='reselling_head'>
                          Reselling the Order?
                      </div>

                      <div id='reselling_text'>
                      Click on 'Yes' to add Final Price
                      </div>
                  </div>


                  <div id='reselling_section_right'>
                      <div className='reselling_boolean_active'>
                          No
                      </div>

                      <div className='reselling_boolean'>
                          Yes
                      </div>
                  </div>
                  </div>
              </div>

              </div>

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
                 <p> &#x20B9; {totalPrice-100}</p>
               </div>
                  <div style={{textAlign:"center",fontSize:"1.5vw", color:"gray"}}>Clicking on ‘Continue’ will not deduct any money</div>
                  <button className='continue-btn' onClick={()=>{
                    alert("Your Order is Successfully Placed")
                    navigate("/")
                  }}>Continue</button>
                 
            </div>
        </div>
      </Stylediv>
    </>
}