import React,{useEffect, useState} from "react";
import TaskListing from "./TaskListing";

const MainContainer = ()=>{

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        const temp = [];
        if(toDoList.length == 0){
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>{
                for (let i = 0; i < 10; i++) {
                    temp.push(json[i]);
                }
                setToDoList(temp);
            })
        }
    
    }, []);

    return (
        <>
        <TaskListing items={toDoList}/>
        </>
    );
    
}

export default MainContainer;