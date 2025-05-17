import styled from 'styled-components'
import { Colors } from '../../styles'

export const CepInput = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.black};
  border-radius: 4px;
  margin-bottom: 8px;
  marging-right: 20px;
  width: 100%;
`

export const ConsultarButton = styled.button`
  background-color: ${Colors.black};
  color: ${Colors.withe};
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
  width: 50%;
  height: 60%;
  margin-top: 20px;
  margin-left: 10px;
`

export const SmallLink = styled.a`
  display: block;
  font-size: 12px;
  color: #0071ce;
  text-decoration: underline;
  margin-bottom: 16px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const OptionBox = styled.div`
  background-color: #f6f6f6;
  border-radius: 4px;
  padding: 10px;

  .title-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    text-transform: lowercase;

    .icon {
      margin-right: 8px;
    }

    .free {
      color: green;
      font-weight: bold;
      font-size: 14px;
    }

    .price {
      font-weight: bold;
      font-size: 14px;
    }
  }

  .message {
    margin-top: 8px;
    font-size: 13px;
    strong {
      font-weight: bold;
    }
  }
`

export const Note = styled.p`
  font-size: 12px;
  color: #555;
  margin-top: 8px;
`
export const CepHeader = styled.div`
  background-color: ${Colors.gray};
  border: 1px solid ${Colors.darkGray};
  padding: 10px;
`
export const CepBody = styled.div`
  border-top: none;
  padding: 10px;
`

export const CepInputArea = styled.div`
  display: flex;
`
