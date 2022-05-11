import React, {useState} from "react"

const AddMoreFieldsButton = () =>{
    const [additionalFields, setAdditionalFields] = useState(0)
    console.log(additionalFields)

    return (
        <>
            <label htmlFor='add more fields'> Add more fields </label>
            <button onClick={(event)=>{setAdditionalFields(additionalFields+1)}}>+</button>
        </>
    )
}

export default AddMoreFieldsButton;