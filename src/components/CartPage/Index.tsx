import {
  Container,
  LeftColumn,
  RightColumn,
  SectionTitle,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RemoveButton,
  QuantityText,
  FreightBox,
  CepInputGroup,
  SmallLink,
  DeliveryOptions,
  OptionBox,
  SummarySection,
  PriceRow
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import lixo from '../../assets/images/lixo.svg'
import { useState } from 'react'
import Button from '../Button'

const CartPage = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cep, setCep] = useState('')
  const [frete, setFrete] = useState<null | number>(null)

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0)
  }

  const formattedTotal = getTotalPrice().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleCalcularFrete = () => {
    if (cep.length === 9) {
      setFrete(cep.startsWith('00') ? 0 : 16.84)
    } else {
      alert('Digite um CEP válido no formato 00000-000')
    }
  }

  return (
    <Container>
      {/* Lado esquerdo: Itens e entrega */}
      <LeftColumn>
        <SectionTitle>meu carrinho</SectionTitle>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </ProductPrice>
              </ProductInfo>
              <RemoveButton
                src={lixo}
                alt="Remover"
                onClick={() => handleRemoveItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>

        <QuantityText>{items.length} pedido(s) no carrinho</QuantityText>

        {/* CEP e opções de entrega */}
        <FreightBox>
          <SectionTitle>consultar frete</SectionTitle>
          <CepInputGroup>
            <input
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              maxLength={9}
            />
            <button onClick={handleCalcularFrete}>calcular</button>
          </CepInputGroup>
          <SmallLink href="#">não sei meu cep</SmallLink>

          {frete !== null && (
            <DeliveryOptions>
              <OptionBox>
                <div className="title-line">
                  <span>🏬 Retirar na loja</span>
                  <span className="free">GRÁTIS</span>
                </div>
                <p className="message">
                  <strong>Retire seu pedido</strong> na loja e ganhe{' '}
                  <strong>15% OFF</strong> em uma nova compra na retirada
                </p>
              </OptionBox>
              <OptionBox>
                <div className="title-line">
                  <span>🚚 Receber em casa</span>
                  <span className="price">
                    a partir de R$ {frete.toFixed(2)}
                  </span>
                </div>
              </OptionBox>
              <SmallLink href="#">
                * escolha a forma de entrega na próxima etapa
              </SmallLink>
              <SmallLink href="#">ver outras opções de entrega</SmallLink>
            </DeliveryOptions>
          )}
        </FreightBox>
      </LeftColumn>

      {/* Lado direito: Resumo do pedido */}
      <RightColumn>
        <SectionTitle>resumo do pedido</SectionTitle>
        <SummarySection>
          <label htmlFor="vendedor">código de vendedor</label>
          <input type="text" placeholder="digite o código" />
          <button>adicionar</button>
        </SummarySection>
        <SummarySection>
          <label htmlFor="cupom">cupom de desconto</label>
          <input type="text" placeholder="digite o cupom" />
          <button>adicionar</button>
        </SummarySection>

        <PriceRow>
          <span>subtotal</span>
          <span>{formattedTotal}</span>
        </PriceRow>
        <PriceRow>
          <span>total</span>
          <span>{formattedTotal}</span>
        </PriceRow>

        <SummarySection>
          <Button type="link" title="Continuar para entrega" to={`/checkout`}>
            fechar pedido
          </Button>
        </SummarySection>
      </RightColumn>
    </Container>
  )
}

export default CartPage
