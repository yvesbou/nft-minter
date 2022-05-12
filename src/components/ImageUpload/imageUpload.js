import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const removeImage= (e) => {
    setSelectedImage(null)
    e.target.value=null // does not work to reset the description next to button
  }
  

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" height={"350"} width={"350"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={(e)=>removeImage(e)}>Remove</button>
        </div>
      )}
      <label htmlFor='Image upload'>Image of the NFT</label>
      <input
        type="file"
        id="Image upload"
        name="Image upload"
        data-testid="fileDropzone"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;