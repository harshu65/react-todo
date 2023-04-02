import React from 'react'

export default function ShowTodo(props) {
    return (
        <div className='container bgcolor'>
            <div className="row my-2">

                <div className="col-6">
                    <h6 className='mono'>{props.task}</h6>
                </div>
                <div className="col-6  text-end">
                <button className="bgcolor" onClick={()=>{props.onSelcet(props.id)}}>&#x2715;</button>
                </div>
            </div>
        </div>
    )
}


