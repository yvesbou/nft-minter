import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
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