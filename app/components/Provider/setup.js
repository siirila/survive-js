import NoteStore from '../../stores/NoteStore';
import SettingsStore from '../../stores/SettingsStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('SettingsStore', SettingsStore);
}
