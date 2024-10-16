import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFamily, selectLoading } from '../../redux/selectors';
import { getFamily } from "../../redux/operations";
import Person from '../Person/Person';
import ModalWindow from "../ModalWindow/ModalWindow";
import css from './FamilyTree.module.css';

export default function FamilyTree() {
    const dispatch = useDispatch();
    const [personId, setPersonId] = useState('');

    useEffect(() => {
        dispatch(getFamily());
    }, [dispatch]);

    const familyData = useSelector(selectFamily);
    const loading = useSelector(selectLoading);
    let family = [];

    if (typeof familyData === 'object' && familyData.data) {
            family = familyData.data;
    } else {
        console.log("FamilyData is array or undefined:", familyData);
        family = familyData;
    };

    if (loading) {
        return <div className={css.blink}>Loading...</div>;
    };

    if (!Array.isArray(family) || family.length === 0) {
        return <div className={css.blink}>No data available</div>;
    };
    const handleClick = (person) => {
         setPersonId(person);  
         console.log('person Id:', person);  
    };


    return (
        <>
        <ul className={css.list}>
            {family.map((person) => (
                <li key={`${person._id}-${person.name}`}>
                    <button onClick={()=>{handleClick(person._id)}}className={css.button}><Person person={person} /></button>
                </li>
                
            ))}
        </ul>
        <div className={css.buttonBar}>
        <ModalWindow personId={personId} />
        </div>
         </>
    );
}
