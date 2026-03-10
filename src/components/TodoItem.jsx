const TodoItem=(props)=>{

    const activitiesarr=props.activitiesarr;
    const setActivitiesarr=props.setActivitiesarr;

    function deleteActivity(deleteid){
        const updatedActivities = activitiesarr.filter(item => item.id !== deleteid);
        setActivitiesarr(updatedActivities);
    }

    return(<div className="flex justify-between"><p>{props.index}.{props.item.activities}</p>
    <button className="text-red-500" onClick={()=>deleteActivity(props.item.id)}>Delete</button></div>)
}

export default TodoItem;