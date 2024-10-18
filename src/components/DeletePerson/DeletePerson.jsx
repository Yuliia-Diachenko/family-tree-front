import { useDispatch } from "react-redux";
import { deletePerson, getFamily } from "../../redux/operations.js";
import css from './DeletePerson.module.css';

export default function DeletePerson({ personId, onStart, onSuccess, onClose }) {   

    const dispatch = useDispatch();
    const handleDelete = async () => {
        onStart();
        try {
            await dispatch(deletePerson(personId)).unwrap();
            await dispatch(getFamily()).unwrap();
            onSuccess();
        } catch (error) {
            console.error("Error deleting person:", error);
        }
    };


    console.log('Person Id:', personId);

    return (
        <div className={css.container}>
        <h2> WARNING!</h2>
        <h3>Are you sure you want to delete this person?</h3>
        <div className={css.buttonContainer}>
            <button className={css.button} onClick={handleDelete}>Yes</button>  
            <button onClick={onClose} className={css.button}>No</button>          
        </div>
        </div>
    )
}