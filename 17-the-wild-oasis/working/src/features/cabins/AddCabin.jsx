import React, {useState} from 'react';
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";

function AddCabin() {
    const [isOpenModal, setIsModalOpen] = useState(false)
    return (
        <div><Button onClick={() => setIsModalOpen(show => !show)}>Add new cabin</Button>
            {isOpenModal && <Modal onClose={() => setIsModalOpen(false)}><CreateCabinForm
                onCloseModal={() => setIsModalOpen(false)}/></Modal>}</div>
    );
}

export default AddCabin;