import { useEffect, useState } from "react";
import styled from "styled-components";

const Navbardiv= styled.div`

#upperdiv{
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 60vh;
    @media (max-width:415px){
        height:27vh;
    }
    margin: auto;
    //  border: 1px solid red; 
}
#large{
    width: 100%;
    height: 100%;
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
    @media (max-width:415px){
        height:10vh;
    }
    //  border: 1px solid red; 
}
.head{
    margin-left: 5%;
    font-size: 2.3vw;
    @media (max-width:415px){
        font-size: 3.8vw;
    }  
  
}
#box1{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 32vh;
    @media (max-width:415px){
        height:23vh;
    }
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
    @media (max-width:415px){
        height:27vh;
    }
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
    @media (max-width:415px){
        height:25vh;
    }
    /* border: 1px solid red; */
}
.p1{
    color: black;
    font-size: 1.3vw;
    @media (max-width:415px){
        font-size: 2.8vw;
    }
    font-weight: 500;
}
.price{
    font-size: 1.3vw;
    @media (max-width:415px){
        font-size: 2.7vw;
    }
}
.box4{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 2vh;
    height: 62vh;
    @media (max-width:415px){
        height:29vh;
    }
    /* border: 1px solid red; */
}
.box41{
    width: 49.6%;
 /* border: 1px solid red; */
}
`;
export const Home=()=>{
const [slideData, setSlide]= useState(-1);

//**code for slider***//
var arr=["https://www.sexybeast.in/cdn/shop/files/SB_new_Web_banner_1920_x_840_Final_08.jpg?v=1701234855", "https://www.bewakoof.com/blog/wp-content/uploads/2021/01/6-5-2022_-Different-Types-of-Sarees_Blog-Feature-Banner.jpg", "https://www.vijayalakshmisilks.com/cdn/shop/files/Web_Banner_1_c7414716-1428-4bcd-aa1a-912dd548e6c7.jpg?v=1740841022&width=1500"];
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
       <img className="imgtop" src={arr[slideData]} alt="Loading..." />
      </div>
     </div>
     {/* <br /> */}
     <div id="div2">
         <img className="imgtop" src="https://www.textileinfomedia.com/images/wholesale-market/ahmednagar-wholesale-and-retailer-kapda-market.jpg" alt="" />
     </div>
 
     {/**code, for category wise products**/}
     <h1 className="head">Shop By Category</h1>
     <div id="box1">
         <div id="gul" className="box11">
             <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5j-28jwltVwD4N-WFMg4v3teud_tIOKxng&usqp=CAU" alt="" />
             <p className="p1">Women T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://i.pinimg.com/736x/40/2f/62/402f6229ac64ddc4597b2b715c54f65e.jpg" alt="" />
         <p className="p1">Women T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://toptenmartltd.com/wp-content/uploads/2024/03/T-shirt-1-1.jpg" alt="" />
         <p className="p1">Men T-Shirt</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://i.pinimg.com/736x/40/2f/62/402f6229ac64ddc4597b2b715c54f65e.jpg" alt="" />
         <p className="p1">Men T-Shirt</p>
         </div>
     </div>
     <br />
     <br />
     <div id="box2">
     <div className="box21">
     <img className="img2" src="https://img.freepik.com/premium-psd/tshirt-mockup-women_669874-6361.jpg" alt="" />
     </div>
         <div className="box21">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Leipzig2012.jpg/800px-Leipzig2012.jpg" alt="" />
         </div>
         <div className="box21">
         <img src="https://img.freepik.com/premium-psd/tshirt-mockup-women_669874-6361.jpg" alt="" />
         </div>
     </div>
     <br />
     <h1 className="head">Your Pocket-Friendly Shoppe</h1>
     <div id="box3">
         <div className="box11">
             <img className="img1" src="https://5.imimg.com/data5/ANDROID/Default/2021/12/SV/ZG/AF/133373299/product-jpeg-500x500.jpg" alt="" />
             <p className="p1">T-Shirt</p>
             <p className="price">Under Rs. 8,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29470868/2024/5/23/11bc0366-df56-4db3-9341-84cc15dc849a1716460618563-Hancock-Men-Self-design-Slim-Fit-Pure-Cotton-Formal-Shirt-61-1.jpg" alt="" />
             <p className="p1">Farmal Shirt</p>
             <p className="price">Under Rs. 6,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://friskers.in/cdn/shop/files/WKOL-03-04_1_97599292-8c7a-4146-9a1c-e64e6adee06d.jpg?v=1726468338" alt="" />
             <p className="p1">Pack of two Women T-Shirt</p>
             <p className="price">Under Rs. 7,00</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Lee/Monobrand/LWJN001011/LWJN001011_1.jpg" alt="" />
             <p className="p1">Women Slim Fit Jeans</p>
             <p className="price">Under Rs. 9,00</p>
         </div>
     </div>
     <br />
     <br />
     <br />
     <div className="box4">
     <div className="box41">
         <img src="https://img.freepik.com/premium-psd/tshirt-mockup-women_669874-6361.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Leipzig2012.jpg/800px-Leipzig2012.jpg" alt="" />
         </div>
     </div>
     <br />
     <div className="box4">
     <div className="box41">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Leipzig2012.jpg/800px-Leipzig2012.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://img.freepik.com/premium-psd/tshirt-mockup-women_669874-6361.jpg" alt="" />
         </div>
     </div>
     </div>   
        </div>
        </Navbardiv>
    )
}