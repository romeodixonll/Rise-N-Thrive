import React, { useState } from 'react';

export const ColorContext = React.createContext({
    textColor: '#6978FF'
});

const ColorContextProvider = (props) => {
    const [textColor, setTextColor] = useState('#6978FF');
    // const [theme, setTheme] = useState('#393939');

    return (
        <ColorContext.Provider value={[textColor, setTextColor]}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider