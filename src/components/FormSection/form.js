import React, { useState } from "react"
import { DisplayFormState } from "components/FormSection/displayFormState"
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(200, 'Too Long!')
      .required('An NFT needs a name'),
    description: Yup.string()
      .min(3, 'Too Short!')
      .max(200, 'Too Long!')
      .required('An NFT needs a description'),
    
  });

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
            initialValues={{ name: '', description: '' , image_name: '', image_type: '', blockchain: ''}}
            validationSchema={validationSchema}
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
        {({ errors, touched, values, isSubmitting, setFieldValue }) => (
            <Form>
                <label htmlFor="name">Name of NFT</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
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
                <Field 
                    as="select"
                    name="blockchain"
                    id="select_blockchain"
                    placeholder="Select Blockchain"
                >
                    <option value="">Select a Chain (Testnet only)</option>
                    <option value="Ethereum">Ethereum (Kovan)</option>
                    <option value="Avalanche">Avalanche (Fuji)</option>
                    <option value="Binance Smart Chain">Binance Smart Chain (...)</option>
                    <option value="Polygon">Polygon</option>
                </Field>
                <br/>
                <button type="submit" disabled={isSubmitting}>
                    Mint NFT
                </button>
                <DisplayFormState {...values} />
            </Form>
            
        )}
     </Formik>
    )
}

export default FormSection;