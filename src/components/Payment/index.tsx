import React, { useState } from 'react'
import {
  PageContainer,
  LeftColumn,
  RightColumn,
  PaymentMethodTabs,
  TabButton,
  Input,
  Select,
  Label,
  Info,
  SummaryBox,
  SummaryRow,
  Bold,
  Divider,
  ConfirmButton,
  CardForm,
  PixMessage
} from './styles'

const PaymentPage = () => {
  const [method, setMethod] = useState<'credit' | 'pix'>('credit')

  return (
    <PageContainer>
      <LeftColumn>
        <h3>escolha o meio de pagamento</h3>
        <PaymentMethodTabs>
          <TabButton
            active={method === 'credit'}
            onClick={() => setMethod('credit')}
          >
            <span>💳</span> cartão de crédito
          </TabButton>
          <TabButton active={method === 'pix'} onClick={() => setMethod('pix')}>
            pix
          </TabButton>
        </PaymentMethodTabs>

        {method === 'credit' ? (
          <CardForm>
            <Label>número do cartão</Label>
            <Input placeholder="0000 0000 0000 0000" />

            <Label>
              nome completo <small>(exatamente como impresso no cartão)</small>
            </Label>
            <Input />

            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <Label>data de validade</Label>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Select>
                    {[...Array(12)].map((_, i) => (
                      <option key={i}>{String(i + 1).padStart(2, '0')}</option>
                    ))}
                  </Select>
                  <Select>
                    {[...Array(10)].map((_, i) => (
                      <option key={i}>{2025 + i}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <Label>código de segurança</Label>
                <Input placeholder="***" />
              </div>
            </div>

            <Label>
              parcelamento <small>(selecione a bandeira do seu cartão)</small>
            </Label>
            <Select>
              <option>1x sem juros</option>
              <option>2x sem juros</option>
              <option>3x sem juros</option>
            </Select>

            <Info>🇧🇷 esta compra está sendo feita no brasil.</Info>
            <Info small>
              • o limite disponível no cartão de crédito deve ser superior ao
              valor total da compra, e não ao valor de cada parcela.
            </Info>
          </CardForm>
        ) : (
          <PixMessage>
            <p>Você escolheu pagar com PIX.</p>
            <p>
              Após clicar em finalizar, um QR Code será gerado para pagamento
              imediato.
            </p>
          </PixMessage>
        )}
      </LeftColumn>

      <RightColumn>
        <SummaryBox>
          <button>ver pedido completo</button>
          <Divider />
          <SummaryRow>
            <span>subtotal</span>
            <span>R$ 99,90</span>
          </SummaryRow>
          <SummaryRow>
            <span>cupom de desconto</span>
            <span>–</span>
          </SummaryRow>
          <SummaryRow>
            <span>vale-compras</span>
            <span>–</span>
          </SummaryRow>
          <SummaryRow>
            <span>frete</span>
            <span>R$ 11,00</span>
          </SummaryRow>
          <Divider />
          <SummaryRow>
            <Bold>total:</Bold>
            <Bold>R$ 110,90</Bold>
          </SummaryRow>

          <ConfirmButton>finalizar compra</ConfirmButton>
          <Info small style={{ textAlign: 'center', marginTop: '8px' }}>
            🔒 site 100% seguro
          </Info>
        </SummaryBox>
      </RightColumn>
    </PageContainer>
  )
}

export default PaymentPage
