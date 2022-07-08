
 import axios from "axios";
 import { useState } from "react";
 import styled from "styled-components";
 import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { registerStart, registerSuccess } from "../redux/userReducer/actions";
 const ResultDiv = styled.div`
 font-family:   Arial, sans-serif;
   
  height: 75vh;
  @media (max-width:415px){
    height:58vh;
 }
  margin:auto;
  // border:1px solid red;
  .outerbox{
    width: 34%;     
    height: 75vh;
    @media (max-width:415px){
      width: 75%;   
      height:55vh;

   }
    margin:auto;
    border-radius: .2vw;
    background-color: pink;
    border:.1vw solid pink;
  }
form{
  width: 80%;     
 height: 75%;
 margin-top:15%;
 margin-left:9.3%;
 background-color: pink;
  // border:1px solid red;
}

 input{
  font-size:1.2vw;
  @media (max-width:415px){
    font-size:2.7vw;
  }

       width: 97.8%;
       outline:none;
    height: 8%;
 }
 p{
  font-size:1.2vw;
  line-height:1vh;
  @media (max-width:415px){
    line-height:.5vh;
    font-size:2.8vw;
    line-height:.7vh;
 } 
       font-weight: bold;
      //  margin-right: 18%;
 }
  
  a{
    font-size:1.2vw;
    @media (max-width:415px){
      font-size:2.8vw;
    }
    margin-right: 13%;
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: red;
  }
  
   #btn{
       width: 100%;
       height: 9.5%;
       margin-top:8%;
       color: white;
       font-size:1.2vw;
       @media (max-width:415px){
        font-size:3.3vw;
      }
       font-weight: bold;
       background-color: green;
       border-radius: .3vw;
       border: .2vw solid green;
   }
   #btn:hover{
   background-color: white;
   color: red;
  //  font-size: 2.2vh;
   }
   

   .textsup{
    font-size:1.2vw;
    @media (max-width:415px){
      font-size:2.8vw;
    }
   }
   #sign{
     color: green;
   }
   #sign:hover{
     color: red;
   } 
 `;
export const Signup=()=>{
const [sign_data, setSdata]= useState({});
const [mobile, setmob] =useState();
const [pass, setPass] =useState();
let navigate=useNavigate();
const dispatch=useDispatch();

const {loading, data, error} =useSelector((store)=> store.data.data);

//**function to handle input elements**//
  const handleChange=(e)=>{
    var key=e.target.name;
    setSdata({
      ...sign_data,
      [key]:e.target.value
    })
  }

  //**code to handle rendering data on browser**//
    return (
        <div>
           <ResultDiv> 
           <div className="outerbox">
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(mobile!==10){
              alert("Please enter 10 digits mobile number");
              return;
          }
          if(pass<6){
            alert("Password must contain six or more characters");
            return;
          }
          dispatch(registerStart())
          axios.post(`https://new-updated.herokuapp.com/register`, sign_data).then(({data})=>{
            // console.log(res)
            dispatch(registerSuccess(data));
               if(loading){
                 console.log("hello")
                 return <h1 style={{color:"red"}}>loading...</h1>
                } 
                 else{
                 
              alert("You have registered successfully")
              navigate("/signin")
              
                 } 
             
          }).catch(error => {
            if(error.response.data.error){
               alert("User already exist")
            }
            console.log(error.response.data.message)
        });
        }
        }>
        <p>Enter full name</p>
            <input type="text" name="full_name" value={sign_data.full_name} placeholder="Enter full name" onChange={handleChange} required />
            <p>Enter mobile</p>
            <input type="number" name="mobile" value={sign_data.mobile} placeholder="Enter mobile" onChange={(e)=>{
              handleChange(e);
              setmob((e.target.value).length)
              }} required />
            <p>Enter email</p>
            <input type="email" name="email" value={sign_data.email}  placeholder="Enter email" onChange={handleChange} required />
            <p>Enter password</p>
            <input type="password" name="password" value={sign_data.password} placeholder="Enter a password" onChange={(e)=>{
              handleChange(e);
              setPass((e.target.value).length);
              }} required />
            {/* <br />
            <br /> */}
            <input id="btn" type="submit" value="Register" />
            <br />
            <p className="textsup">Already have an account? <span><Link id="sign" to={"/signin"}>Login now</Link></span></p>
        </form>
       </div>
        </ResultDiv>
        </div>
    )
}