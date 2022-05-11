import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import NFTMinter from 'components/NFTMinter'

test('Renders NFTMinter', () => {
  render(<NFTMinter />)
  const nftMinter = screen.getByText('NFT Minter')
  expect(nftMinter).toBeInTheDocument()
});