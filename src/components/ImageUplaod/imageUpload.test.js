import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, within, fireEvent,  } from '@testing-library/react'
//import {userEvent} from '@testing-library/user-event'
import userEvent from '@testing-library/user-event';
import UploadAndDisplayImage from './imageUpload'

describe("Upload files", () => {
    let file;
  
    beforeEach(() => {
      file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    });

    test('Upload Component Mounted', ()=>{
        render(<UploadAndDisplayImage/>)
        screen.getByText('Image of the NFT')
    })
  
    test("cover photo upload", async () => {
    
        // render the component
        render(<UploadAndDisplayImage />);
  
        // get the upload button

        //const input = screen.getByTestId(/fileDropzone/i);
        const input = screen.getByLabelText('Image of the NFT')
        
        await userEvent.upload(input, file)

        expect(input.files[0]).toBe(file)
        expect(input.files.item(0)).toBe(file)
        expect(input.files).toHaveLength(1)
  
        // simulate upload event and wait until finish
        // await waitFor(() =>
        //     fireEvent.change(uploader, {
        //     target: { files: [file] },
        // })
      //);
      // get the same uploader from the dom
      //let image = document.getElementById("photo-uploader");
      // check if the file is there
      //expect(image.files[0].name).toBe("chucknorris.png");
      //expect(image.files.length).toBe(1);
    });
  });

