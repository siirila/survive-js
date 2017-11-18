import React from 'react';


export default (props) => {
    var task = props.task;
    var onDelete = props.onDelete;
    var id = props.id;

    var handleClick = (evt) => {
        onDelete(id, evt);
    }

    return (
      <div>
        <span>{task}</span>
        <button onClick={handleClick}>x</button>
      </div>
    )
}
