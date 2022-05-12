import React, { useState, useEffect } from "react"

const ChangeNumFields = ({ props }) =>{
    
    const { numAdditionalFields, incrementFields, decrementFields } = props
    

    useEffect(()=> {
        console.log(numAdditionalFields)
    })

    return (
        <>
            <label htmlFor='add more fields'> Add more fields </label>
            <button onClick={incrementFields}>+</button>
            <button onClick={decrementFields}>-</button>
        </>
    )
}

export default React.memo(ChangeNumFields); //React.memo(AddMoreFieldsButton) => only re-render if props have changed