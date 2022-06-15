import React from 'react';
import PropTypes from 'prop-types';
import "./TaskCard.css"

TaskCard.propTypes = {
    taskName: PropTypes.string,
    taskDescription: PropTypes.string
};



function TaskCard(props) {

    function handleClick(e) {
        props.removeTodo(props.id)
    }

    return (

        <div className='card'>
            <p onClick={handleClick}>{props.taskName}</p>
        </div>
    );
}

export default TaskCard;