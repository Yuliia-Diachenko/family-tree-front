import css from './FamilyTree.module.css';

export default function FamilyTree() {
    return (
        <ul className={css.list}>
            <li>grandparent
                <ul>
                    <li>parent 
                        <ul> 
                            <li>children 
                                <ul><li>
                                    grandchildren
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>            
        </ul>
    )
}