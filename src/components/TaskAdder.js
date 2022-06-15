import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react'
import "./TaskAdder.css"

TaskAdder.propTypes = {
    
};

function TaskAdder(props) {

    const [taskName, setTaskName] = useState("");

    function handleClick() {
        if (taskName){
            props.submitTask(taskName);
            setTaskName("")
        } else {
            props.noInput("inline-block")
        }

    }

    function handleEnterKey(e){
        if (e.key === 'Enter'){
            if (taskName){
                props.submitTask(taskName)
                setTaskName("")
            } else {
                props.noInput("block")

            }
        }
    }
    
    function handleChange(e){
        setTaskName(e.target.value)
    }
    
    return (
        <div className="task-adder">
            <input  name="name" type="text" value={taskName} onKeyPress={handleEnterKey} onChange={handleChange} maxLength="150"></input>
            <button onClick={handleClick}>Add task</button>
        </div>
    );
}

export default TaskAdder;