import { useDispatch} from "react-redux";
import useId from "react";
import { addPerson } from "../../redux/operations.js";
import css from './FormCreate.module.css';
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(34, 'Too Long!').required('Required'),
    age: Yup.number().min(1, 'To Small').max(150, 'Too Much').required('Required'),
    parents: Yup.string(),
    ansestor: Yup.string(),
    children: Yup.string(),
    grandchildren: Yup.string()
})

export default function FormCreate() {
    const fieldId = useId;
    const dispatch = useDispatch();
    const handleSubmit=(event, values) => {
        event.preventDefault();
        const form = event.target;
        dispatch(addPerson({
            name: values.name,
            age: values.age,
            parents: values.parents,
            ansestor: values.ansestor,
            children: values.children,
            grandchildren: values.grandchildren 
        }));
        form.reset();
    }
    return (
        <Formik
        initialValues={{
          name: '',
          age: '',
          parents:[],
          ansestor: [],
          children: [],
          grandchildren: []
        }}
        onSubmit={handleSubmit}
        validationSchema={CreateSchema}
        enableReinitialize
        >
        <Form className={css.formContainer}>
            <h3 className={css.formHeader}>Create a family member</h3>
            <label htmlFor={`${fieldId}-name`}  className={css.label}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`} className={css.input}></Field>
            <ErrorMessage name="name" component="span" className={css.error}></ErrorMessage>

            <label htmlFor={`${fieldId}-age`} className={css.label}>Age</label>
            <Field type="text" name="age" id={`${fieldId}-age`} className={css.input}></Field>
            <ErrorMessage name="age" component="span" className={css.error}></ErrorMessage>

            <label htmlFor={`${fieldId}-parents`} className={css.label}>Parents</label>
            <Field type="text" name="parents" id={`${fieldId}-parents`} className={css.input}></Field>
            <ErrorMessage name="parents" component="span" className={css.error}></ErrorMessage>

            <label htmlFor={`${fieldId}-ansestor`} className={css.label}>Ansestor</label>
            <Field type="text" name="ansestor" id={`${fieldId}-ansestor`} className={css.input}></Field>
            <ErrorMessage name="ansestor" component="span" className={css.error}></ErrorMessage>

            <label htmlFor={`${fieldId}-children`} className={css.label}>Children</label>
            <Field type="text" name="children" id={`${fieldId}-children`} className={css.input}></Field>
            <ErrorMessage name="children" component="span" className={css.error} ></ErrorMessage>

            <label htmlFor={`${fieldId}-grandchildren`} className={css.label}>Grandchildren</label>
            <Field type="text" name="grandchildren" id={`${fieldId}-grandchildren`} className={css.input}></Field>
            <ErrorMessage name="grandchildren" component="span" className={css.error}></ErrorMessage>
            
            <button  type="submit" className={css.button}>Create</button>
        </Form>
        </Formik>
    )

}