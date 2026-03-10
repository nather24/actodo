const Card=(prop)=>{

    return(<>
     <div style={{backgroundColor:prop.bgcolor}} className="px-10 py-5 border rounded-md text-center flex-grow">
          <h1 className="font-medium text-2xl">{prop.title}</h1>
          <p>{prop.subtitle}</p>
        </div>
    </>)
}

export default Card