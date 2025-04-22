import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    const styles = {
        content: {
            backgroundColor: '#fefefe',
            width: '400px',
            margin:'17% auto',
            padding: '20px',
            borderRadius: '10px',
     
          },
        overlay: {
            
            background: 'rgba(0, 0, 0, 0.5)'         
        }
      };
    
    return (
        <Modal isOpen={isOpen} style={styles}>
             
                       <p>Are you sure you want to delete this meeting?</p>
             
                        <div className="d-flex justify-content-end mt-4 gap-2">
                        <button className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button className="btn btn-primary" onClick={onConfirm}>Delete</button>
                       </div>
                
                </Modal>
    );
};

export default DeleteModal;