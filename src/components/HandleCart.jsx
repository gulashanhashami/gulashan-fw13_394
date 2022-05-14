

import { useState } from "react";
import "./HandleCart.css"

 const HandleCart=()=>{
   const [products, setproducts]= useState(1)
//    const [totalproducts, setTotalproducts]= useState(13);

 

   const handleClick=(value)=>{
       setproducts(products+value)
    //    setTotalproducts(totalproducts+value)
   }
   

    return (

<div className="item">
    
    <button onClick={()=>handleClick(1)} className="addBook">
        +
    </button>
    <span><div className="box">Product: {products}</div></span>
    <button onClick={()=>{if(products>1){handleClick(-1)}}} className="remBook">
        -
    </button>
    {/* <span className="totalproducts">{totalproducts}</span> */}
</div>



    );
}

export {HandleCart }