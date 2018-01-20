import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import ThemeButton from './ThemeButton';
import SettingsActions from '../actions/SettingsActions';


const App = ({LaneActions, lanes, settings, SettingsActions}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };
  
  const decreaseFontSize = () => {
    SettingsActions.updateFontSize(--settings.fontSize);
  };
  
  const increaseFontSize = () => {
    SettingsActions.updateFontSize(++settings.fontSize);
  };
  
  const changeTheme = (theme) => {
    SettingsActions.updateTheme(theme);
  };

  return (
    <div style={{ fontSize: settings.fontSize }} className={`app app-${settings.theme}`}>
      <button className="add-lane" onClick={addLane}>Add Lane</button>
      <Lanes lanes={lanes} />
      <div> Font size is: {settings.fontSize}</div>
      <div> Change font size:
        <button onClick={decreaseFontSize}>-</button>
        <button onClick={increaseFontSize}>+</button>
      </div>
      <ThemeButton theme={settings.theme} changeTheme={changeTheme}/>
    </div>
  );
};

export default connect(({lanes, settings}) => ({
  lanes,
  settings
}), {
  LaneActions,
  SettingsActions
})(App);
