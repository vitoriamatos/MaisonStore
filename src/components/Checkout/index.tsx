import React, { useState } from 'react'
import { CheckoutContainer, Button, TextCard } from './styles'
import AddressForm from '../AddresForm'
import PaymentForm from '../PaymentForm'
import Modal from '../AddresForm/modal'
import Cards from '../Cards'
import ItemSummary from './itemSummary'
import OrderSummary from './orderSummary'

const Checkout = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <CheckoutContainer>
      <Cards title={'Entrega'}>
        <TextCard>nenhum endereço cadastrado ainda</TextCard>
        <Button onClick={() => setShowModal(true)}>+ cadastrar endereço</Button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </Cards>

      <Cards title={'Itens'}>
        <ItemSummary />
      </Cards>

      <Cards title={'Resumo do Pedido'}>
        <OrderSummary />
      </Cards>
    </CheckoutContainer>
  )
}

export default Checkout
