import React from "react";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './ReactToastify.css';

toast.configure();
const ReactToastify = () => {

    const notify = () =>{
        toast("Basic notification", {position: toast.POSITION.TOP_LEFT})
        toast("Basic notification", {position: toast.POSITION.TOP_CENTER})
        toast("Basic notification", {position: toast.POSITION.TOP_RIGHT})
        toast("Basic notification", {position: toast.POSITION.BOTTOM_LEFT})
        toast("Basic notification", {position: toast.POSITION.BOTTOM_CENTER})
        toast("Basic notification", {position: toast.POSITION.BOTTOM_RIGHT})
    }

    return (
        <>
        <div className="toast-container">
            <h4>Toast Notifications</h4>
            <button className="btn btn-primary" onClick={notify}>Notify</button>
        </div>
        </>
    );
};

export default ReactToastify;
