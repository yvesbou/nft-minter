import { useEffect } from 'react';
import Form from 'components/Form/form';
import 'components/NFTMinter/styles.css';

const NFTMinter = ({props}) => {

  return (
      <div id="minter">
          NFT Minter
            <Form/>
      </div>
  );
}

export default NFTMinter;