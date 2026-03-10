
import TodoItem from "./TodoItem";
const TodoList=(props)=>{

   const activitiesarr=props.activitiesarr;
   const setActivitiesarr=props.setActivitiesarr;

    return(<><div className="bg-[#BDBAEA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activites</h1>
        {activitiesarr.length===0?
        <p>you havven't added any activities yet</p> : ""}
        {activitiesarr.map((item,index)=>{
            return <TodoItem key={item.id} item={item} index={index+1} activitiesarr={activitiesarr}  setActivitiesarr={setActivitiesarr}/>
        })}
    </div></> )
}

export default TodoList;