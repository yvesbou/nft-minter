import * as Yup from 'yup';
import nftMinterFormModel from './nftMinterFormModel';

const {
    formField: {
      nameOfNFT,
      description,
      blockchain,
      image
    }
} = nftMinterFormModel;

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];
  

const FILE_SIZE = 10 * 1024 * 1024; // ~= 10 MB
  

export default [
    Yup.object().shape({
        [nameOfNFT.name]: Yup.string().required(`${nameOfNFT.requiredErrorMsg}`),
        [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
        [blockchain.name]: Yup.string()
            .nullable()
            .required(`${blockchain.requiredErrorMsg}`),
      }),
    Yup.object().shape({
        [image.name]: Yup.mixed()
            .required('You need an image.')
            .test(
              "isEmpty",
              `${image.requiredErrorMsg}`,
              (value) => value && value.file
            )
            .test(
              "fileSize",
              "File too large",
              (value) => value && value.file && value.file.size <= FILE_SIZE
            )
            .test(
              "fileFormat",
              "Unsupported Format",
              value => value.file && SUPPORTED_FORMATS.includes(value.file.type)
            )
    })
]