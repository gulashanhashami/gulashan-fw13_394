
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuccess } from "../redux/userReducer/actions";
const ResultDiv = styled.div`
font-family:   Arial, sans-serif;

height: 55vh;
@media (max-width:415px){
  height:45vh;
}
 margin:auto;
//  border:1px solid red;
.innerbox{
  width: 33%;     
 height: 55vh;
 @media (max-width:415px){
  width: 70%; 
    height:43vh;
 }
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
 @media (max-width:415px){
  font-size:2.7vw;
}
      width: 97.7%;
      outline:none;     
   height: 12%;
}
p{
 font-size:1.2vw;
 line-height: 1.5vh;
 @media (max-width:415px){
  font-size:2.8vw;
}

}
 
 a{
   margin-right: 13%;
   text-decoration: none;
   font-size:1.2vw;
   @media (max-width:415px){
    font-size:2.8vw;
  }
   color: white;
 }
 a:hover{
   color: red;
 }
 
  #btn{
      width: 100%;
      height: 14%;
      margin-top:8%;
      font-size:1.2vw;
      @media (max-width:415px){
        font-size:3.3vw;
      }
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
    @media (max-width:415px){
      font-size:2.8vw;
    }
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
 const dispatch=useDispatch();

 const {loading, data, error} = useSelector((store)=>store.data.data);
let navigate=useNavigate();

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

            <div className="innerbox">
       <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(loginStart())
          axios.post(`https://new-updated.herokuapp.com/login`, sign_data).then(({data})=>{
           //  console.log(res.data)
           dispatch(loginSuccess(data));
           if(loading){
             return <h1 style={{color:"red"}}>loading...</h1>
            } 
             else{
              alert("Login successfully")
             navigate("/")
             }
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
          
           <input id="btn" type="submit" value="Login" />
           <br />
           <p className="textsup">Create an account <span><Link id="sign" to={"/signup"}>Sign-Up now</Link></span></p>
       </form>
       </div>
       </ResultDiv>
       </div>
   )
}