import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getDataLoading, getDataSuccess } from "../redux/action";
import styled from "styled-components";
import { Link, useNavigate  } from "react-router-dom";

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
    // padding-left: 5%;
    overflow-y: scroll;
    margin: auto;
    margin-top: 5vh;
    // border: 1px solid red;
}
a{
    text-decoration: none;
    color: grey;
}
p{
    font-size: 1vw;
}

.card{
    width: 95%;
    height: 50vh;
    @media (max-width:400px){
        height:20vh;
    }
   display: flex;
   flex-direction: column;
   justify-content: space-between;
    padding-bottom: 5%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    // border: 1px solid red; 
}
.img1{
    width: 100%;
    height: 82%;
}
#btndiv1{
    width: 93%;
    height: 7%;
    @media (max-width:400px){
        width: 100%;
        height:8%;
        margin-left:0%;
    }
    // vertical-align:bottom;
    // margin-top: 10% ;
    display: flex;
    margin-left:4%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    //  border: 1px solid red; 
}
.btn1{
    font-size: .8vw;
    width: 48%;
   
    height: 90%;
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
.tit{
    margin-left:4%;
    line-height:3vh;
    @media (max-width:400px){
        line-height:1vh;
    }
}
.pric{
    margin-left:4%;
    line-height:.5vh;
}
.leftsort{
    width:12%;
    height:90vh;
    margin-left:.5%;
    float:left;
    display:flex;
    flex-direction: column;
    align-items: left;
    border-right: .1vw solid grey;
}
.sortbyprice{
    height:5%;
    @media (max-width:400px){
        height:3%;
        font-size: 1vw;
    }
    margin-top:6%;
    color:white;
    font-size: 1.2vw;
    background-color: teal;
    border-radius:.3vw;
}
`;



export const Products=()=>{
    const [time, setTime]= useState(10); 
    const [sdata, setSdata]= useState([]);
const {loading, data, error} =useSelector((store)=> store);
const dispatch=useDispatch();
let navigate=useNavigate();

useEffect(()=>{
    getDdata();
    const id=setInterval(()=>{
        setTime((prev)=>{
            if(prev===0){
                clearInterval(id);
               
                return(
                    <p style={{color:"red", fontSize:"1.5vw"}}>Refresh the page</p>
                );
            }
            return prev-1;
        })
        
        }, 1000);
        return ()=> {
            clearInterval(id);
        }

   
    
}, [])

//function, to fetch the data from api
const getDdata=()=>{
    dispatch(getDataLoading());
    axios.get(`https://project-assignment-gul.herokuapp.com/products`).then(({data})=>{
          
        dispatch(getDataSuccess(data));
        // console.log(data);
        setSdata(data)
    }).catch((error)=>{
        console.log(error.response)
    })
}

//*function to handle add to cart functionality*//
const Handleitem = (_id) => {
    axios.get(`https://project-assignment-gul.herokuapp.com/products/${_id}`).then(({data}) => {
                //  console.log(data.products)
              axios.post(`https://project-assignment-gul.herokuapp.com/carts`, data.products).then(data => {
                    //    console.log(data)
                   
                }).catch((error)=>{
                    console.log(error.response)
                })
              
            }).catch((error)=>{
                console.log(error.response)
            })
}
//**functions to handle sort functionality**//
 const handleChange=(e)=>{
    if(e.target.value==="low"){
        var arrs1=sdata.sort((a,b)=> a.price-b.price);
        dispatch(getDataSuccess(arrs1));
        // console.log(arrs1)
    }
    if(e.target.value==="high"){
        var arrs2=sdata.sort((a,b)=> b.price-a.price);
        dispatch(getDataSuccess(arrs2));
        // console.log(arrs2)
    }
 }

 const handleChange1=(e)=>{
    if(e.target.value==="ascending"){
        var arrs3=sdata.sort((a,b)=> (a.title>b.title) ? 1 : -1);
        dispatch(getDataSuccess(arrs3));
        // console.log(arrs3)
    }
    if(e.target.value==="descending"){
        var arrs4=sdata.sort((a,b)=> (b.title>a.title) ? 1 : -1);
        dispatch(getDataSuccess(arrs4));
        // console.log(arrs4)
    }
 }

//**code to handle rendering data on browser */
if(data.data.loading){
    return (
       <h1 style={{marginLeft:"35%",  marginTop:"11%", fontSize:"1.5vw"}}>Loading... {time}</h1>
    )
}else{
      return (
      <Stylediv>
      <div className="leftsort">
      <select name="" className="sortbyprice" onChange={handleChange}>
        <option value="">Sort by price</option>
        <option value="low">Low to high</option>
        <option value="high">High to low</option>
      </select>

      <select name="" className="sortbyprice" onChange={handleChange1}>
        <option value="">Alfabatical order</option>
        <option value="ascending">A to Z</option>
        <option value="descending">Z to A</option>
      </select>
      </div>
        <div className="box1">
            {/* code for mapping the data to show on browser */}
     {data.data.data.length&&data?.data?.data.map((item)=>{
         return (
             <div key={item._id} className="card">
             <Link to={`/products/${item._id}`} className="img1"><img className="img1" srcSet={item.image} alt="" />
             <p className="tit">{item.title}</p>
             <p className="pric">Price: Rs.{item.price}</p></Link>
            <div id="btndiv1">
            <button className="btn1" onClick={()=>{
                var result = window.confirm("Are you sure, want to add it to cart?");
                if (result) {
                Handleitem(item._id);
                }
                }}>Add To Cart</button>
            <button className="btn1" onClick={()=>{
                var result = window.confirm("Make sure, first you add it to cart");
                if (result) {
                    navigate("/products/cart")  
                }
            }}>
                Buy now</button>
            </div>
             </div>
         )
     })}

        </div>
        </Stylediv>
    )}
}