import { useDispatch } from "react-redux";
import { deletePerson } from "../../redux/actions";
import css from './DeletePerson.module.css';

export default function DeletePerson({_id}) {   

    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deletePerson(_id));

         };
    return (
        <>
        <h2> WARNING!</h2>
        <h3>Are you sure you want to delete this person?</h3>
        <div className={css.buttonGroop}>
            <button className={css.button} onClick={handleDelete}>Yes</button>            
        </div>
        </>
    )
}