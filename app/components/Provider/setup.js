import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import SettingsStore from '../../stores/SettingsStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('SettingsStore', SettingsStore);
  
  persist(alt, storage(localStorage), 'app');
}
