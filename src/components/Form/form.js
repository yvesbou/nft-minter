import React, { useState } from "react"
import UploadAndDisplayImage from 'components/ImageUpload/imageUpload';
import ChangeNumFields from "components/ChangeNumFields/changeNumFields";

class MetadataField {
    constructor(label = '', type = 'Text', value = '') {
        this.label = label;
        this.type = type;
        this.value = value;
    }
}

const Form = () => {
    const [metadataFields, setMetadataFields] = useState([new MetadataField()])

    const incrementFields = (e) => {
        e.preventDefault();
        setMetadataFields([...metadataFields, new MetadataField()]);
      };

    const decrementFields = (e) => {
        e.preventDefault();
        if (metadataFields.length === 0) return;
        setMetadataFields(prevState => 
            [...prevState.slice(0,-1)]
        )
    };

    const updateLabelInMetaDataField = (index, event) => {
        const newLabel = event.target.value;
        const metadataField = new MetadataField(newLabel, metadataFields[index].type, metadataFields[index].value);
        setMetadataFields(prevState => 
            [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
        )
    }

    const updateTypeInMetaDataField = (index, event) => {
        const newType = event.target.value;
        const metadataField = new MetadataField(metadataFields[index].label, newType, metadataFields[index].value);
        setMetadataFields(prevState => 
            [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
        )
    }

    const updateValueInMetaDataField = (index, event) => {
        const newValue = event.target.value;
        const metadataField = new MetadataField(metadataFields[index].label, metadataFields[index].type, newValue);
        setMetadataFields(prevState => 
            [...prevState.slice(0,index), metadataField, ...prevState.slice(index+1)]
        )
    }

    const renderAdditionalInputFields = () => {
        let inputFields = [];
        //console.log(metadataFields);
        metadataFields.forEach((field, i) => {
            //console.log(field);
            inputFields.push(
                <li style={{"listStyle": "none"}} key={`${i}-additional-element`} >
                    <input defaultValue={field.label} onChange={(e) => {
                        updateLabelInMetaDataField(i, e);
                    }} type="text" name={`${i}-additional-element`} id={`${i}-additional-element`} placeholder="key"></input>

                    <select defaultValue={field.type} name="metadataFieldType" id="metadataFieldType" onChange={(e) =>{
                        updateTypeInMetaDataField(i, e);
                    }}>
                        <option value="String">Text</option>
                        <option value="List">List</option>
                    </select>

                    {field.type === 'String' && (
                        <input  defaultValue={field.value} 
                                onChange={(e) => {
                                    updateValueInMetaDataField(i, e);
                                }} 
                                type="text" 
                                name={`${i}-additional-element`} 
                                id={`${i}-additional-element`} 
                                placeholder="value" />
                    )}
                    {/* {field.type === 'List' && (
                        renderAdditionalInputFields()
                    )} */}
                </li>
            )
        });
        return inputFields
    }
    
    return (
        <form>
            Properties of your NFT
            <br></br>
            <label htmlFor='nftname'> Name of the NFT</label>
            <input type="text" name="nftname" id="nftname"></input>
            <br></br>
            <label htmlFor='nftdescription'> Description</label>
            <br></br>
            <textarea cols="30" rows="20" name="nftdescription" id="nftdescription"></textarea>
            <br></br>
            <UploadAndDisplayImage />
            <br></br>
            <ChangeNumFields
                props={{
                    numAdditionalFields: metadataFields,
                    incrementFields: incrementFields,
                    decrementFields: decrementFields
                }}/>
            <br></br>
            {renderAdditionalInputFields()}
            <br></br>
            <br></br>
            <input type="submit" value="Mint NFT" onClick={() => console.log(metadataFields)}></input>
        </form>
    )
}

export default Form;