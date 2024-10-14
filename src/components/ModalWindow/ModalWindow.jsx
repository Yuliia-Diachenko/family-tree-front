import css from './ModalWindow.module.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoMdClose } from "react-icons/io";
import FormCreate from '../FormCreate/FormCreate.jsx';
import DeletePerson from '../DeletePerson/DeletePerson.jsx';
import FormUpdate from '../FormUpdate/FormUpdate.jsx';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderradius: '8px',
    boxShadow: 24,
    p: 4,
  };

export default function ModalWindow() {
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleOpen = (type) => {
        setModalType(type);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    
    return (
        <>
            <button type='button' onClick={() => handleOpen('create')} className={css.button}>Create</button>
            <button type='button' onClick={() => handleOpen('update')} className={css.button}>Update</button>
            <button type='button' onClick={() => handleOpen('delete')} className={css.button}>Delete</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className={css.container}>
        <button onClick={handleClose} className={css.iconClose}>
        <IoMdClose />
        </button>
                    {modalType === 'create' && <FormCreate onClose={handleClose}/>}
                    {modalType === 'update' && <FormUpdate />}
                    {modalType === 'delete' && <DeletePerson />}
        </Box>
      </Modal>
        </>
    )
}