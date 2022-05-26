
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const ResultDiv = styled.div`
font-family:   Arial, sans-serif;

height: 55vh;
 margin:auto;
//  border:1px solid red;
.innerbox{
  width: 33%;     
 height: 55vh;
 margin:auto;
 border-radius: .2vw;
 background-color: pink;
 border:.1vw solid pink;
}
form{
 width: 80%;     
 height: 70%;
 margin-top:15%;
 margin-left:9.3%;
 background-color: pink;
//  border:1px solid red;
}

input{
 font-size:1.2vw;
      width: 97.7%;
      outline:none;     
   height: 12%;
}
p{
 font-size:1.2vw;
}
 
 a{
   margin-right: 13%;
   text-decoration: none;
   font-size:1.2vw;
   color: white;
 }
 a:hover{
   color: red;
 }
 
  #btn{
      width: 100%;
      height: 14%;
      font-size:1.2vw;
      color: white;
      border-radius: .3vw;
      background-color: green;
      border: .2vw solid green;
  }
  #btn:hover{
  background-color: white;
  color: red;
  }
  .textsup{
    font-size:1.2vw;
    margin-left: 7% ;
  }
  #sign{
    color: green;
  }
  #sign:hover{
    color: red;
  }
`;
export const Signin=()=>{
 const [sign_data, setSdata]= useState({});

let navigate=useNavigate();

 const handleChange=(e)=>{
   var key=e.target.name;
   setSdata({
     ...sign_data,
     [key]:e.target.value
   })
 }
   return (
       <div>
          <ResultDiv> 

            <div className="innerbox">
       <form onSubmit={(e)=>{
          e.preventDefault();
          axios.post(`https://project-assignment-gul.herokuapp.com/login`, sign_data).then(({res})=>{
           //  console.log(res.data)
              alert("Login successfully")
             navigate("/")
             
          }).catch((error) => {
            if(error.response.data.error){
              alert("Please enter same email id and password")
            }
           console.log(error.response.data.message);
       })
       }}>
           <p>Enter email</p>
           <input type="email" name="email" value={sign_data.email}  placeholder="Enter email" onChange={handleChange} required />
           <p>Enter password</p>
           <input type="password" name="password" value={sign_data.password} placeholder="Enter a password" onChange={handleChange} required />
           <br />
           <br />
           <input id="btn" type="submit" value="Login" />
           <br />
           <p className="textsup">Create an account <span><Link id="sign" to={"/signup"}>Sign-Up now</Link></span></p>
       </form>
       </div>
       </ResultDiv>
       </div>
   )
}