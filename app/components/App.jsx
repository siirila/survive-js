import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
  addNote = () => {
    // It would be possible to write this in an imperative style.
    // I.e., through `this.state.notes.push` and then
    // `this.setState({notes: this.state.notes})` to commit.
    //
    // I tend to favor functional style whenever that makes sense.
    // Even though it might take more code sometimes, I feel
    // the benefits (easy to reason about, no side effects)
    // more than make up for it.
    //
    // Libraries, such as Immutable.js, go a notch further.

    // this.setState({
    //   notes: this.state.notes.concat([{
    //     id: uuid.v4(),
    //     task: 'New task'
    //   }])
    // });
    
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New Task'
    });
  }
  
  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    // console.log(`The id being deleted is ${id}`);
    // this.setState({
    //   notes: this.state.notes.filter(note => note.id !== id)
    // });
    
    this.props.NoteActions.delete(id);

  }

  activateNoteEdit = (id) => {
    // this.setState({
    //   notes: this.state.notes.map(note => {
    //     if(note.id === id) {
    //       note.editing = true;
    //     }

    //     return note;
    //   })
    // });
    
    this.props.NoteActions.update({id, editing: true});
  }

  editNote = (id, task) => {
    // this.setState({
    //   notes: this.state.notes.map(note => {
    //     if(note.id === id) {
    //       note.editing = false;
    //       note.task = task;
    //     }

    //     return note;
    //   })
    // });
    
    this.props.NoteActions.update({id, task, editing: false});
  }

  render() {
    let {notes} = this.props;
    return (
      <div>
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }
}

export default connect(({notes}) => ({
  notes
}), { NoteActions })(App)

