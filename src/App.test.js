

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' 
import App from './App'
import useToken from './useToken'

jest.mock('./useToken', () => {
  return jest.fn() //returns a mock function and not undefined
})

test ('render login title (with no token present)', () => { 
  useToken.mockReturnValue([null,null])
  render(<App />)
  const loginTitle = screen.getByText(/ingrese /i)
  expect(loginTitle).toHaveTextContent('Ingrese su usuario y contraseña:')
})

test ('render welcome message (with token present)', () => {
  useToken.mockReturnValue(['token',null])
  render (<App />)
  const welcomeMessage = screen.getByText(/bienvenido/i)
  expect(welcomeMessage).toHaveTextContent('Bienvenido ')  
})