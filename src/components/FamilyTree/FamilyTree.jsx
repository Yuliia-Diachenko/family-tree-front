import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFamily, selectLoading } from '../../redux/selectors';
import { getFamily } from "../../redux/operations";
import Person from '../Person/Person';
import css from './FamilyTree.module.css';

export default function FamilyTree() {
    const dispatch = useDispatch();
 
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
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(family) || family.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <ul className={css.list}>
            {family.map((person) => (
                <li key={`${person._id}`}>
                    <Person person={person} />
                </li>
            ))}
        </ul>
    );
}
