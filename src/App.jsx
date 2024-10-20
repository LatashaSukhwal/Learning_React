// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./componenet/Navbar";
import TextInput from "./componenet/TextInput";
import About from "./componenet/About";
import Alert from "./componenet/Alert";
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

// function MyButton() {
//   return (
//     <button>
//       I&lsquo;m a button
//     </button>
//   );
// }

export default function MyApp() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  };

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const togglenav = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      ShowAlert("dark mode has been enabled", "success");
      // document.title="textile -dark mode";
      // setInterval(() => {
      //   document.title="textile -dark mode";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("light mode has been enabled", "success");
      // document.title="textile -dark mode";
      // setInterval(() => {
      //   document.title="textile -light mode";
      // }, 1500);
    }
  };
  return (
    <>
    <Router>

      <Navbar mode={mode} togglemode={togglenav} title="textile" />
      <Alert alert={alert} />
     
      <div className="container my-5">
        <Routes>

          <Route  exact path="/textinput" element={<TextInput mode={mode} ShowAlert={ShowAlert} />
         }/>
            
          <Route exact 
          path="/about" element={<About />}/>
      
        </Routes>
       
      </div>
    </Router>
     

        {/* <MyButton /> */}
    
    </>
  );
}
