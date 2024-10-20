/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";

export default function TextInut(props) {
  const [text,setText] =useState('');
  const [btn, setbtn] = useState("cyan");
  
  const handleupClick= ()=>{
    console.log("uppercase we clicked"+ text);
    const newtext=text.toUpperCase();
    setText(newtext);
    props.ShowAlert("upper case ","success");
  }
  const handleclearClick= ()=>{
    
    const newtext="";
    setText(newtext);
    setbtn("green");
    props.ShowAlert("claer  ","success");
  }
  const handleloClick= ()=>{
    const newtext=text.toLowerCase();
    setText(newtext);
    setbtn("yellow");
    
    props.ShowAlert("lower case ","success");
  }
  const handlecopy=()=>
    { 
      navigator.clipboard.writeText(text);
      props.ShowAlert("copy ","success");
      setbtn("red");
    }
    const handlespace=()=>
      { 
        const newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.ShowAlert("remove space ","success");
        setbtn("pink");
      }
  const handlOnChange=()=>
  {
    console.log("on change");
    setText(event.target.value);

  }
    return (
    <>
    
        <div className="mb-3">
          <label className="HtmlForm-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={text}
            id="mybox"
            style={{backgroundColor : props.mode ==='dark'?'green':'red'}}
            onChange={handlOnChange}
          />
          
        </div>
        <div className="container">
          <h1>word and character counter</h1>
          <p>{text.split(" ").length} word and {text.length} characeter</p>
          <p>{0.008*text.split(" ").length} count the word in minute </p>
          <h1>preview</h1>
          <p>{text.length>0?text:"enter the text"}</p>
        </div>
        
        <button type="submit" onClick={handleupClick}  style={{backgroundColor: btn}} className="btn btn-primary mx-2">
          lowercase to uppercase
        </button>
        <button type="submit" onClick={ handleloClick } style={{backgroundColor: btn}} className="btn btn- mx-2">
          uppercase to lowercase
        </button>
        <button type="submit" onClick={handleclearClick} style={{backgroundColor: btn}} className="btn btn-primary mx-2">
         clear
        </button>
        <button type="submit" onClick={handlecopy} style={{backgroundColor: btn}} className="btn btn-primary mx-2">
         Copy
        </button>
        <button type="submit" onClick={handlespace} style={{backgroundColor: btn}} className="btn btn-primary mx-2">
         Remove extra space
        </button>
        
    </>
  );
}
