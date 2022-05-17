import React, { useState } from "react"
import UploadAndDisplayImage from 'components/ImageUpload/imageUpload';
import ChangeNumFields from "components/ChangeNumFields/changeNumFields";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

class MetadataField {
    constructor(label = '', type = 'Text', value = '') {
        this.label = label;
        this.type = type;
        this.value = value;
    }
}

const FormSection = () => {
    // const [metadataFields, setMetadataFields] = useState([new MetadataField()])

    // const incrementFields = (e) => {
    //     e.preventDefault();
    //     setMetadataFields([...metadataFields, new MetadataField()]);
    //   };

    // const decrementFields = (e) => {
    //     e.preventDefault();
    //     if (metadataFields.length === 0) return;
    //     setMetadataFields(prevState => 
    //         [...prevState.slice(0,-1)]
    //     )
    // };

    // const updateLabelInMetaDataField = (index, event) => {
    //     const newLabel = event.target.value;
    //     const metadataField = new MetadataField(newLabel, metadataFields[index].type, metadataFields[index].value);
    //     setMetadataFields(prevState => 
    //         [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
    //     )
    // }

    // const updateTypeInMetaDataField = (index, event) => {
    //     const newType = event.target.value;
    //     const metadataField = new MetadataField(metadataFields[index].label, newType, metadataFields[index].value);
    //     setMetadataFields(prevState => 
    //         [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
    //     )
    // }

    // const updateValueInMetaDataField = (index, event) => {
    //     const newValue = event.target.value;
    //     const metadataField = new MetadataField(metadataFields[index].label, metadataFields[index].type, newValue);
    //     setMetadataFields(prevState => 
    //         [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
    //     )
    // }

    // const renderAdditionalInputFields = () => {
    //     let inputFields = [];
    //     //console.log(metadataFields);
    //     metadataFields.forEach((field, i) => {
    //         //console.log(field);
    //         inputFields.push(
    //             <li style={{"listStyle": "none"}} key={`${i}-additional-element`} >
    //                 <input defaultValue={field.label} onChange={(e) => {
    //                     updateLabelInMetaDataField(i, e);
    //                 }} type="text" name={`${i}-additional-element`} id={`${i}-additional-element`} placeholder="key"></input>

    //                 <select defaultValue={field.type} name="metadataFieldType" id="metadataFieldType" onChange={(e) =>{
    //                     updateTypeInMetaDataField(i, e);
    //                 }}>
    //                     <option value="String">Text</option>
    //                     <option value="List">List</option>
    //                 </select>

    //                 {field.type === 'String' && (
    //                     <input  defaultValue={field.value} 
    //                             onChange={(e) => {
    //                                 updateValueInMetaDataField(i, e);
    //                             }} 
    //                             type="text" 
    //                             name={`${i}-additional-element`} 
    //                             id={`${i}-additional-element`} 
    //                             placeholder="value" />
    //                 )}
    //                 {/* {field.type === 'List' && (
    //                     renderAdditionalInputFields()
    //                 )} */}
    //             </li>
    //         )
    //     });
    //     return inputFields
    // }
    
    return (
        <Formik
            initialValues={{ nameOfNFT: '', description: '' , additionalMetaDataFields: [{key: '', value: '', type: '1-Level'}]}}
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
        {({ values, isSubmitting }) => (
            <Form>
                <label htmlFor="nameOfNFT">Name of NFT</label>
                <Field type="text" name="nameOfNFT" />
                <ErrorMessage name="nameOfNFT" component="div" />
                <br></br>
                <label htmlFor="description">Give your NFT a Description</label>
                <Field type="text" as="textarea" name="description" />
                <ErrorMessage name="description" component="div" />
                <br></br>

                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
     </Formik>
    )
}

export default FormSection;