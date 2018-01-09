import React from 'react';


export default (props) => {
    let otherTheme = '';
    if (props.theme === 'light') {
        otherTheme = 'dark';
    } else {
        otherTheme = 'light';
    }
    
    const onClick = () => props.changeTheme(otherTheme);
    
    return (
        <div>
            <span>The current theme is {props.theme}</span>
            <button onClick={onClick}>Switch to {otherTheme} theme</button>
        </div>
    );
};
