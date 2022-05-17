import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, within } from '@testing-library/react'
import FormSection from 'components/FormSection/form';

test('Renders Form', () => {
  render(<FormSection />)
  const form = screen.getByText('Properties of your NFT')
  expect(form).toBeInTheDocument()
  const inputNFTName = within(form).getByLabelText('Name of the NFT')
  expect(inputNFTName).toBeInTheDocument()
  const inputNFTDescription = within(form).getByLabelText('Description')
  expect(inputNFTDescription).toBeInTheDocument()
});
