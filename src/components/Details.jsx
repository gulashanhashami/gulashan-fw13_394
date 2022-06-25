import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom"
import {detailsDataLoading, detailsDataSuccess} from "../redux/action";
import styled from "styled-components";
const Stylediv=styled.div`
font-family    :sans-serif ;
    #contain{
        width: 85%;
        height: 80vh;
        @media (max-width:400px){
            width: 95%;
            height:48vh;
        }
        padding-top: 5vh;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        //  border: 1px solid red; 
    }
    #imgbox{
        width: 55%;
        height: 100%;
        
        // border: 1px solid red; 
    }
    #textbox1{
        width: 42%;
        height: 100%;
        display: flex;
        flex-direction: column;
        // border: 1px solid black; 
    }
    #textbox{
        width: 100%;
        height: 83%;
        @media (max-width:400px){
           overflow-x:scroll;
        }
        text-align: left;
        //  border: 1px solid red; 
    }
    #tit{
        font-size: 1.7vw;
        @media (max-width:400px){
            font-size: 3.7vw;
        }
        font-weight: bold;
    }
    p{
        font-size: 1.5vw;
        @media (max-width:400px){
            font-size: 3.5vw;
        }
    }
    .des{
        font-size: 1.2vw;
        @media (max-width:400px){
            font-size: 3.3vw;
            line-height:2.3vh;
        }
    }
    span{
        font-size: 1.5vw;
        @media (max-width:400px){
            font-size: 3.5vw;
        }
        font-weight: bold;
    }
    
    #img1{
       width: 100%;
       height: 100%;
    }
    .btn1{
    font-size: 1vw;
    width: 40%;
    height: 6.2vh;
    @media (max-width:400px){
        width: 48%;
        height: 4.8vh;
        font-size: 3.5vw;
    }
    color: white;
    background-color: green;
    border-radius: .7vw;
    border: 2px solid green;
}
.btn1:hover{
   background-color: white;
   color: red;
}
.btndiv{
    width: 100%;
    height: 15%;
    // float:right;
    // margin-right:10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    //  border: 2px solid green; 
}
a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: red;
}
`;


export const Detalis=()=>{
   let {_id}=useParams();
   const {user,loading, data, error} =useSelector((store)=> store);
  const dispatch=useDispatch();
  let navigate=useNavigate();
//**use useEffect() hook to call the api**//
   useEffect(()=>{
       getData();
   }, [])

//**function to fetch the data from api**//
   const getData=()=>{
    dispatch(detailsDataLoading());
       axios.get(`https://new-updated.herokuapp.com/products/${_id}`).then(({data})=>{
        //    console.log(data.products);
        dispatch(detailsDataSuccess(data.products))
       })
   }


//***function to handle add to cart button***//
   const Handleitem = (_id) => {
    axios.get(`https://new-updated.herokuapp.com/products/${_id}`).then(({data}) => {
                //  console.log(data.products)
              axios.post(`https://new-updated.herokuapp.com/carts`, data.products).then(data => {
                    //    console.log(data)
                   
                });
              
            })
}

//console.log(user.isAuth);

//**code to handle rendering data on browser**//
if(loading){
    return (
       <h1 style={{marginLeft:"35%", marginTop:"11%", fontSize:"1.5vw"}}>Loading...</h1>
    )
}else{
    return (
        <Stylediv>
            {/***code, to show the product details on browser***/}
        <div id="contain">
       <div id="imgbox">
           <img id="img1" src={data.data.data.image} alt="" />
       </div>
       <div id="textbox1">
       <div id="textbox">
           <p id="tit">{data.data.data.title}</p>
           <p><span>Price</span>: Rs.{data.data.data.price}</p>
           <p><span>Rating</span>: {data.data.data.rate}</p>
           <p><span>Category</span>: {data.data.data.category}</p>
           <p className="des"><span>Description</span>: {data.data.data.description}</p>
         
       </div>
       <div className="btndiv">
          <button className="btn1" onClick={()=>{
            if(user.isAuth){
              var result = window.confirm("Are you sure, want to add to cart?");
              if (result) {
              Handleitem(data.data.data._id)
              }
            }else{
                alert("Please, login in your account");
                navigate("/signin")
            }
              }}>Add To Cart</button>
          <button className="btn1"><Link to={"/products/cart"}>Go To Cart</Link></button>
          </div>
         </div>
        </div>
        
        </Stylediv>
    )}
}