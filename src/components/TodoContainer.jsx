import AddtodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react";
const TodoContainer=()=>{

     const [activitiesarr, setActivitiesarr] = useState([

        {
            id:1,
            activities: "Wake up at 6:00 am",
        },
        {
            id:2,
            activities: "Go to the gym",
        },
        {
            id:3,
            activities: "Have breakfast",
        }

    ]);

    return(<>
    <div className="flex gap-5 flex-wrap">
     <AddtodoForm activitiesarr={activitiesarr} setActivitiesarr={setActivitiesarr}/>
    <TodoList activitiesarr={activitiesarr} setActivitiesarr={setActivitiesarr}/>
    </div>
    </>)
}

export default TodoContainer