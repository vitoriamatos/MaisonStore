import React from 'react'
import { ItemContainer, ProductImage, ProductInfo, Quantity } from './styles'

const ItemSummary = () => {
  return (
    <ItemContainer>
      <ProductImage src="https://via.placeholder.com/80" alt="Jaqueta" />
      <ProductInfo>
        <h4>jaqueta poliuretano marrom</h4>
        <span>cor: marrom, tamanho: pp</span>
      </ProductInfo>
      <Quantity>qtde. 1</Quantity>
    </ItemContainer>
  )
}

export default ItemSummary
