import { useDispatch} from "react-redux";
import { useId, useEffect } from "react";
import {  updatePerson, getPersonById } from "../../redux/operations.js";
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FormUpdate.module.css';

const CreateSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(34, 'Too Long!'),
    age: Yup.number().min(1, 'To Small').max(150, 'Too Much')

})


export default function FormUpdate({personId}) {
    const fieldId = useId;
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        age: '',
        parents: [],
        ancestors: [],
        children: [],
        grandchildren: []
    };
    const handleSubmit=(event, values, {setSubmitting}) => {
        event.preventDefault();
        const form = event.target;
        dispatch (updatePerson({
            _id: personId,
            name: values.name,
            age: values.age
        }));
        setSubmitting(false);
        form.reset();
    }
    useEffect(() => {
        getPersonById();
        
        }, [personId]);
    
    return (
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={CreateSchema}
            enableReinitialize
            >
            <Form className={css.formContainer}>
                <h3 className={css.formHeader}>Update a family member</h3>
                <label htmlFor={`${fieldId}-name`}  className={css.label}>Name</label>
                <Field type="text" name="name" id={`${fieldId}-name`} className={css.input}></Field>
                <ErrorMessage name="name" component="span" className={css.error}></ErrorMessage>
    
                <label htmlFor={`${fieldId}-age`} className={css.label}>Age</label>
                <Field type="text" name="age" id={`${fieldId}-age`} className={css.input}></Field>
                <ErrorMessage name="age" component="span" className={css.error}></ErrorMessage>
    
                <label htmlFor={`${fieldId}-parents`} className={css.label}>Parents</label>
                <Field type="text" name="parents" id={`${fieldId}-parents`} className={css.input} disabled></Field>
                <ErrorMessage name="parents" component="span" className={css.error}></ErrorMessage>
    
                <label htmlFor={`${fieldId}-ansestor`} className={css.label}>Ansestor</label>
                <Field type="text" name="ansestor" id={`${fieldId}-ansestor`} className={css.input} disabled></Field>
                <ErrorMessage name="ansestor" component="span" className={css.error}></ErrorMessage>
    
                <label htmlFor={`${fieldId}-children`} className={css.label}>Children</label>
                <Field type="text" name="children" id={`${fieldId}-children`} className={css.input} disabled></Field>
                <ErrorMessage name="children" component="span" className={css.error} ></ErrorMessage>
    
                <label htmlFor={`${fieldId}-grandchildren`} className={css.label}>Grandchildren</label>
                <Field type="text" name="grandchildren" id={`${fieldId}-grandchildren`} className={css.input} disabled></Field>
                <ErrorMessage name="grandchildren" component="span" className={css.error}></ErrorMessage>
                
                <button  type="submit" className={css.button} >Update</button>
            </Form>
            </Formik>
        )
    

}