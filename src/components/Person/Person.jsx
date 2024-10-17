import css from './Person.module.css';

const Person = ({ person }) => {
      return (
          <div className={css.person}>
              <h3>{person?.name}</h3>
              <p>Age: {person?.age}</p>
              <p>Parents: {person.parents?.join(', ') || 'None'}</p>
              <p>Ancestors: {person.ancestors?.join(', ') || 'None'}</p>
              <p>Children: {person.children?.join(', ') || 'None'}</p>
              <p>Grandchildren: {person.grandchildren?.join(', ') || 'None'}</p>
          </div>
      );
  };
  
  export default Person;
  