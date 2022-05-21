import React, { useState } from "react";
import { DisplayFormState } from "components/FormSection/displayFormState";
import formInitialValues from "components/FormModel/formInitialValues";
import validationSchema from "components/FormModel/validationSchema";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

const FormSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const mintNFT = (values, setSubmitting) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
    }

    return (
        <Formik
            initialValues={formInitialValues}
            validationSchema={validationSchema[activeStep]}
            onSubmit={(values, { setSubmitting }) => {
                mintNFT(values, setSubmitting)
            }}
        >
        {({ errors, touched, values, isSubmitting, setFieldValue }) => (
            <Form>
                <br></br>
                
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