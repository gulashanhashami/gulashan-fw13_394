import { Link } from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

const Navbardiv= styled.div`
#maind{
    font-family: sans-serif;
  }
  
  #navbar {
      margin: auto;
      width: 100%;
      height: auto;
      /* border: 1px solid grey; */
    }
    #navbar1 {
        margin: auto;
        width: 90%;
        height: 7.5vh;
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: white;
        //  border: 1px solid grey;
        // position: sticky;
        top: 0;
      }
      
      .mlogo {
        width: 85%;
        height: 7.3vh;
        /* border: 1px solid red; */
        margin-bottom: 3.8%;
      }
      #inps {
        width: 73%;
        background-color: rgba(249, 249, 249, 255);
        height: 70%;
        outline: none;
        position: sticky;
        border: none;
        font-size: 1vw;
        color: grey;
        font-weight: 500;
        padding-left: 1%;
        margin-left: 2%
      }
      .searchb {
        /* border:1px solid grey; */
       position: relative;
       width:2%;
       height:30%;
       top: 2px;
       left: -3%;
     }
     
     
      #car {
        color: black;
      }
     
      #dropd {
        width: 100%;
        height: auto;
        border-bottom: .1vw solid grey;
      }
      #dropd1 {
        width: 90%;
        height: 5vh;
        padding: 0px;
        font-size: 1.2vw;
        display: flex;
        align-items: center;
        margin-left: 5%;
        justify-content: space-between;
        //  border: 1px solid grey; 
      }
     
      .down {
        width: 90%;
        display: flex;
        position: absolute;
        top: 22.5%;
        z-index: 100;
        background-color: white;
        // border:1px solid grey; 
        height: 60%;
        margin-left: 5%;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
      .dowp {
        width: 15%;
        font-size: 1.1vw;
       color: black;
        padding-left: 1.5%;
        //  border:1px solid grey; 
      }
      .brand{
        font-size: 1vw;
      color: black;
      }
      .dowp1 {
        width: 15%;
        font-size: 1vw;
        color: grey;
        padding-left: 1.5%;
      //  border:1px solid grey; 
      }
      .dowp2 {
        width: 15%;
        font-size: 1vw;
        color: grey;
        /* // border:1px solid grey; */
      }
      #link{
        color: grey;
      }
      .lasttext{
        margin-top: 8vh;
      }
      
      #divcol {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol1 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol2 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol3 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol4 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol5 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol6 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol7 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol8 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol9 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol10 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol11 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol12 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol13 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol14 {
        background-color: rgba(249, 249, 249, 255);
      }
      #divcol15 {
        background-color: rgba(249, 249, 249, 255);
      }
      .texthover {
        color: #333333;
        /* font-weight: 500; */
        padding:10px 10px 10px 5px;
      }
      
      a {
        text-decoration: none;
      }
      #topn{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        
      }
      #topn1{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:rgba(249, 249, 249, 255) ;
        // background-color: grey; 
        
      }
      .ltop{
        color: white;
        
        font-size: 1vw;
        font-weight: 650;
        /* float: left; */
        align-items: center;
      }
      #ltop1{
        margin-left: 6%;
      }
      #ltop2{
        margin-right: 6%;
      }
      #topn12{
        margin-left: 6%;
        width: 36%;
        font-size: 1.2vw;
        height: 5vh;
        display: flex;
        color: grey;
        justify-content: space-between;
        align-items: center;
        //  border: 1px solid red; 
      }
      #topn13{
        margin-right: 6%;
        width: 16%;
        height: 5vh;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    //    border: 1px solid red; 
      }
      .pin{
        font-size: 1vw;
        color: grey;
      }
      .cart{
          width:85%;
          height:5vh;
          // border: 1px solid red;
      }
      .cart_img{
          width:90%;
          height:4vh;
         
      }
      .help{
        width:92%;
        height:4vh;
      }
`;


