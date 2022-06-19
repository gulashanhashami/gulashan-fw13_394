import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import {detailsDataLoading, detailsDataSuccess} from "../redux/action";
import styled from "styled-components";
const Stylediv=styled.div`
font-family    :sans-serif ;
    #contain{
        width: 85%;
        height: 80vh;
        @media (max-width:400px){
            height:48vh;
        }
        margin-top: 8vh;
        margin-left: 8%;
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
    #textbox{
        width: 42%;
        height: 100%;
        
        text-align: left;
        /* border: 1px solid red; */
    }
    #tit{
        font-size: 1.7vw;
        font-weight: bold;
    }
    p{
        font-size: 1.5vw;
    }
    .des{
        font-size: 1.2vw;
    }
    span{
        font-size: 1.5vw;
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
        height:3vh;
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
    width: 75%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 2px solid green; */
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
   const {user,loading, data, error} =useSelector((store)=> store.data.data);
  const dispatch=useDispatch();

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

//    console.log(data.data);

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
           <img id="img1" src={data.image} alt="" />
       </div>
       <div id="textbox">
           <p id="tit">{data.title}</p>
           <p><span>Price</span>: Rs.{data.price}</p>
           <p><span>Rating</span>: {data.rate}</p>
           <p><span>Category</span>: {data.category}</p>
           <p className="des"><span>Description</span>: {data.description}</p>
          <div className="btndiv">
          <button className="btn1" onClick={()=>{
            if(user.isAuth){
              var result = window.confirm("Are you sure, want to add to cart?");
              if (result) {
              Handleitem(data._id)
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