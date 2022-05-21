import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getDataLoading, getDataSuccess } from "../redux/action";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Stylediv=styled.div`
    font-family: sans-serif;
    .nav1{
       width: 100%;
       height: 6vh;
       margin-top: 1vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       padding-left:8%;
 
       background-color: #ffeded;
   } 
   .filter{
      
       color: white;
       width: 17%;
       height: 3vh;
       font-size:1.2vw;
    margin-right: 18%;
    border: 2px solid teal;
    background-color: teal;
    border-radius: .3vw;
   } 
   .sort{
    width: 17%;
       height: 3vh;
       font-size:1.2vw; 
       color: white;
       border: 2px solid teal;
       background-color: teal;
       border-radius: .3vw;
   }
   .sbox{
       display: flex;
       flex-direction: row;
    width: 45%;
       height: 4.3vh; 
       /* border: 2px solid red; */
   }
   .in{
       width: 88%;
       height: 3.5vh;
       outline: none;
   }
   #btn{
       width: 10%;
       height: 4.3vh;
       color: white;
       font-size: 1vw;
       background-color: black;
       border: 2px solid black;
   }
   #btn:hover{
     background-color: white;
     color: red;
   }

.box1{
    width:85%;
    height:90vh;
    display: grid;
    grid-template-columns: repeat(4, 22%);
    grid-gap: 5%;
    padding-left: 5%;
    overflow-y: scroll;
    margin: auto;
    margin-top: 5vh;
    /* border: 1px solid red; */
}
a{
    text-decoration: none;
    color: grey;
}
p{
    font-size: 1vw;
    line-height: 2.4vh;
}

.card{
    width: 95%;
    height: 62vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
    padding-bottom: 2%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* border: 1px solid red; */
}
.img1{
    width: 100%;
    height: 71%;
}
#btndiv1{
    width: 93%;
    height: 4vh;
    vertical-align:bottom;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.btn1{
    font-size: .8vw;
    width: 48%;
    height: 3.8vh;
    color: white;
    background-color: green;
    border-radius: .7vw;
    border: 2px solid green;
}
.btn1:hover{
   background-color: white;
   color: red;
}
#cartp{
    color: white;
}
#cartp:hover{
color: red;
}
`;



export const Home=()=>{
// const [pData, setData] =useState([]);
const {loading, data, error} =useSelector((store)=> store.data);
const dispatch=useDispatch();

useEffect(()=>{
    getDdata();
}, [])

const getDdata=()=>{
    axios.get(`https://project-db123.herokuapp.com/products`).then(({data})=>{
          
     dispatch(getDataSuccess(data));
        // console.log(data);
    })
}
function handlesort1(e){
    if(e.target.value==="low"){
    var arr1=data.sort((a,b)=> a.id-b.id);
    // console.log(arr1)
    dispatch(getDataSuccess(arr1))
    }
    if(e.target.value==="high"){
        var arr2=data.sort((a,b)=> b.id-a.id);
        // console.log(arr2)
        dispatch(getDataSuccess(arr2))
        }
}
function handlesort2(e){
    if(e.target.value==="low1"){
    var arr1=data.sort((a,b)=> a.price-b.price);
    // console.log(arr1)
    dispatch(getDataSuccess(arr1))
    }
    if(e.target.value==="high1"){
        var arr2=data.sort((a,b)=> b.price-a.price);
        // console.log(arr2)
        dispatch(getDataSuccess(arr2))
        }
}

const Handleitem = (id) => {
    axios.get(`https://project-db123.herokuapp.com/products/${id}`).then(({ data }) => {
        let item1 = JSON.parse(localStorage.getItem("product")) || [];
        item1.push(data);
        console.log(item1)
        localStorage.setItem("product", JSON.stringify(item1))
    });
}


// console.log(data)
    return (
      <Stylediv>
   <div className="nav1">
               <div className="sbox">
                    <input className="in" type="text" />
                <button id="btn">Search</button>
                </div>
                <select name="" onChange={handlesort1} className="sort">
                    <option value="">Sort by S.No.</option>
                    <option value="low">Low to high</option>
                    <option value="high">High to low</option>
                </select>
                <select name="" onChange={handlesort2} className="filter">
                    <option value="">Sort by price</option>
                    <option value="low1">Low to high</option>
                    <option value="high1">High to low</option>
                </select>
            </div>

        <div className="box1">
     {data.map((item)=>{
         return (
             <div key={item.id} className="card">
             <Link to={`/products/${item.id}/details`} className="img1">
                 <img className="img1" src={item.image} alt="" />
                 </Link>
             <p>{item.title}</p>
             <p>Price: Rs.{item.price}</p>
            <div id="btndiv1">
            <button className="btn1" onClick={()=>{Handleitem(item.id)}}>Add To Cart</button>
            <button className="btn1" onClick={()=>{Handleitem(item.id)}}><Link id="cartp" to={"/products/cart"}>Buy now</Link></button>
            </div>
             </div>
         )
     })}

        </div>
        </Stylediv>
    )
}