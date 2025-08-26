import React, {useState} from 'react';
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";
import CabinTable from "./CabinTable.jsx";

function AddCabin() {
    return <div>
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm/>
            </Modal.Window>
        </Modal>
    </div>

}


// function AddCabin() {
//     const [isOpenModal, setIsModalOpen] = useState(false)
//     return (
//         <div>
//             <Button onClick={() => setIsModalOpen(show => !show)}>Add new cabin</Button>
//             {isOpenModal &&
//                 <Modal onClose={() => setIsModalOpen(false)}>
//                     <CreateCabinForm
//                         onCloseModal={() => setIsModalOpen(false)}/>
//                 </Modal>}
//         </div>
//     );
// }

export default AddCabin;