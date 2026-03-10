import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';


const App=()=>{

  const [userdetails, setuserdetails] = useState([

        {
            username: "nather",
            password: "123"
        }

    ])
    console.log(userdetails);
  return(<>
  <BrowserRouter>
   <Routes>
<Route path="/" element={<Login userdetails={userdetails} setuserdetails={setuserdetails} />}></Route>
  <Route path="/signup" element={<Signup userdetails={userdetails} setuserdetails={setuserdetails}/>}></Route>
  <Route path="/landing" element={<Landing/>}></Route>
   </Routes>
   </BrowserRouter>
  </>)
}

export default App;
