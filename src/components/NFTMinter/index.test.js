import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, within } from '@testing-library/react'
import NFTMinter from 'components/NFTMinter'

test('Renders', () => {
  render(<NFTMinter />)
  const nftMinter = screen.getByText('NFT Minter')
  expect(nftMinter).toBeInTheDocument()
  const form = within(nftMinter).getByText('Properties of your NFT')
  expect(form).toBeInTheDocument()
  const inputNFTName = within(form).getByLabelText('Name of the NFT')
  expect(inputNFTName).toBeInTheDocument()
  const inputNFTDescription = within(form).getByLabelText('Description')
  expect(inputNFTDescription).toBeInTheDocument()

});