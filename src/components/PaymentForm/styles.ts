import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 10px;
`

export const PaymentFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Label = styled.label`
  font-weight: bold;
`

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`
