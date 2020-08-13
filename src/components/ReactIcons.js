import React from "react";
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';

import './ReactIcons.css';

const ReactIcons = () => {

    return (
        <>
        <div className="icon-container">
            <h4>React Icons</h4>
            <IconContext.Provider value={{ color: "blue", size:"5rem" }}>
                {/* <FaReact color="purple" size="10rem"/>
                <MdAlarm color="green" size="10rem"/> */}
                <FaReact />
                <MdAlarm />
            </IconContext.Provider>  
          </div>
        </>
    );
};

export default ReactIcons;