export const Navbar = () => {

    const [Drop, setDrop]= useState(false);
    const [Drop1, setDrop1]= useState(false);
    const [Drop2, setDrop2]= useState(false);
    const [Drop3, setDrop3]= useState(false);
    const [Drop4, setDrop4]= useState(false);
    const [Drop5, setDrop5]= useState(false);
    const [Drop6, setDrop6]= useState(false);
    const [Drop7, setDrop7]= useState(false);
    const [Drop8, setDrop8]= useState(false);
    const [Drop9, setDrop9]= useState(false);

    function displayNone(e){
        
    }
  return (
          <Navbardiv> 
    <div id="maind">
        <div id="topn">
          <p id="ltop1" className="ltop">New welcome Sale | Up to 60% Off | Use Code <span style={{color:"red"}}>WELCOME</span></p>
          <p id="ltop2" className="ltop">Extra 20% Cashback On All Orders |<span>T&C Apply </span><Link to={"/signin"}><span style={{color:"red"}}>Signin</span></Link></p>
        </div>
        <div id="topn1">
            <div id="topn12">
               <p>Online Products</p> 
               <p>Become a Seller</p>
               <p> Buy in Bulk</p>
               <p> Find a Studio</p>
            </div>
            <div id="topn13">
                <Link to={""}>
               <p className="pin">Enter Pincode</p> 
               </Link>
               <p className="pin" style={{color:"red"}}>Find Best Products</p>
            </div>
        </div>

         <div id="navbar"> 
         <div id="navbar1">
      <Link to="/"> <img className="mlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlUytvlWVdaxeXhf70Dv3Og5RHCsvEPzhqg&usqp=CAU" alt="" srcset="" /></Link> 
        
         <input id="inps"  type="text" placeholder="Your door to happiness opens with a search" />
            <img className="searchb" src="https://img.icons8.com/material-outlined/2x/search.png" alt="" />
        

         <Link to={"/"}>
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt="" />
         </div>
         </Link>
      
         <Link to= "/signup">
         <div className="cart">   
         <img id="profile" className="cart_img" src="https://img.icons8.com/ios-filled/344/user-male-circle.png" alt="" />  
        
         </div>
         </Link>
         <Link to={""}>
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" alt="" />
         </div>
         </Link>
         <Link to="/products/cart">
         <div className="cart"> 
         <img className="cart_img" src="https://img.icons8.com/ios-glyphs/344/shopping-cart-loaded.png" alt="" />
           
         </div>
         </Link>
         </div>
      </div>
      
      <div id="dropd">
          <div id="dropd1">
          <p className="texthover" id="eth" onMouseEnter={(e) => {
              setDrop(true)
            displayNone(e)
          }} onMouseLeave={() => setDrop(false)}>Women Ethnic</p>
          <p className="texthover" onMouseEnter={() => setDrop1(true)} onMouseLeave={() => setDrop1(false)}>Women Western</p>
          <p className="texthover" onMouseEnter={() => setDrop2(true)} onMouseLeave={() => setDrop2(false)}>Jewelleries & Accessories</p>
          <p className="texthover" onMouseEnter={() => setDrop3(true)} onMouseLeave={() => setDrop3(false)}>Men</p>
          <p className="texthover" onMouseEnter={() => setDrop4(true)} onMouseLeave={() => setDrop4(false)}>Beauty & Health</p>
          <p className="texthover"  onMouseEnter={() => setDrop5(true)} onMouseLeave={() => setDrop5(false)}>Bags & Footwear</p>
          <p className="texthover"  onMouseEnter={() => setDrop6(true)} onMouseLeave={() => setDrop6(false)}>Home & Kitchen</p>
          <p className="texthover" onMouseEnter={() => setDrop7(true)} onMouseLeave={() => setDrop7(false)}>Kids</p>
          <p className="texthover" id="elec" onMouseEnter={() => setDrop8(true)} onMouseLeave={() => setDrop8(false)}>Electronics</p>
          <p className="texthover" id="elec" onMouseEnter={() => setDrop9(true)} onMouseLeave={() => setDrop9(false)}>Modular</p>
          </div>
      </div>
      {(Drop===true)?(<div className="down"onMouseEnter={() => setDrop(true)} >
       <div className="dowp" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
           <p>All Women Ethnic</p>
           <p>View All</p>
           <p>Sarees</p>
           <p>Silk Sarees</p>
           <p>Cotton Silk Sarees</p>
           <p>Cotton Sarees</p>
           <p>Georgette Sarees</p>
           <p>Chiffon Sarees</p>
           <p>Satin Sarees</p>
           <p>Embroidered Sarees</p>
       </div>
       <div id="divcol" className="dowp1" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
           <p>Kurtis</p>
           <p>All Kurtis</p>
           <p>Rayon Kurtis</p>
           <p>Cotton Kurtis</p>
           <p>Embroidered Kurtis</p>
       </div>
       <div className="dowp1" onMouseLeave={() => setDrop(false)}>
           <h3 className="brand">Suits & Dress Material</h3>
           <p>All Suits & Dress Material</p>
           <p>Cotton Suits</p>
           <p>Embroidered Suits</p>
           <p>Chanderi Suits</p>
       </div>
       <div className="dowp2" onMouseLeave={() => setDrop(false)}>
       <h3 className="brand">Other Ethnic</h3>
           <p>All Suits & Dress Material</p>
           <p>Blouses</p>
           <p>Dupattas</p>
           <p>Lehanga</p>
           <p>Gown</p>
           <p>Ethnic Bottomwear</p>
           <p>All Kurta Sets</p>
       </div>
      </div>)
:""}


{(Drop1===true)?(<div className="down" onMouseEnter={() => setDrop1(true)} >
       <div className="dowp" onMouseLeave={() => setDrop1(false)} onMouseEnter={() => setDrop1(true)}>
       <h4>Topwear</h4>
           <p>Dresses</p>
           <p>Sweater</p>
           <p>Jumpsuits</p>
       </div>
       <div id="divcol" className="dowp1"onMouseLeave={() => setDrop1(false)}>
       <h4>Bottomwear</h4>
           <Link to={'/products'}><p>Jeans & T-Shirt</p></Link>
           <p>Jeggings</p>
           <p>Palazzos</p>
           <p>Shorts</p>
           <p>Skirts</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Innerwear</h3>
           <p>Braw</p>
           <p>Brief</p>
       </div>
       <div className="dowp2">
       <h3 className="brand">Sleepwear</h3>
           <p>Nightsuits</p>
           <p>Babydolls</p>
       </div>
      </div>)
:""}

{(Drop2===true)?(<div className="down">
       <div className="dowp">
       <h4>Jewellery</h4>
           <Link to={'/product'}><p>Jewellery Set</p></Link>
           <p>Mangalsutras</p>
           <p>Earrings</p>
           <p>Studs</p>
           <p>Bangles</p>
           <p>Necklaces</p>
           <p>Rings</p>
           <p>Anklets</p>
       </div>
       <div id="divcol" className="dowp1">
       <h4>Women Accessory</h4>
           <p>Bags</p>
           <p>Watches</p>
           <p>Hair Accessories</p>
           <p>Sunglasses</p>
           <p>Socks</p>
       </div>
      </div>)
:""}

{(Drop3===true)?(<div className="down">
       <div className="dowp">
       <h4>Top Wear</h4>
           <p>All Top Wear</p>
           <p>Tshirts</p>
           <p>Shirts</p>
       </div>
       <div id="divcol" className="dowp1">
       <h4>Bottom Wear</h4>
           <Link to={'/product'}><p>Track Pants</p></Link>
           <p>Jeans</p>
           <p>Trousers</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Men Accessories</h3>
           <p>All Men Accessories</p>
           <p>Watches</p>
           <p>Belts</p>
           <p>Wallets</p>
           <p>Jewellery</p>
           <p>Sunglasses</p>
           <p>Bags</p>
       </div>
       <div className="dowp2">
       <h3 className="brand">Men Footwear</h3>
           <p>Sports Shoes</p>
           <p>Casual Shoes</p>
           <p>Formal Shoes</p>
           <p>Sandals</p>
       </div>
      </div>)
:""}

{(Drop4===true)?(<div className="down">
       <div className="dowp">
       <h4>Make up</h4>
           <p>Faces</p>
           <p>Eyes</p>
           <p>Lips</p>
           <p>Nails</p>
           
       </div>
       <div id="divcol" className="dowp1">
       <h4>Wellness</h4>
           <Link to={'/product'}><p>Sanitizers</p></Link>
           <p>Silk Sarees</p>
           <p>Oral Care</p>
           <p>Feminine Hygiene</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Skincare</h3>
           <p>Deodorants</p>
       </div>
       
      </div>)
:""}

{(Drop5===true)?(<div className="down">
       <div className="dowp">
       <h4>Women Footwear</h4>
           <p>Flats</p>
           <p>Bellies</p>
           <p>Juttis</p>
       </div>
       <div id="divcol" className="dowp1">
       <h4>Men Footwear</h4>
           <Link to={'/product'}><p>Sports Shoes</p></Link>
           <p>Casual Shoes</p>
           <p>Formal Shoes</p>
           <p>Sandals</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Women Bags</h3>
           <p>All Women Bags</p>
           <p>Handbags</p>
           <p>Clutches</p>
           <p>Slingbags</p>
       </div>
       <div className="dowp2">
       <h3 className="brand">Men Bags</h3>
           <p>All Women Bags</p>
           <p>All Men Bags</p>
           <p>Men Wallets</p>
       </div>
      </div>)
:""}

{(Drop6===true)?(<div className="down">
       <div className="dowp">
       <h4>Home Furnishing</h4>
           <p>Bedsheets</p>
           <p>Doormats</p>
           <p>Curtains & Sheers</p>
           <p>Cushions & Cushion Covers</p>
           <p>Mattress Protectors</p>
       </div>
       <div id="divcol" className="dowp1">
       <h4>Home Decor</h4>
           <Link to={'/product'}><p>All Home Decor</p></Link>
           <p>Stickers</p>
           <p>Clocks</p>
           <p>Showpieces</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Kitchen & Dining</h3>
           <p>Kitchen Storage</p>
           <p>Cookware & Bakeware</p>
       </div>
     
      </div>)
:""}

{(Drop7===true)?(<div className="down">
       <div className="dowp">
       <h4>Toys & Accessories</h4>
           <p>Soft Toys</p>
           <p>Footwear</p>
           <p>Stationery</p>
           <p>Watches</p>
           <p>Bags & Backpacks</p>
       </div>
       <div id="divcol" className="dowp1">
       <h4>Infant 0-2 Years</h4>
           <Link to={'/product'}><p>Rompers</p></Link>
       </div>
       <div className="dowp1">
           <h3 className="brand">Boys & Girls 2+ Years</h3>
           <p>Dresses</p>
       </div>
       <div className="dowp2">
       <h3 className="brand">Baby Care</h3>
           <p>All Baby Care</p>
       </div>
      </div>)
:""}
 {(Drop8===true)?(<div className="down">
       <div className="dowp">
       <h4>Mobile & Accessories</h4>
           <p>All Mobile & Accessories</p>
           <p>Smartwatches</p>
           <p>Mobile Holders</p>
           <p>Mobile cases and covers</p>
       </div>
       <div id="divcol" className="dowp1">
       <h3 className="brand">Appliances</h3>
           <p>All Appliances</p>
           <p>Grooming</p>
           <p>Home Appliances</p>
       </div>
       
      </div>)
:""}

{(Drop9===true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
      
      </div>)
:""}

    </div>
    </Navbardiv>
  );
};