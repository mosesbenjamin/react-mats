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
                        color: 'green'
                    }
                }
            }
            > 
                <h6>Modal Title</h6>
                <p>Modal Body</p>
                <button className="btn btn-primary" onClick={()=> setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
        </>
    );
};

export default ReactModal;
