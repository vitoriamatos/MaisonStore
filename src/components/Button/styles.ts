import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${Colors.withe};
  color: ${Colors.withe};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;

  :hover {
    background-color: ${Colors.darkYellow};
  }
`

export const ButtonLink = styled(Link)`
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  background-color: transparent;
  font-size: 16px;
  font-weight: light;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 20px;
  display: block;
  text-align: center;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`
export const ButtonCart = styled.button`
  border: 2px solid ${Colors.ligthYellow};
  color: ${Colors.red};
  background-color: ${Colors.ligthYellow};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  display: inline-block;
  width: 100%;

  :hover {
    background-color: ${Colors.darkYellow};
  }
`

export const ButtonCartPayment = styled.button`
  border: 2px solid ${Colors.ligthYellow};
  color: ${Colors.red};
  background-color: ${Colors.ligthYellow};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  display: inline-block;
  width: 100%;

  :hover {
    background-color: ${Colors.darkYellow};
  }
`
