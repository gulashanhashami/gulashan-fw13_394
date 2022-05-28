
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
const Stylediv=styled.div`
font-family    :sans-serif ;
.contain{width: 90%;
display: flex;
height: 40vh;
flex-direction: row;
justify-content: space-between;
/* border: 2px solid red; */
 }
  
table{
    width: 60%;
    margin-top: 10vh;
    /* border: 1px solid red; */
    margin-left: 8%;
}


tr{
  
    font-size: 1.2vw;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
}
tr:hover{
    // color: blue;
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
.imgtd{
    width: 35%;
    height: 12vh;
    /* border: 1px solid red; */
}
.img1{
    width: 80%;
    height: 10vh;
}
#prod_det{
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.items{
    width: 35%;
}
.rdiv{

    width: 30%;
    height: 80vh;
    margin-top: 10vh;
    /* border: 2px solid red; */
}
#btn1{
    width: 50%;
    height: 6vh;
    font-size: 1vw;
    color: white;
    background-color: green;
    border: 2px solid green;
    border-radius: .7vw;
}
#btn1:hover{
  background-color: white;
  color: red;
}
#cartoadd{
    font-size: 1vw;  
}
.dbtn{
    width: 90%;
    height: 3vh;
    font-size: .9vw;
    color:white;
    border: .1vw solid red;
    border-radius: .5vw;
    background-color: red;
}
.dbtn:hover{
    background-color: white;
    color: red;
}
.addprod{
    font-size: 1vw;

}
.remprod{
   font-size: 1vw;
}
.totalproducts{
    font-size: 1.5vw;
}
.box{
    width: 7vw;
    border: 1px solid grey;
}
.item{
    width: 53%;
    height: 15vh;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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



export const CartPage=()=>{

const [cartp, setCartp] =useState([])

const [products, setproducts]= useState(1)
 

 
 useEffect(()=>{
    getDdata();
   
}, [])

const getDdata=()=>{
    axios.get(`https://project-assignment-gul.herokuapp.com/carts`).then(({data})=>{
        //   console.log(data);
     setCartp(data);
     
    
    })
    
    
}
var sum1=0;
   
for(var i=0;i<cartp.length;i++){
    sum1=sum1+cartp[i].price;
}

// console.log(sum1)

var c=1;
 ;
// console.log(cartp)
let handleRemove = (_id) => {
    axios.delete(`https://project-assignment-gul.herokuapp.com/carts/${_id}`)
        .then((res) => {
          getDdata()
        
        })
        .catch((err) => {
           console.log(err);
        })
}
function paydata(){
localStorage.setItem("totalp", JSON.stringify(sum1))
}
// console.log(data)
    return (
      <Stylediv>
      <div className="contain">
          
       <table>
      <tbody>
     {cartp.map((list,sum=0)=>{
         return (
              
             <tr key={list._id}>
                 <td>{c++}</td>
                 <td className="imgtd"><img className="img1" src={list.image} alt="" /></td>
                 <td>
                     <div id="prod_det">
                    <p>{list.title}</p>
                    <p>Price: Rs.{list.price}</p>
                    <p>Category: {list.category}</p>
                     </div>
                     </td>
                 <td className="items"><div className="item">
    
    
</div></td>
                 <td><button className="dbtn" onClick={()=>{
                     var result = window.confirm("Are you sure, want to delete it?");
                     if (result) {
                     handleRemove(list._id);
                     sum1-=list.price
                     }
                 }}>delete</button></td>
             </tr>
             
         )
     })}
     </tbody>
 </table>
 <div className="rdiv">
<h1 className="totalproducts">Total: Rs.{sum1}</h1>
<br />
<button id="btn1" onClick={paydata}><Link id="cartoAdd" to={"/products/address"}>Continue</Link></button>
 </div>
 </div>
 
        </Stylediv>
    )
}