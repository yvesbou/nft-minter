import React, { useState, useEffect } from "react"

const AddMoreFieldsButton = ({ props }) =>{
    
    const { numAdditionalFields, incrementFields, decrementFields } = props
    

    useEffect(()=> {
        console.log(numAdditionalFields)
    })

    return (
        <>
            <label htmlFor='add more fields'> Add more fields </label>
            <button onClick={incrementFields}>+</button>
        </>
    )
}

export default React.memo(AddMoreFieldsButton); //React.memo(AddMoreFieldsButton) => only re-render if props have changed