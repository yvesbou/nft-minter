import React, {useState} from "react"
import UploadAndDisplayImage from 'components/ImageUpload/imageUpload';
import ChangeNumFields from "components/ChangeNumFields/changeNumFields";

const Form = () => {
    const [numAdditionalFields, setNumAdditionalFields] = useState(0)

    const incrementFields = (e) => {
        e.preventDefault();
        setNumAdditionalFields(numAdditionalFields + 1);
      };

    const decrementFields = (e) => {
        e.preventDefault();
        setNumAdditionalFields(numAdditionalFields - 1);
    };

    const renderAdditionalInputFields = () => {
        let inputFields = [];
        for (var i = 0; i < numAdditionalFields; i++) {
            inputFields.push(
            <>
            <br></br>
            <input key={`${i}-additional-element`} type="text" name={`${i}-additional-element`} id={`${i}-additional-element`}></input>
            </>
            )
        } 
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
                    numAdditionalFields: numAdditionalFields,
                    incrementFields: incrementFields,
                    decrementFields: decrementFields
                }}/>
            <br></br>
            {renderAdditionalInputFields()}
            <br></br>
            <input type="submit" value="Mint NFT"></input>
        </form>
    )
}

export default Form;