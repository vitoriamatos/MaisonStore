import styled from 'styled-components'
import { Colors } from '../../styles'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding: 40px;
`

export const Button = styled.div`
  border: 2px solid ${Colors.black};
  border-radius: 10px;
  color: ${Colors.withe};
  background-color: ${Colors.black};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.withe};
    color: ${Colors.black};
  }
`

export const TextCard = styled.div`
  margin-bottom: 20px;
`

export const ItemContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const ProductImage = styled.img`
  width: 80px;
  height: auto;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h4 {
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 14px;
    color: gray;
  }
`

export const Quantity = styled.div`
  margin-left: auto;
  font-size: 14px;
`

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`

export const TotalRow = styled(SummaryRow)`
  font-weight: bold;
  font-size: 16px;
`

export const DisabledButton = styled.div`
  background: #e0e0e0;
  color: #aaa;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: not-allowed;
`

export const SecureText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '🔒';
  }
`
