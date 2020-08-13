import React from "react";
import ReactIcons from './components/ReactIcons/ReactIcons';
import ReactToastify from './components/ReactToastify/ReactToastify';
import ReactModal from './components/ReactModal/ReactModal';

import './App.css'

const App = () => {

    return (
        <div className="container mt-5">
          <ReactIcons />
          <ReactToastify />
          <ReactModal />
        </div>
    );
};

export default App;
