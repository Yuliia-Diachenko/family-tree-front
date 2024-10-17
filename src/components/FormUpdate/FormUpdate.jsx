import { useDispatch } from "react-redux";
import { useId, useEffect, useState } from "react";
import { updatePerson, getPersonById, getFamily } from "../../redux/operations.js";
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FormUpdate.module.css';

const CreateSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(34, 'Too Long!'),
    age: Yup.number().min(1, 'Too Small!').max(150, 'Too Much!')
});

export default function FormUpdate({ personId, onSuccess, onClose }) {
    const fieldId = useId();
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState({
        name: '',
        age: '',
        parents: [],
        ancestors: [],
        children: [],
        grandchildren: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPersonData = async () => {
            if (personId) {
                try {
                    const response = await dispatch(getPersonById(personId)).unwrap();
                    console.log("Response data:", response);
                    setInitialValues({
                        name: response.data.name || '',
                        age: response.data.age || '',
                        parents: response.data.parents || [],
                        ancestors: response.data.ancestors || [],
                        children: response.data.children || [],
                        grandchildren: response.data.grandchildren || []
                    });
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching person data:", error);
                }
            }
        };

        fetchPersonData();
    }, [personId, dispatch]);

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(updatePerson({
            _id: personId,
            name: values.name,
            age: values.age
        })).then(() => {
            onSuccess();
            onClose();
        }).catch(error => {
            console.error("Error updating person:", error);
        }).finally(() => {
            setSubmitting(false);
            dispatch(getFamily()).unwrap();
        });
    };

    if (loading) {
        return <div className={css.blink}>Loading...</div>;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={CreateSchema}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Form className={css.formContainer}>
                    <h3 className={css.formHeader}>Update a family member</h3>
                    <label htmlFor={`${fieldId}-name`} className={css.label}>Name</label>
                    <Field type="text" name="name" id={`${fieldId}-name`} className={css.input}></Field>
                    <ErrorMessage name="name" component="span" className={css.error}></ErrorMessage>

                    <label htmlFor={`${fieldId}-age`} className={css.label}>Age</label>
                    <Field type="text" name="age" id={`${fieldId}-age`} className={css.input}></Field>
                    <ErrorMessage name="age" component="span" className={css.error}></ErrorMessage>

                    <label htmlFor={`${fieldId}-parents`} className={css.label}>Parents</label>
                    <Field type="text" name="parents" id={`${fieldId}-parents`} className={css.input} disabled></Field>
                    <ErrorMessage name="parents" component="span" className={css.error}></ErrorMessage>

                    <label htmlFor={`${fieldId}-ancestors`} className={css.label}>Ancestors</label>
                    <Field type="text" name="ancestors" id={`${fieldId}-ancestors`} className={css.input} disabled></Field>
                    <ErrorMessage name="ancestors" component="span" className={css.error}></ErrorMessage>

                    <label htmlFor={`${fieldId}-children`} className={css.label}>Children</label>
                    <Field type="text" name="children" id={`${fieldId}-children`} className={css.input} disabled></Field>
                    <ErrorMessage name="children" component="span" className={css.error} ></ErrorMessage>

                    <label htmlFor={`${fieldId}-grandchildren`} className={css.label}>Grandchildren</label>
                    <Field type="text" name="grandchildren" id={`${fieldId}-grandchildren`} className={css.input} disabled></Field>
                    <ErrorMessage name="grandchildren" component="span" className={css.error}></ErrorMessage>

                    <button type="submit" className={css.button} disabled={isSubmitting}>Update</button>
                </Form>
            )}
        </Formik>
    );
}
