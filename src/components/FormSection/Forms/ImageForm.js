

export default function ImageForm(){
    const [file, setFile] = useState('');

    const handleFileUpload = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setFile(reader.result)
        };
        reader.readAsDataURL(file);
    }


    return (
        <>
            <input
                id="picture"
                name="picture"
                type="file"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setFieldValue("image_name", file.name);
                    setFieldValue("image_type", file.type);
                    handleFileUpload(event);
                }}
                />
            <ErrorMessage name="image_type" component="div" />
            <br/>
            {file && <img width="300" height="300" src={file} /> }
            <br/>
        </>
    )
}