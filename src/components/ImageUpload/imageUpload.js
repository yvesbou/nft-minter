import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const removeImage= (e) => {
    setSelectedImage(null)
    e.target.files[0]=null // does not work to reset the description next to button
    var imageNFT = document.getElementById('imageNFT');
    imageNFT.parentNode.removeChild(imageNFT);
  }
  

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" id='imageNFT' height={"350"} width={"350"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={(e)=>{
          removeImage(e)
        }}>Remove</button>
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