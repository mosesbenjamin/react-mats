import React, {useState} from "react";
import Modal from 'react-modal';

import './ReactModal.css';

Modal.setAppElement('#root');
const ReactModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
        <div className="modal-container">
            <h4 className="mb-3">React Modal</h4>
            <button className="btn btn-primary" onClick={()=> setModalIsOpen(true)}>Modal</button>
            {/* shouldCloseOnOverlayClick set to false */}
            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=>setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        background: 'grey',
                        opacity: '0.9'
                       
                    },
                    content: {
                        color: 'rgba(0,0,0)', 
                        width: '40%',
                        height: '40vh',
                        margin: 'auto',
                        overflow: 'hidden'
                    }
                }
            }
            > 
            <div className="text-center">
                <h6>Modal Title</h6>
                <p>Modal Body</p>
                <button className="btn btn-primary" onClick={()=> setModalIsOpen(false)}>Close</button>
            </div>
            </Modal>
        </div>
        </>
    );
};

export default ReactModal;
