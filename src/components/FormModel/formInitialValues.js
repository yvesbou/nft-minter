import nftMinterFormModel from './nftMinterFormModel';

const {
  formField: {
    nameOfNFT,
    description,
    blockchain,
    image
  }
} = nftMinterFormModel;

export default {
  [nameOfNFT.name]: '',
  [description.name]: '',
  [blockchain.name]: '',
  [image.name]: {
    file: null,
    src: null,
    name: ""
  },
};
