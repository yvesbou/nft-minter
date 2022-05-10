import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import NFTMinter from 'components/NFTMinter'

test('Renders', () => {
  render(<NFTMinter />)
  expect(screen.getByText('NFT Minter')).toBeInTheDocument()
});