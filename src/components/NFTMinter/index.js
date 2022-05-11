import { useEffect } from 'react';
import UploadAndDisplayImage from 'components/ImageUplaod/imageUpload';
import 'components/NFTMinter/styles.css';

const NFTMinter = ({props}) => {

  return (
      <div id="minter">
          NFT Minter
            <form>
            Properties of your NFT
            <br></br>
            <label htmlFor='nftname'> Name of the NFT</label>
            <input type="text" name="nftname" id="nftname"></input>
            <br></br>
            <label htmlFor='nftdescription'> Description</label>
            <input type="text" name="nftdescription" id="nftdescription"></input>
            <br></br>
            <UploadAndDisplayImage/>
            </form>
      </div>
  );
}

export default NFTMinter;