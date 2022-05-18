import React, { useState } from "react"
import UploadAndDisplayImage from 'components/ImageUpload/imageUpload';
import ChangeNumFields from "components/ChangeNumFields/changeNumFields";
import formik, { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';


const FormSection = () => {
    const [file, setFile] = useState('')
    
    const handleFileUpload = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setFile(reader.result)
        };
        reader.readAsDataURL(file);
      }

    return (
        <Formik
            initialValues={{ nameOfNFT: '', description: '' , image_name: '', image_type: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
        {({ values, isSubmitting, setFieldValue }) => (
            <Form>
                <label htmlFor="nameOfNFT">Name of NFT</label>
                <Field type="text" name="nameOfNFT" />
                <ErrorMessage name="nameOfNFT" component="div" />
                <br></br>
                <label htmlFor="description">Give your NFT a Description</label>
                <Field type="text" as="textarea" name="description" />
                <ErrorMessage name="description" component="div" />
                <br></br>
                <input
                id="picture"
                name="picture"
                type="file"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setFieldValue("image_name", file.name);
                    setFieldValue("image_type", file.type);
                    handleFileUpload(event);
                }}
                />
                <br/>
                {file && <img width="300" height="300" src={file} /> }
                <br/>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
     </Formik>
    )
}

export default FormSection;