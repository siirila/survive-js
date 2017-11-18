import React from 'react';
import uuid from 'uuid';

import Note from './Note.jsx';


export default ({notes, onDelete=() => {}}) => (
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note
        id={id}
        onDelete={onDelete}
        task={task} />
    </li>
  )}</ul>
)
