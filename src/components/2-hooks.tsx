import React, { useState } from 'react'
/**
remove a todoItem from the list of todo
create a separate component for adding an item to the todo
*/

type todoState = {
    id: number,
    description: string
}

const itemsList: todoState[] = [
    {id:1, description:'Going home'},
    {id:2, description:'Will see my love soon'},
]

const AddItemToTheTodoList = () => {
    return (
        <div className="">
            <input type="text" placeholder='Add an item to your todo list'/>
            <button>Add item</button>
        </div>
    )
}

export default function TodoComp() {
    const [items, setItems] = useState<todoState[]>(itemsList)

    const removeItem = (idToDelete: todoState['id']) => {
        const newList = items.filter(echItem => echItem.id !== idToDelete)
        setItems(newList)
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <div className="mainCover">

                        <div className="todoCover">
                            <div className="todoItem" key={item.id}>
                                <div className="">{item.description}</div>
                                <div className="delete_am">
                                    <button onClick={() => removeItem(item.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}