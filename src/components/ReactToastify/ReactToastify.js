import React from "react";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './ReactToastify.css';



//Custom Toast Component
const CustomToast = ({ closeToast })=>{
    return(
        <div>
            Something went wrong!
            <button  className="btn btn-sm btn-secondary ml-3" onClick={closeToast}>Close</button>
        </div>
    );
}

toast.configure();
const ReactToastify = () => {

    const notify = () =>{
        // Autoclose deault is 5s
        toast("Basic notification", {position: toast.POSITION.TOP_LEFT})
        toast.success("Basic notification", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 8000
        })
        toast.info("Basic notification", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false
        })
        toast.warn(<CustomToast />, {position: toast.POSITION.BOTTOM_LEFT}) //Custom component
        toast.error("Basic notification", {position: toast.POSITION.BOTTOM_CENTER})
        toast("Basic notification", {position: toast.POSITION.BOTTOM_RIGHT})
    }

    return (
        <>
        <div className="toast-container">
            <h4>Toast Notifications</h4>
            <button className="btn btn-primary mt-3" onClick={notify}>Notify</button>
        </div>
        </>
    );
};

export default ReactToastify;
