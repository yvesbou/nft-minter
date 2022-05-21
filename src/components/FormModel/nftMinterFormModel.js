export default {
    formId: 'nftMinterFormModel',
    formField: {
      nameOfNFT: {
        name: 'nameOfNFT',
        label: 'Name of NFT*',
        requiredErrorMsg: 'Name of NFT is required'
      },
      description: {
        name: 'description',
        label: 'Description*',
        requiredErrorMsg: 'NFT description is required'
      },
      blockchain: {
        name: 'blockchain',
        label: 'Blockchain*',
        requiredErrorMsg: 'Selecting a Blockchain is required'
      },
      image: {
        name: 'image',
        label: 'Upload Image*',
        requiredErrorMsg: 'Image is required',
        invalidErrorMsg: 'File type not valid'
      },
    }
  };
  