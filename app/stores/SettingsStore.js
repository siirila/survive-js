import SettingsActions from '../actions/SettingsActions';

export default class SettingsStore {
  constructor() {
    this.bindActions(SettingsActions);  

    this.settings = {
        theme: 'light',
        fontSize: 16
    }
  }
  
  updateFontSize(fontSize) {
      console.log('Update font size called!');
      
      this.settings.fontSize = fontSize;
  }
  
  updateTheme(theme) {
    console.log('Update theme called!');
    
    this.settings.theme = theme;
  }
}
