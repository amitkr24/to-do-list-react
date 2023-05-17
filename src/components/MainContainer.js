import React,{useEffect, useState} from "react";
import TaskListing from "./TaskListing";

const MainContainer = ()=>{

    const [toDoList, setToDoList] = useState([]);
    const [addtoDoList, setAddToDoList] = useState('');
    const [showitemTitle, setshowitemTitle] = useState('');
    const [showitemId, setshowitemId] = useState('');

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
        const updatedList = toDoList.filter(element => element.id !== item);
        setToDoList(updatedList);
    }

    const handleChange = (event) => {
        setAddToDoList(event.target.value)
    }

    // Add new item to list
    const handleAddItems = () => {
        let lastElement = toDoList.slice(-1);
        let Object = {
            "userId": lastElement[0].userId,
            "id": parseInt(lastElement[0].id) + 1,
            "title": addtoDoList,
            "completed": false
        }
        setToDoList([...toDoList, Object]);
    }

    // update item to list 
    const handleUpdateItem = () => {
        
        for(let item of toDoList){
            if(item.id === showitemId){
                item.title = showitemTitle;
            }
        }
    }
    return (
        <>
            <TaskListing 
                items={toDoList} 
                toggleCompleted={toggleCompleted} 
                deleteItems={deleteItems} 
                handleChange={handleChange} 
                handleAddItems={handleAddItems}
                setshowitemTitle={setshowitemTitle}
                showitemTitle={showitemTitle}
                setshowitemId={setshowitemId}
                showitemId={showitemId}
                handleUpdateItem={handleUpdateItem}
            />
        </>
    );
    
}

export default MainContainer;