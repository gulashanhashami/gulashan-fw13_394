
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartDataLoading, cartDataSuccess } from "../redux/action";
// import { useRef } from "react";
const Stylediv=styled.div`
font-family    :sans-serif ;
.contain{width: 90%;
display: flex;
height: 40vh;
@media (max-width:400px){
    width: 95%;
    height:23vh;
}
flex-direction: row;
justify-content: space-between;
// border: 2px solid red; 
 }
  
table{
    width: 60%;
    @media (max-width:400px){
        width: 67.5%;
        margin-left: 5.4%;
    }
    // border: .1vw solid grey; 
    margin-left: 8%;
}
td{
    border: .1vw solid pink;
}


tr{
  
    font-size: 1.2vw;
    @media (max-width:400px){
        font-size: 3.2vw;
    }
    background-color: pink;
    border: .1vw solid grey; 
  
}
tr:hover{
    // color: blue;
}
 

a:hover{
    color: green;
}


.imgtd{
    width: 35%;
    height: 22vh;
    @media (max-width:400px){
        height:11vh;
        width: 40%;
    }
    //  border: 1px solid red;
}
.img1{
    width: 80%;
    height: 33vh;
    @media (max-width:400px){
        height:18vh;
    }
}
#prod_det{
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //  border: 1px solid red; 
}
.items{
    width: 15%;

}
.rdiv{

    width: 25%;
    height: 80vh;
    @media (max-width:400px){
        height:45vh;
    }
    margin-top: 4vh;
    //  border: 2px solid red; 
}
#btn1{
    // width: 80%;
    height: 6vh;
    @media (max-width:400px){
        height:12%;
        font-size: 3.5vw;
        font-weight:800;
    }
    padding-right:9%;
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
    @media (max-width:400px){
        height:10%;
        font-size: 2.8vw;
        font-weight:800;
    }
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
    @media (max-width:400px){
        font-size:3.3vw;
        font-weight:bolder;
    }

}
.box{
    width: 7vw;
    border: 1px solid grey;
}

a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: red;
}
.tItems{
   
    line-height:.1vh;
    font-size:1.5vw;
    @media (max-width:400px){
        font-size:3vw;
        font-weight:bolder;
    }
    margin-left:1%;
}
.tdiv{
     width: 53.6%;
     @media (max-width:400px){
        width: 62.4%;
        margin-left:5.6%;
     }
    margin-top: 6vh;
    color:white;
    background-color: black;
    border: .1vw solid black;
    margin-left:7.3%;
}
.cartShow{
    margin-top:10%;
    font-size:1.5vw;
    margin-left:30%;
}
.count{
   padding:1.7%;
    font-size:1.3vw;
    @media (max-width:400px){
        padding:15%;
        font-size:4vw;
    }
}
.cnum{
    @media (max-width:400px){
        font-size:3vw;
    }
}
`;



export const CartPage=()=>{
    

const [cartp, setCartp] =useState([])
const [time, setTime]= useState(10); 
// const [products, setproducts]= useState(1)
const {user,loading, data, error} =useSelector((store)=> store);
const [tot, setTot]= useState(0);
const dispatch= useDispatch();

// let ref=useRef();
const navigate =useNavigate();

var n=cartp.length;

var sum1=0
    for(var i=0;i<cartp.length;i++){
        sum1=sum1+cartp[i].price;
      }

 useEffect(()=>{

    getDdata();
    const id=setInterval(()=>{
        setTime((prev)=>{
            if(prev===0){
                clearInterval(id);
               
                return(
                    <p style={{color:"red", fontSize:"1.5vw"}}>You need to add items in your shopping cart</p>
                );
            }
            return prev-1;
        })
        
        }, 1000);
        return ()=> {
            clearInterval(id);
        }
}, [])

//** function to get the data from api**//
const getDdata=()=>{
  dispatch(cartDataLoading());
    axios.get(`https://new-updated.herokuapp.com/carts`).then(({data})=>{
        //   console.log(data);
        dispatch(cartDataSuccess(data))
     setCartp(data);
   
    
    })
    
    
}
// console.log(user.isAuth)
var c=1;
 ;

//**function to handle remove a product from ui and database**//
let handleRemove = (_id) => {
    axios.delete(`https://new-updated.herokuapp.com/carts/${_id}`)
        .then((res) => {
          getDdata()
        
        })
        .catch((err) => {
           console.log(err);
        })
}
function paydata(){
localStorage.setItem("totalp", JSON.stringify((tot===0)?sum1 : tot+sum1))
}


//**code to handle rendering data on browser**//
    return (
      <Stylediv>
          <div className="tdiv"><p className="tItems">Total items : {n}</p></div>
      <div className="contain">
         {(cartp.length===0)?(
             <h1 className="cartShow">Loading... {time}</h1>
         ) : (
            //***map the data and show on browser**//
       <table>
      <tbody>

     {data.data.data.map((list,sum=0)=>{
         return (
              
             <tr key={list._id}>
                 <td className="cnum">{c++}</td>
                 <td className="imgtd"><img className="img1" src={list.image} alt="" /></td>
                 <td>
                     <div id="prod_det">
                    <p>{list.title}</p>
                    <p>Price: Rs.{list.price}</p>
                    <p>Category: {list.category}</p>
                     </div>
                     </td>
                 <td className="items">
                 
                    <div className="items1">
   
    <button className="count" onClick={()=>{
         setTot(sum1);
     
        var am=tot;
        list.amount=list.amount+1;
        if(list.amount===2){
            setTot(sum1)  
        }
        setTot(am=am+list.price)
       
        }}>
        +
    </button>
    <span><button className="count">{list.amount}</button></span>
    <button className="count" onClick={()=>{
        var am=tot;
        if(list.amount>1){
            list.amount=list.amount-1;
           
            setTot(am=am-list.price)
        }
        }}>
        -
    </button>
</div>
</td>

                 <td><button className="dbtn" onClick={()=>{
                     if(user.isAuth){
                     var result = window.confirm("Are you sure, want to delete it?");
                     if (result) {
                       
                        var am=tot;
                        // ref=list.amount;
                        setTot(0)
                     handleRemove(list._id);
                     

                     }
                    }else{
                        alert("Please, login in your account");
                        navigate("/signin")
                    }

                 }}>Delete</button></td>
             </tr>
             
         )
     })}
     </tbody>
 </table>
)}
 <div className="rdiv">
<h1 className="totalproducts">Total: Rs.{(tot===0)?sum1 : tot+sum1}</h1>
<br />
<button id="btn1" onClick={()=>{
     if(user.isAuth){
    if(cartp.length===0){
        alert("Sorry!, you can't move to next page because your cart is empty.");
        return;
    }else{
    paydata()
     navigate("/products/address")
    }
}else{
    alert("Please, login in your account");
    navigate("/signin")
}

    }}>Continue</button> 
 </div>
 </div>
 
        </Stylediv>
    )
}