import React from 'react';
import uuid from 'uuid';

var createNote = (note) => <li key={note.id}>{note.task}</li>;

var createNotes = (items) => items.map(createNote);

export default (props) => {
    let { notes } = props;
    
    return (
        <ul>
            {createNotes(notes)}
        </ul>
    );
}
