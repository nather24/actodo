import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const userdetails=props.userdetails;
    const navigate=useNavigate()

    const [entrusername, setentusername] = useState("")
    const [entrpassword, setentpassword] = useState("")
    const [isloggedin, setisloggedin] = useState(true)
    let userfound=false;

    const handleclick = () => {

        userdetails.forEach((item) => {

            console.log(item.username, item.password)

            if (item.username === entrusername && item.password === entrpassword) {
               console.log("logged in")
               setisloggedin(true)
               userfound=true;
               navigate("/landing",{state:{user:entrusername}})
            }
           
        })
        if(!userfound){
        console.log("error")
        setisloggedin(false)
    }
    }
    
    const handleusername = (evt) => {
        setentusername(evt.target.value)
    }
    const handlepassword = (evt) => {
        setentpassword(evt.target.value)
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10">
                <h1 className="text-3xl font-bold mb-5">Hey Hi</h1>
                {
                    isloggedin ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please signup to continue</p>
                }

                <div className="flex flex-col mt-2">
                    <input type="text" onChange={handleusername} placeholder="Username" className="border border-gray-300 p-2 mb-5 w-52 rounded-md" />

                    <input type="password" onChange={handlepassword} placeholder="Password" className="border border-gray-300 p-2 mb-5 w-52 rounded-md" />

                    <button className="bg-[#8272DA] text-white w-52 px-4 py-2 rounded-md" onClick={handleclick}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>

                </div>

            </div>
        </div>
    )
}

export default Login