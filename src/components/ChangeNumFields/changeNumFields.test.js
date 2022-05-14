import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen, within } from '@testing-library/react'
import ChangeNumFields from "./changeNumFields";
import Form from 'components/Form/form';

test('Renders ChangeNumFields', () => {
  render(<Form />)
  render(<ChangeNumFields />)
  const changeNumFields = screen.getByText('Add more fields')
  expect(changeNumFields).toBeInTheDocument()

});