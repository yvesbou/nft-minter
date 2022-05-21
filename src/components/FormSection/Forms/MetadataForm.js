

export default function MetadataForm(props) {


    return (
        <>
            <label htmlFor="name">Name of NFT</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <br></br>
            <label htmlFor="description">Give your NFT a Description</label>
            <Field type="text" as="textarea" name="description" />
            <ErrorMessage name="description" component="div" />
            <br/>
            <Field 
                as="select"
                name="blockchain"
                id="select_blockchain"
                placeholder="Select Blockchain"
            >
                <option value="">Select a Chain (Testnet only)</option>
                <option value="Ethereum">Ethereum (Kovan)</option>
                <option value="Avalanche">Avalanche (Fuji)</option>
                <option value="Binance Chain">Binance Chain (Testnet)</option>
                <option value="Polygon">Polygon (Mumbai)</option>
            </Field>
            <ErrorMessage name="blockchain" component="div" />
        </>
    )
}