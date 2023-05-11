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


    // Task complete/incomplete toggle
    const toggleCompleted = (item) => {
        const updatedList = toDoList.map((element => {
        if (item === element.id) {
            element.completed = !element.completed ? true : false ;
        }
        return element;
        }));

        setToDoList(updatedList);
    }

   // Delete an item from list and update accordingly
    const deleteItems = (item) => {
        const updatedList = toDoList.filter(element => element.id != item);
        setToDoList(updatedList);
    }

    // Add new item to list
    const addItems = (item) => {
        const updatedList = toDoList.filter(element => element.id == item);
        setToDoList(updatedList);
    }
    return (
        <>
        <TaskListing items={toDoList} toggleCompleted={toggleCompleted} deleteItems={deleteItems}/>
        </>
    );
    
}

export default MainContainer;