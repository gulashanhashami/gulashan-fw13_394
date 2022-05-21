
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Stylediv=styled.div`
font-family    :sans-serif ;
.contain{width: 90%;
display: flex;
height: 40vh;
flex-direction: row;
justify-content: space-between;
/* border: 2px solid red; */
 }
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
    color: red;
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
    font-size: 1vw;
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

var product1 = JSON.parse(localStorage.getItem("product"));
var sum1=0;

for(var i=0;i<product1.length;i++){
    sum1=sum1+product1[i].price;
}



export const CartPage=()=>{

const [cartp, setCartp] =useState([])
const [products, setproducts]= useState(1)
   const [totalproducts, setTotalproducts]= useState(sum1);


 
 useEffect(()=>{
    setCartp(product1)
 }, [])

   const handleClick=(value)=>{
       setproducts(products+value)
       setTotalproducts(totalproducts+value)
   }
var c=1;
 ;
// console.log(cartp)
const deleteCartp=(item)=>{ 
    let arr=[];                       
     cartp.forEach((e)=>{
        if(e.id!== item){
            arr.push(e)
        }
     });
     setCartp(arr);
}
function paydata(){
localStorage.setItem("totalp", JSON.stringify(totalproducts))
}
// console.log(data)
    return (
      <Stylediv>
           <div className="nav1">
               <h1>Cart Page</h1>
            </div>
            {(product1.length===0) ?(
                <h1>hello</h1>
            ):(
      <div className="contain">
          
       <table>
      <tbody>
     {cartp.map((list,sum=0)=>{
         return (
              
             <tr key={list.id}>
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
    
    <button onClick={()=>{
       handleClick(1)
       setTotalproducts(sum1=sum+products*list.price)
    }} className="addprod">
        +
    </button>
    <span><div className="box">Product: Rs.{sum+=products*list.price}</div></span>
    <button onClick={()=>{
        if(products>1){
            handleClick(-1)
        setTotalproducts(sum1=sum-list.price)
        }
        }} className="remprod">
        -
    </button>
    
</div></td>
                 <td><button className="dbtn" onClick={()=>{
                     deleteCartp(list.id)
                     setTotalproducts(sum1-=list.price)
                 }}>delete</button></td>
             </tr>
             
         )
     })}
     </tbody>
 </table>
 <div className="rdiv">
<h1 className="totalproducts">Total: Rs.{totalproducts}</h1>
<br />
<button id="btn1" onClick={paydata}><Link id="cartoAdd" to={"/products/address"}>Continue</Link></button>
 </div>
 </div>
)}  
        </Stylediv>
    )
}