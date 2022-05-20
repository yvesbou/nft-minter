import { useEffect } from 'react';
import FormSection from 'components/FormSection/form';
import 'components/NFTMinter/styles.css';

const NFTMinter = ({props}) => {

  return (
      <div id="minter">
          NFT Minter
            <FormSection/>
      </div>
  );
}

export default NFTMinter;