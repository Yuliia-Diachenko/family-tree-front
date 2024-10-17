import css from './Person.module.css';

const Person = ({ person }) => {
      return (
          <div className={css.person}>
              <h3>{person?.name}</h3>
              <p>Age: <span>{person?.age}</span></p>
              <p>Parents: <span>{person.parents?.join(', ') || 'None'}</span></p>
              <p>Ancestors: <span>{person.ancestors?.join(', ') || 'None'}</span></p>
              <p>Children: <span>{person.children?.join(', ') || 'None'}</span></p>
              <p>Grandchildren: <span>{person.grandchildren?.join(', ') || 'None'}</span></p>
          </div>
      );
  };
  
  export default Person;
  