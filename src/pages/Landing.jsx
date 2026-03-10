import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
const Landing=()=>{
    const data=useLocation()
    return(<> <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] border rounded-md p-10">

        <Header user={data.state.user}/>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
         <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
         <Card  bgcolor={"#FD6663"} title={"December 23"} subtitle={"14:23:2"}/>
          <Card  bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}/>
        </div>
        <div>
          <TodoContainer/>
        </div>
      </div>
      
    </div></>)
}
export default Landing;