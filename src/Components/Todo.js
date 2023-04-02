import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import './Todo.css'
export default function Todo() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        if (task === "" || task === null || task === undefined)
        {
            window.alert("Task can't be empty!");
            e.preventDefault();
        }
        else{
            e.preventDefault();
            const newData = task;
            setData([...data, newData])
            setTask('')
        }
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className=" col mt-3 ms-1 me-1 shadow main-col bg-white">
                    <div className="row bg-dark text-white">
                        <div className="col  p-2">
                            <h2 className='mono text-center'>Todo App Using React JS</h2>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group p-0 ps-xs-1 pe-2  mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} 
                                onChange={onChangeHandler} />
                            </div>
                            <button type="submit" className="mono btn btn-dark mb-2 ml-2 col-3">Add todo</button>
                        </div>
                    </form>

                    {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            onSelcet={deleteItem}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}


