import React,{useEffect, useState} from "react";
import TaskListing from "./TaskListing";

const MainContainer = ()=>{

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
              "https://jsonplaceholder.typicode.com/todos?_limit=10"
            )
          ).json();
    
          // set state when the data received
          setToDoList(data);
        };
    
        dataFetch();
      }, []);

    return (
        <>
        <TaskListing items={toDoList}/>
        </>
    );
    
}

export default MainContainer;