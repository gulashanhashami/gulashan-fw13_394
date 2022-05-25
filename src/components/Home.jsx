import { useEffect, useState } from "react";
import styled from "styled-components";

const Navbardiv= styled.div`

#upperdiv{
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 60vh;
    margin: auto;
    //  border: 1px solid red; 
}
#large{
    width: 100%;
    height: 60vh;
    //  border: 1px solid green; 
}
.imgtop{
    width: 100%;
    height: 100%;
   
}

.img1{
    width: 99%;
    height: 95%;
}
img{
    width: 100%;
    height: 100%;
}

#div2{
    width: 90%;
    margin: auto;
    margin-top: 3vh;
    height: 14vh;
    //  border: 1px solid red; 
}
.head{
    margin-left: 5%;
  
}
#box1{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 32vh;
    /* border: 1px solid red; */
}
.box11{
    width: 24.5%;
    text-align:starting ;
//  border: 1px solid grey; 
}

#box2{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 60vh;
    /* border: 1px solid red; */
}
.box21{
    width: 32.8%;
 /* border: 1px solid red; */
}

#box3{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 40vh;
    /* border: 1px solid red; */
}
.p1{
    color: black;
    font-weight: 500;
}
.price{
    font-size: 13px;
}
.box4{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 2vh;
    height: 62vh;
    /* border: 1px solid red; */
}
.box41{
    width: 49.6%;
 /* border: 1px solid red; */
}

`;
export const Home=()=>{
const [slideData, setSlide]= useState(-1);

var arr=[ "https://cdn.vmartretail.com/images/banners/Bannerkidsweb.jpg","https://cdn.vmartretail.com/images/banners/Bannerethnicweb.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwY82hCLGTfd-BeJFpHnufRI8_woa4t8nSwQ&usqp=CAU", "https://cdn.vmartretail.com/images/banners/Bannersummerweb.jpg", "https://cdn.vmartretail.com/images/banners/MainBunlimteweb.jpg", "https://cdn.vmartretail.com/images/banners/30banner02.jpg"];
useEffect(()=>{
   setInterval(()=>{
     
        setSlide((prev)=>{
            if(prev===3){
                return prev=0
            }
            return prev+1
        })
       
   }, 4000)
},[])

    return(
        <Navbardiv>
        <div>
                 <div>
     <div id="upperdiv">
      <div id="large">
       <img className="imgtop" src={arr[slideData]} alt="" />
      </div>
     </div>
     {/* <br /> */}
     <div id="div2">
         <img className="imgtop" src="https://cdn.vmartretail.com/images/banners/strip01yyyyy.jpg" alt="" />
     </div>
     {/* <br /> */}
     <h1 className="head">Shop By Category</h1>
     <div id="box1">
         <div id="gul" className="box11">
             <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5j-28jwltVwD4N-WFMg4v3teud_tIOKxng&usqp=CAU" alt="" />
             <p>Women T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yhN2fD43bSwda89O6Ur4DDA_XGSP3Qf8KA&usqp=CAU" alt="" />
         <p>Women T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FvwS9Mstg-L2kHobbB274tBauK0Y6pyCfw&usqp=CAU" alt="" />
         <p>Men T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZi6aZVZE50Odjc-RCJe1hgAObf2r6Mtj7Q&usqp=CAU" alt="" />
         <p>Men T-Shirt</p>
         </div>
     </div>
     <br />
     <br />
     <div id="box2">
     <div className="box21">
     <img className="img2" src="https://cdn.vmartretail.com/images/banners/DivisionM07.jpg" alt="" />
     </div>
         <div className="box21">
         <img src="https://cdn.vmartretail.com/images/banners/DivisionM08.jpg" alt="" />
         </div>
         <div className="box21">
         <img src="https://cdn.vmartretail.com/images/banners/ComboPack02.jpg" alt="" />
         </div>
     </div>
     <br />
     <h1 className="head">Your Pocket-Friendly Shoppe</h1>
     <div id="box3">
         <div className="box11">
             <img className="img1" src="https://cdn.vmartretail.com/images1/thumbnails/97243/640/1/143771938-97243705-1652275714.jpg" alt="" />
             <p className="p1">T-Shirt</p>
             <p className="price">Under Rs. 8,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://cdn.vmartretail.com/images1/thumbnails/97241/640/1/143770896-97241172-1652081569.jpg" alt="" />
             <p className="p1">Farmal Shirt</p>
             <p className="price">Under Rs. 6,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://cdn.vmartretail.com/images1/thumbnails/97055/640/1/143692222-97055972-1626755535.jpg" alt="" />
             <p className="p1">Pack of two Women T-Shirt</p>
             <p className="price">Under Rs. 7,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://cdn.vmartretail.com/images1/thumbnails/97153/640/1/143742148-97153170-1638284084.jpg" alt="" />
             <p className="p1">Women Slim Fit Jeans</p>
             <p className="price">Under Rs. 9,00</p>
         </div>
     </div>
     <br />
     <br />
     <br />
     <div className="box4">
     <div className="box41">
         <img src="https://cdn.vmartretail.com/images/banners/Divisionpart9.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://cdn.vmartretail.com/images/banners/DivisionM03.jpg" alt="" />
         </div>
     </div>
     <br />
     <div className="box4">
     <div className="box41">
         <img src="https://cdn.vmartretail.com/images/banners/DivisionM01.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://cdn.vmartretail.com/images/banners/DivisionM02.jpg" alt="" />
         </div>
     </div>
     </div>   
        </div>
        </Navbardiv>
    )
}