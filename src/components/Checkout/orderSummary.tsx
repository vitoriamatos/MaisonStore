import React from 'react'
import {
  OrderSummaryContainer,
  SummaryRow,
  TotalRow,
  DisabledButton,
  SecureText
} from './styles'
import Button from '../Button'

const OrderSummary = () => {
  return (
    <OrderSummaryContainer>
      <SummaryRow>
        <span>subtotal</span>
        <span>R$ 319,90</span>
      </SummaryRow>

      <SummaryRow>
        <span>cupom de desconto</span>
        <span>▼</span>
      </SummaryRow>

      <SummaryRow>
        <span>vale-compras</span>
        <span>▼</span>
      </SummaryRow>

      <TotalRow>
        <span>total:</span>
        <span>R$ 319,90</span>
      </TotalRow>

      <Button type="link" title="Saiba mais 2" to={`/payment`}>
        continuar para pagamento
      </Button>
      <SecureText>site 100% seguro</SecureText>
    </OrderSummaryContainer>
  )
}

export default OrderSummary
