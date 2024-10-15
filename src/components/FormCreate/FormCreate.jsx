import { useDispatch } from "react-redux";
import { useId } from "react";
import { addPerson } from "../../redux/operations.js";
import css from './FormCreate.module.css';
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(34, 'Too Long!').required('Required'),
    age: Yup.number().min(1, 'Too Small').max(150, 'Too Much').required('Required'),
    parents: Yup.string().matches(/^[^,]+(,[^,]+)*$/, 'Parents should be a comma-separated string'),
    ancestors: Yup.string().matches(/^[^,]+(,[^,]+)*$/, 'Ancestors should be a comma-separated string'),
    children: Yup.string().matches(/^[^,]+(,[^,]+)*$/, 'Children should be a comma-separated string'),
    grandchildren: Yup.string().matches(/^[^,]+(,[^,]+)*$/, 'Grandchildren should be a comma-separated string'),
       
});

export default function FormCreate({ onClose }) {
    const fieldId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log("Submitting values:", values);

        const toArray = (input) => {
            if (Array.isArray(input)) return input; 
            if (typeof input === 'string' && input.trim()) return input.split(',').map(item => item.trim()); 
            return []; 
        };

        const toNumber = (input) => {
            return typeof input === 'string' ? parseFloat(input) : input;
        };

        const personData = {
            name: values.name,
            age: toNumber(values.age),
            parents: toArray(values.parents),
            ancestors: toArray(values.anсestor),
            children: toArray(values.children),
            grandchildren: toArray(values.grandchildren)
        };

        console.log("Submitting person data:", personData);

        dispatch(addPerson(personData))
            .then(response => {
                console.log("Response:", response);
                resetForm();
                onClose(); 
            })
            .catch(error => {
                console.error("Error adding person:", error.response ? error.response.data : error.message);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={{            
                name: '',
                age: '',
                parents: '',
                anсestors: '',
                children: '',
                grandchildren: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={CreateSchema}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Form className={css.formContainer}>
                    <h3 className={css.formHeader}>Create a family member</h3>
                    <label htmlFor={`${fieldId}-name`} className={css.label}>Name</label>
                    <Field type="text" name="name" id={`${fieldId}-name`} className={css.input} />
                    <ErrorMessage name="name" component="span" className={css.error} />

                    <label htmlFor={`${fieldId}-age`} className={css.label}>Age</label>
                    <Field type="text" name="age" id={`${fieldId}-age`} className={css.input} />
                    <ErrorMessage name="age" component="span" className={css.error} />

                    <label htmlFor={`${fieldId}-parents`} className={css.label}>Parents</label>
                    <Field type="text" name="parents" id={`${fieldId}-parents`} className={css.input} />
                    <ErrorMessage name="parents" component="span" className={css.error} />

                    <label htmlFor={`${fieldId}-anсestors`} className={css.label}>Anсestors</label>
                    <Field type="text" name="ansestors" id={`${fieldId}-anсestors`} className={css.input} />
                    <ErrorMessage name="anсestors" component="span" className={css.error} />

                    <label htmlFor={`${fieldId}-children`} className={css.label}>Children</label>
                    <Field type="text" name="children" id={`${fieldId}-children`} className={css.input} />
                    <ErrorMessage name="children" component="span" className={css.error} />

                    <label htmlFor={`${fieldId}-grandchildren`} className={css.label}>Grandchildren</label>
                    <Field type="text" name="grandchildren" id={`${fieldId}-grandchildren`} className={css.input} />
                    <ErrorMessage name="grandchildren" component="span" className={css.error} />

                    <button type="submit" className={css.button} disabled={isSubmitting}>Create</button>
                </Form>
            )}
        </Formik>
    );
}
