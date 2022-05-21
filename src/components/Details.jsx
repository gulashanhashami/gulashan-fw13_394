import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { getDataSuccess } from "../redux/action";
import styled from "styled-components";
const Stylediv=styled.div`
    #contain{
        width: 85%;
        height: 80vh;
        margin-top: 8vh;
        margin-left: 8%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* border: 1px solid red; */
    }
    #imgbox{
        width: 55%;
        height: 100%;
        
        /* border: 1px solid red; */
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
   let {id}=useParams();
   const {loading, data, error} =useSelector((store)=> store.data);
  const dispatch=useDispatch();
   useEffect(()=>{
       getData();
   }, [])

   const getData=()=>{
       axios.get(`https://project-db123.herokuapp.com/products/${id}`).then(({data})=>{
        //    console.log(data);
        dispatch(getDataSuccess(data))
       })
   }
//    console.log(data);
    return (
        <Stylediv>
        <div id="contain">
       <div id="imgbox">
           <img id="img1" src={data.image} alt="" />
       </div>
       <div id="textbox">
           <p id="tit">{data.title}</p>
           <p><span>Price</span>: {data.price}</p>
           <p><span>Rating</span>: ${data.rate}</p>
           <p><span>Category</span>: {data.category}</p>
           <p><span>Description</span>: {data.description}</p>
          <div className="btndiv">
          <button className="btn1"><Link to={"/products/cart"}>Buy now</Link></button>
          <button className="btn1"><Link to={"/products/cart"}>Go To Cart</Link></button>
          </div>
       </div>

        </div>
        </Stylediv>
    )
}