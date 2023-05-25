import React,{useEffect, useState} from "react";
import TaskListing from "./TaskListing";
import Swal from 'sweetalert2';

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
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'DELETE',
        })
        .then(() => {
            const updatedList = toDoList.filter((element => {
                if (item !== element.id) {
                    return true;
                }
            }));

            setToDoList(updatedList);
        });
    }
    const handleChange = (event) => {
        setAddToDoList(event.target.value)
    }

    // Add new item to list
    const handleAddItems = () => {
        
        let lastElement = toDoList.slice(-1);
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
                method: 'POST',
                body: JSON.stringify({
                    title: addtoDoList,
                    id: lastElement[0].id,
                    userId: lastElement[0].userId,
                    completed: false
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                }).then((response) => response.json())
                .then((json) => {
                    json.id = parseInt(lastElement[0].id) + 1;
                    setToDoList([...toDoList, json])
                    Swal.fire('Saved!', '', 'success')
                });
        }

    // update item to list 
    const handleUpdateItem = () => {
        
        // for(let item of toDoList){
        //     if(item.id === showitemId){
        //         item.title = showitemTitle;
        //     }
        // }
        fetch(`https://jsonplaceholder.typicode.com/todos/${showitemId}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: showitemTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const updatedList = toDoList.filter((element => {
            if (json.id === element.id) {
              element.title = showitemTitle;
            }
            return true;
          }));
          setToDoList(updatedList);
          Swal.fire('Saved!', '', 'success')
        });
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