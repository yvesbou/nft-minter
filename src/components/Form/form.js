import React, {useState} from "react"
import UploadAndDisplayImage from 'components/ImageUpload/imageUpload';
import AddMoreFieldsButton from "components/AddMoreFields/addMoreFields";

const Form = () => {
    
    return (
        <form>
            Properties of your NFT
            <br></br>
            <label htmlFor='nftname'> Name of the NFT</label>
            <input type="text" name="nftname" id="nftname"></input>
            <br></br>
            <label htmlFor='nftdescription'> Description</label>
            <input type="text" name="nftdescription" id="nftdescription"></input>
            <br></br>
            <UploadAndDisplayImage />
            <br></br>
            <AddMoreFieldsButton />
            <br></br>
            <input type="submit" value="Mint NFT"></input>
        </form>
    )
}

export default Form;