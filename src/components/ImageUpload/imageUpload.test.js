import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, within, fireEvent,  } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import UploadAndDisplayImage from './imageUpload'

describe("Upload files", () => {
    let file;
    window.URL.createObjectURL = jest.fn();
  
    beforeEach(() => {
      file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    });

    afterEach(() => {
      window.URL.createObjectURL.mockReset();
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

    });

    test("user remove uploaded photo", async () => {
      render(<UploadAndDisplayImage />);

      const input = screen.getByLabelText('Image of the NFT')
      await userEvent.upload(input, file)

      const remove = screen.getByText('Remove')
      expect(remove).toBeInTheDocument()
      await userEvent.click(remove)

      expect(input.files).toHaveLength(0)
    })

  });

