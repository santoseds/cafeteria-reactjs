import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFoodContext from './hook/useFoodContext';

function DeleteFoodModal() {
    const {showDeleteFoodModal, 
    handleDeleteFood, toggleDeleteFoodModal}= useFoodContext();
  return (
    <>
    <Modal show={showDeleteFoodModal} onHide={toggleDeleteFoodModal}>
        <Modal.Header closeButton>
            <Modal.Title as="h5">
                Delete Food
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Delete Food?</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={()=>{toggleDeleteFoodModal()}}>Close</Button>
            <Button variant="primary" onClick= {handleDeleteFood}>Delete</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default DeleteFoodModal;