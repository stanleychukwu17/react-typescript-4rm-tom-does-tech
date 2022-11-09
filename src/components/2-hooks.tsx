import React, { useRef, useState } from 'react'
/**
    You can watch the lecture from 20:00 to see him use the useReducer hook
*/

// creates the initial todo items
type todoState = {
    id: number,
    description: string
}

type addToListProps = {
    handleClick: (description: todoState['description']) => void;
}

// this component will be used to add a new item to the todoList
const AddItemToTheTodoList = ({handleClick}: addToListProps) => {
    const inputRef = useRef<HTMLInputElement>(null!)

    return (
        <div className="">
            <input ref={inputRef} type="text" placeholder='Add an item to your todo list'/>
            <button onClick={() => {
                // if you did useRef<HTMLInputElement>(null!) in the above, then you can do this below: if (inputRef.current.value.length > 0) {}
                if (inputRef.current && inputRef.current.value.length > 0) {
                    handleClick(inputRef.current.value)
                    inputRef.current.value = ''
                }
            }}>Add item</button>
        </div>
    )
}

const itemsList: todoState[] = [
    {id:1, description:'Going home'},
    {id:2, description:'Will see my love soon'},
]

export default function TodoComp() {
    const [items, setItems] = useState<todoState[]>(itemsList)

    const addItem = (description: todoState['description']) => {
        // setItems([...items, {id:items.length+1, description}]) - this is the teacher method, his id generation becomes buggy once you start deleting items from the list
        // in my method below, i pick the last id and add increases it, if there are not items in the list, i default to 1.
        setItems([...items, {id:items[items.length - 1].id + 1 || items.length+1, description}])
    }

    const removeItem = (idToDelete: todoState['id']) => {
        const newList = items.filter(echItem => echItem.id !== idToDelete)
        // or const newList: todoState[] = items.filter(echItem => echItem.id !== idToDelete), but no need for this method because type script is smart enough to know that items are of type todoState[]
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