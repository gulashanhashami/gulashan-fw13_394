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
    @media (max-width:400px){
        width:81%;
        grid-template-columns: repeat(2, 48%);
        grid-gap: 3%; 
    }
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
    @media (max-width:400px){
     
        font-size: 2.7vw;
    }
}

.card{
    width: 95%;
    height: 50vh;
    @media (max-width:400px){
        width: 100%;
        height:30vh;
        padding-bottom: 3%;
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
    @media (max-width:400px){
        height: 80%;
    }
}
#btndiv1{
    width: 93%;
    height: 7%;
    @media (max-width:400px){
        width: 100%;
        height:10%;
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
    @media (max-width:400px){
        font-size: 2.5vw;
    }
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

.tit{
    margin-left:4%;
    line-height:3vh;
    @media (max-width:400px){
        line-height:1.5vh;
    }
}
.pric{
    margin-left:4%;
    line-height:0vh;
}
.leftsort{
    width:14%;
    @media (max-width:400px){
        width:17%;
    }
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
        font-size: 3.6vw;
        border-radius:.5vw;
    }
    margin-top:6%;
    color:white;
    font-size: 1.2vw;
    background-color: teal;
    border-radius:.3vw;
}
// ******************//
.pagination {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
  .paginationButtonPrevious,
  .paginationButtonNext {
    color: green;
    font-weight:bold;
    padding-left: 2%;
    padding-top: 5px;
  }
  .pageNumber {
    margin-left: 2%;
    padding: 0.5% 1%;
    border-radius: 50%;
    border: none;
    background-color: white;
    /* width: 15px;
    height: 19px; */
    text-align: center;
  }
  .paginationButtonPrevious:hover,
  .paginationButtonNext:hover {
    cursor: pointer;
  }
  .pageNumber:hover {
    cursor: pointer;
    color: white;
    background-color: green;
  }
  .sbox{
    width:66%;
    height:4.5vh;
    // padding-left: 1%;
    outline: none;
    font-size: 1.2vw;
    border: .1vw solid grey;
    background-color: rgba(249, 249, 249, 255);
    @media (max-width:400px){
        width:57%;
        height:2.5vh;
        font-size: 2.2vw;
        top: -10.8vh;
    }
    position: relative;
    top: -11.7vh;

    right: -13.5%;
  }
  .sbtn1{
    width:6%;
    height:5vh;
    @media (max-width:400px){
        width:11.9%;
        height:3.1vh;
        right: -42%;
        top: -14vh;
        font-size: 2.5vw;
        border: .1vw solid black;
    }
    font-size: .8vw;
    position: relative;
    top: -16.7vh;
    right: -59.4%;
    color: white;
    background-color: black;
  }
  .sbtn1:hover{
    color:red;
  }
`;



export const Products=()=>{
    const [time, setTime]= useState(10); 
    const [sdata, setSdata]= useState([]);
    const [page, setPage] =useState(1);
    const [searData, setSearData] =useState("");
const {user,loading, data, error} =useSelector((store)=> store);

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

   
    
}, [page])

//**function, to fetch the data from api**//
const getDdata=()=>{
    setTime(10)
    dispatch(getDataLoading());
    axios.get(`https://new-updated.herokuapp.com/products?page=${page}&size=20`).then(({data})=>{
          
        dispatch(getDataSuccess(data.products));
        // console.log(data.products);
        setSdata(data.products)
    }).catch((error)=>{
        console.log(error.response)
    })
}


