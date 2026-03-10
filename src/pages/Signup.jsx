import { Link } from "react-router-dom"
import Login from "./Login"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup=(props)=>{
    const navigate=useNavigate()
    const userdetails=props.userdetails;
    const setuserdetails=props.setuserdetails;
const [entrusername, setentusername] = useState("")
    const [entrpassword, setentpassword] = useState("")
    const handleusername = (evt) => {
        setentusername(evt.target.value)
    }
    const handlepassword = (evt) => {
        setentpassword(evt.target.value)
    }

    const adduser=()=>{

        setuserdetails([...userdetails,{username:entrusername,password:entrpassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10">
                <h1 className="text-3xl font-bold mb-5">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col mt-2">
<input type="text" placeholder="Username" onChange={handleusername} className="border border-gray-300 p-2 mb-5 w-52 rounded-md"/>
                <input type="password" onChange={handlepassword} placeholder="Password" className="border border-gray-300 p-2 mb-5 w-52 rounded-md"/>
                <input type="password" onChange={handlepassword} placeholder="confirm Password" className="border border-gray-300 p-2 mb-5 w-52 rounded-md"/>
                <button className="bg-[#FCA201] text-white w-52 px-4 py-2 rounded-md" onClick={adduser}>Signup</button>
                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
                
            </div>
        </div>
    )
}
export default Signup