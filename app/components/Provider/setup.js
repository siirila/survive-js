import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import SettingsStore from '../../stores/SettingsStore';
import LaneStore from '../../stores/LaneStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('SettingsStore', SettingsStore);
  alt.addStore('LaneStore', LaneStore);

  persist(alt, storage(localStorage), 'app');
}