//**function to handle add to cart functionality**//
const Handleitem = (_id) => {
    axios.get(`https://new-updated.herokuapp.com/products/${_id}`).then(({data}) => {
                //  console.log(data.products)
              axios.post(`https://new-updated.herokuapp.com/carts`, data.products).then(data => {
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
       
    }
    if(e.target.value==="high"){
        var arrs2=sdata.sort((a,b)=> b.price-a.price);
        dispatch(getDataSuccess(arrs2));
      
    }
 }

 const handleChange1=(e)=>{
    if(e.target.value==="ascending"){
        var arrs3=sdata.sort((a,b)=> (a.title>b.title) ? 1 : -1);
        dispatch(getDataSuccess(arrs3));
    
    }
    if(e.target.value==="descending"){
        var arrs4=sdata.sort((a,b)=> (b.title>a.title) ? 1 : -1);
        dispatch(getDataSuccess(arrs4));
  
    }
 }

 function searchfun(){
    var arrsearch=sdata.filter((value)=>{
        if(searData===""){
            return value;
        }
        else if(value.title.toLowerCase().includes(searData.toLowerCase())){
            return value;
        }
    })
    dispatch(getDataSuccess(arrsearch));
 }
//console.log(user.isAuth)

//**code to handle rendering data on browser**//
if(data.data.loading){
    return (
       <h1 style={{marginLeft:"35%",  marginTop:"11%", fontSize:"2vw"}}>Loading... {time}</h1>
    )
}else{
      return (
      <Stylediv>
        <input className="sbox" type="text" onChange={(e)=>{setSearData(e.target.value)}} placeholder="Search products" /><button className="sbtn1" onClick={searchfun}>Search</button>
      <div className="leftsort">
      <select name="" className="sortbyprice" onChange={handleChange}>
        <option value="">Sort by price</option>
        <option value="low">Low to high</option>
        <option value="high">High to low</option>
      </select>

      <select name="" className="sortbyprice" onChange={handleChange1}>
        <option value="">Alphabetical order</option>
        <option value="ascending">A to Z</option>
        <option value="descending">Z to A</option>
      </select>
      </div>
        <div className="box1">
            {/**code for mapping the data to show on browser**/}
     {data.data.data.length&&data?.data?.data.map((item)=>{
         return (
             <div key={item._id} className="card">
             <Link to={`/products/${item._id}`} className="img1"><img className="img1" srcSet={item.image} alt="" />
             <p className="tit">{item.title}</p>
             <p className="pric">Price: Rs.{item.price}</p></Link>
            <div id="btndiv1">
            <button className="btn1" onClick={()=>{
                if(user.isAuth){
                var result = window.confirm("Are you sure, want to add it to cart?");
                if (result) {
                Handleitem(item._id);
                }
            }else{
                alert("Please, login in your account");
                navigate("/signin")
            }
                }}>Add To Cart</button>
            <button className="btn1" onClick={()=>{
                 if(user.isAuth){
                var result = window.confirm("Make sure, first you add it to cart");
                if (result) {
                    navigate("/products/cart")  
                }
            }else{
                alert("Please, login in your account");
                navigate("/signin")
            }
            }}>
                Buy now</button>
            </div>
             </div>
         )
     })}

        </div>
        <br />

        <div className="pagination">
        <div className="paginationButtonPrevious" style={{color:(page===1)?'white':""}} onClick={()=>{
          if(page>1)
          setPage(page-1)
        
        }}>PREVIOUS</div>
        <div className="pageNumber" style={{color:(page===1)?'white':"",backgroundColor:(page===1)?'green':""}} onClick={()=>{
          setPage(1)
        
        }}>1</div>
        <div className="pageNumber" style={{color:(page===2)?'white':"",backgroundColor:(page===2)?'green':""}} onClick={()=>{
          
          setPage(2)
        
        }}>2</div>
        <div className="pageNumber" style={{color:(page===3)?'white':"",backgroundColor:(page===3)?'green':""}} onClick={()=>{
          setPage(3)
        
        }}>3</div>
        <div className="pageNumber" style={{color:(page===4)?'white':"",backgroundColor:(page===4)?'green':""}} onClick={()=>{
          setPage(4)
        
        }}>4</div>
        <div className="pageNumber" style={{color:(page===5)?'white':"",backgroundColor:(page===5)?'green':""}} onClick={()=>{
          setPage(5)
        
        }}>5</div>
        <div className="pageNumber" style={{color:(page===6)?'white':"",backgroundColor:(page===6)?'green':""}} onClick={()=>{
          setPage(6)
        
        }}>6</div>
        <div className="pageNumber" style={{color:(page===7)?'white':"",backgroundColor:(page===7)?'green':""}} onClick={()=>{
          setPage(7)
        
        }}>7</div>
   
        <div className="paginationButtonNext" onClick={()=>{
          
          setPage(page+1)
        
        }}>NEXT</div>
      </div>
      <br />
      <br />
        </Stylediv>
    )}
}