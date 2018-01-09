import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import ThemeButton from './ThemeButton';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import SettingsActions from '../actions/SettingsActions';

class App extends React.Component {
  addNote = () => {
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
  
  decreaseFontSize = () => {
    this.props.SettingsActions.updateFontSize(--this.props.settings.fontSize);
  }
  
  increaseFontSize = () => {
    this.props.SettingsActions.updateFontSize(++this.props.settings.fontSize);
  }
  
  changeTheme = (theme) => {
    this.props.SettingsActions.updateTheme(theme);
  }

  render() {
    let {notes} = this.props;
    return (
      <div style={{ fontSize: this.props.settings.fontSize }} className={`app app-${this.props.settings.theme}`}>
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
        <div> Font size is: {this.props.settings.fontSize}</div>
        <div> Change font size:
          <button onClick={this.decreaseFontSize}>-</button>
          <button onClick={this.increaseFontSize}>+</button>
        </div>
        <ThemeButton theme={this.props.settings.theme} changeTheme={this.changeTheme}/>
      </div>
    );
  }
}

export default connect(({notes, settings}) => ({
  notes,
  settings
}), { 
  NoteActions,
  SettingsActions
  })(App);
