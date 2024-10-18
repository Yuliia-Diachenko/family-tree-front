import css from './Person.module.css';

const Person = ({ person }) => {
      return (
          <div className={css.person}>
              <h3>{person?.name}</h3>
              <p>Age: <span>{person?.age}</span></p>
              <p>Parents: <span>{person.parents?.join(', ') || ''}</span></p>
              <p>Ancestors: <span>{person.ancestors?.join(', ') || ''}</span></p>
              <p>Children: <span>{person.children?.join(', ') || ''}</span></p>
              <p>Grandchildren: <span>{person.grandchildren?.join(', ') || ''}</span></p>
          </div>
      );
  };
  
  export default Person;
  