import React, { useRef, useState } from 'react'
/**
remove a todoItem from the list of todo
create a separate component for adding an item to the todo
*/


// the component that will be used to add a new item to the todoList
type addToListProps = {
    handleClick: (description: todoState['description']) => void;
}

const AddItemToTheTodoList = ({handleClick}: addToListProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="">
            <input ref={inputRef} type="text" placeholder='Add an item to your todo list'/>
            <button onClick={() => {
                if (inputRef.current && inputRef.current.value.length > 0) {
                    handleClick(inputRef.current.value)
                    inputRef.current.value = ''
                }
            }}>Add item</button>
        </div>
    )
}



// creates the initial todo items
type todoState = {
    id: number,
    description: string
}

const itemsList: todoState[] = [
    {id:1, description:'Going home'},
    {id:2, description:'Will see my love soon'},
]

export default function TodoComp() {
    const [items, setItems] = useState<todoState[]>(itemsList)

    const addItem = (description: todoState['description']) => {
        setItems([...items, {id:items[items.length - 1].id + 1 || items.length+1, description}])
        // setItems([...items, {id:items.length+1, description}])
    }

    const removeItem = (idToDelete: todoState['id']) => {
        const newList = items.filter(echItem => echItem.id !== idToDelete)
        setItems(newList)
    }

    return (
        <div className="mainCover">
            <AddItemToTheTodoList handleClick={addItem} />

            <div className="todoCover">
                {items.map((item) => {
                    return (
                        <div className="todoItem" data-hold={item.id} key={item.id}>
                            <div className="">{item.description}</div>
                            <div className="delete_am">
                                <button onClick={() => removeItem(item.id)}>X</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}