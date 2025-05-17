import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`
export const Subtitle = styled.span`
  text-align: center;
`
export const Button = styled.button`
  background-color: ${Colors.black};
  color: ${Colors.withe};
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #333;
  }
`
