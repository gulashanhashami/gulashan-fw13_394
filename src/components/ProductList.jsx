import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getDataLoading, getDataSuccess } from "../redux/action";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Stylediv=styled.div`
font-family    :sans-serif ;
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
table{
    width: 86%;
    margin-top: 10vh;
   
    margin-left: 8%;
}

tr{
    height: 20vh;
    font-size: 1.2vw;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
}
tr:hover{
    color: red;
}
 thead{
     height: 9vh;
     font-size: 2.5vh;
  
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
   
}
a{
    text-decoration: none;
    margin-left: 8%;
    font-size: 2.5vh;
}
a:hover{
    color: green;
}

.last{
   padding: 2vw;
}

`;



export const ProductList=()=>{
const {loading, data, error} =useSelector((store)=> store.data);
const dispatch=useDispatch();

useEffect(()=>{
    getDdata();
}, [])

const getDdata=()=>{
    axios.get(`http://localhost:3001/products`).then(({data})=>{
          
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

       <table>
        <thead>
            <th>S.No.</th>
            <th>Product's name</th>
            <th>Price</th>
            <th>Category</th>    
            <th>Show</th>        
        </thead>
      <tbody>
     {data.map((list)=>{
         return (
            
             <tr key={list.id}>
                 <td>{list.id}</td>
                 <td>{list.title}</td>
                 <td className="last">Rs.{list.price}</td>
                 <td className="last">{list.category}</td>
                 <td className="last"><Link to={`/products/${list.id}/details`}>Show</Link></td>
             </tr>
             
         )
     })}
     </tbody>
 </table>
        </Stylediv>
    )
}