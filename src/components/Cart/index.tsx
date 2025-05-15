import Button from '../Button'
import {
  CartContainer,
  CartList,
  Overlay,
  Price,
  Prices,
  Quantity,
  Sidebar,
  TextContainer,
  Title,
  Image,
  TrashImage,
  PriceContainer,
  List,
  CepInput,
  ConsultarButton,
  FreightContainer,
  Note,
  OptionBox,
  OptionsContainer,
  SmallLink,
  CepHeader,
  CepBody,
  CepInputArea
} from './styles'

import delivery from '../../assets/images/fast-delivery.png'
import lixo from '../../assets/images/lixo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'

import closeIcon from '../../assets/images/fechar.png'
import { useState } from 'react'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items, isOpenCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
    localStorage.setItem('cart', JSON.stringify(items))
  }

  const openCheckouts = () => {
    setShowCheckout(true)
    dispatch(openCheckout())
  }
  const getTotalPrice = () => {
    return items.reduce((count, actualValue) => {
      if (actualValue.price) {
        return (count += actualValue.price)
      }
      return 0
    }, 0)
  }

  const formattedTotalPrice = getTotalPrice().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const formattedPrice = getTotalPrice().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const [cep, setCep] = useState('')
  const [frete, setFrete] = useState<null | number>(null)
  const handleCalcularFrete = () => {
    // Simulação de valor de frete. Aqui você pode chamar uma API real.
    if (cep.length === 9) {
      setFrete(cep.startsWith('00') ? 0 : 16.84) // Exemplo fictício
    } else {
      alert('Digite um CEP válido no formato 00000-000')
    }
  }
  const [openModal, setOpenModal] = useState(false)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <header>
          <img
            src={closeIcon}
            onClick={() => {
              closeCart()
            }}
          ></img>
        </header>
        <h2>Minha sacola:</h2>
        <ul>
          {items.map((item) => (
            <List key={item.id}>
              <CartList>
                <Image src={item.image} alt={item.name} />
                <TextContainer>
                  <Title>{item.name}</Title>
                  <Price>
                    {item.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </Price>
                </TextContainer>
                <footer>
                  <TrashImage onClick={() => removeItem(item.id)} src={lixo} />
                </footer>
              </CartList>
            </List>
          ))}
        </ul>
        <Quantity>{items.length} pedido(s) no carrinho</Quantity>
        <PriceContainer>
          <Prices>Valor total</Prices>
          <Prices>{formattedTotalPrice}</Prices>
        </PriceContainer>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button_cart"
          onClick={() => {
            openCheckouts()
          }}
        >
          Continuar para a entrega
        </Button>

        <FreightContainer>
          <CepHeader>
            <h3>consultar frete</h3>
          </CepHeader>

          <CepBody>
            <CepInputArea>
              <div>
                <label htmlFor="cep">digite seu cep*</label>
                <CepInput
                  type="text"
                  id="cep"
                  placeholder="00000-000"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={9}
                />
              </div>
              <ConsultarButton onClick={handleCalcularFrete}>
                consultar
              </ConsultarButton>
            </CepInputArea>

            <SmallLink href="#">não sei meu cep</SmallLink>

            {frete !== null && (
              <OptionsContainer>
                <OptionBox>
                  <div className="title-line">
                    <span className="icon">🏬</span>
                    <span>retirar na loja</span>
                    <span className="free">grátis</span>
                  </div>
                  <p className="message">
                    <strong>retire seu pedido</strong> na loja e ganhe{' '}
                    <strong>15% off</strong> em uma nova compra na retirada
                  </p>
                </OptionBox>

                <OptionBox>
                  <div className="title-line">
                    <span className="icon">🚚</span>
                    <span>receber em casa</span>
                    <span className="price">
                      a partir de R$ {frete.toFixed(2)}
                    </span>
                  </div>
                </OptionBox>
                <Note>* escolha a forma de entrega na próxima etapa</Note>
                <SmallLink href="#">ver outras opções de entrega</SmallLink>
              </OptionsContainer>
            )}
          </CepBody>
        </FreightContainer>
      </Sidebar>

      {showCheckout && <Checkout />}
    </CartContainer>
  )
}
export default Cart
