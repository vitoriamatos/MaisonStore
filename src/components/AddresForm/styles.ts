import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`

export const Header = styled.div`
  position: relative;
  text-align: center;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export const Subtitle = styled.p`
  font-weight: bold;
  margin-top: 0.5rem;

  span {
    font-size: 1.2rem;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #000;
    cursor: pointer;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: #ccc;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`
