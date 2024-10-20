/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from "react";

export default function Alert(props) {
 const capitalized = (word)=>
 {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    
 };
    return (
   
     props.alert && 
      <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{capitalized(props.alert.type)}</strong> :{props.alert.msg}
       
      </div>
    
  );
}
