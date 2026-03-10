import { useState } from "react";

const AddtodoForm=(props)=>{

    const activitiestarr=props.activitiesarr;
    const setActivitiesarr=props.setActivitiesarr;

    const [newactivity,setnewactivity]=useState("");

    const handlechnage=(e)=>{
        setnewactivity(e.target.value)
    }
    const handleadd=()=>{
        setActivitiesarr([...activitiestarr,{id:activitiestarr.length+1,activities:newactivity}])
        setnewactivity("");
    }

    return(<>
     <div>
        <h1 className="text-2xl font-medium my-2">Manage Activities</h1>
        <input type="text" value={newactivity} onChange={handlechnage} placeholder="Next Activity?" className="border border-black  bg-transparent p-1"></input>
        <button className="bg-black text-white border border-black p-1" onClick={handleadd}>Add</button>
    </div>
    </>)
}
export default AddtodoForm