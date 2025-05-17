import { useParams } from 'react-router-dom'
import { useGetFeaturedProductQuery } from '../../services/api'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

import { useState } from 'react'
import {
  Container,
  DescriptionArea,
  LeftColumn,
  MainImage,
  RightColumn,
  ThumbnailGallery
} from './styles'
import Marketing from '../Marketing'
import Filter from '../Filter'
import Accordion from '../Accordion'
import Cep from '../Cep'
import Review from '../Review'

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data: products, isLoading } = useGetFeaturedProductQuery()
  const dispatch = useDispatch()
  const [mainImage, setMainImage] = useState<string | null>(null)

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const sizes = ['PP', 'P', 'M', 'G']
  if (isLoading) return <p>Carregando...</p>
  const product = products?.find((item) => item.id === id)
  if (!product) return <p>Produto não encontrado.</p>

  const especificacoesArray = Array.isArray(product.especificacoes)
    ? product.especificacoes
    : [product.especificacoes]

  console.log(especificacoesArray[0].ref[0])
  const handleImageClick = (img: string) => {
    setMainImage(img)
  }

  const handleAddToCart = () => {
    if (!product) return

    const cartItem = {
      id: Number(product.id),
      image: product.imagens_produto[0],
      name: product.nome,
      description: product.descricao,
      price: product.preco
    }

    dispatch(add(cartItem))
  }

  return (
    <>
      <Filter />
      <Container>
        <LeftColumn>
          <MainImage
            src={mainImage || product.imagens_produto[0]}
            alt="Imagem principal"
          />
          <ThumbnailGallery>
            {product.imagens_produto.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </ThumbnailGallery>
        </LeftColumn>

        <RightColumn>
          <h1>{product.nome}</h1>
          <div>
            <p>{product.descricao}</p>
          </div>
          <p className="price">R$ {product.preco.toFixed(2)}</p>
          <div>
            <strong>Tamanho:</strong>
            <div className="size-selector">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleAddToCart}>Adicionar à sacola</button>
          <Accordion title="descrição do produto">
            <div>
              ref:{especificacoesArray[0].ref[0]} |
              {especificacoesArray[0].ref[1]}
            </div>
            <div>{especificacoesArray[0].descricao}</div>
            <div>composicao: {especificacoesArray[0].composicao}</div>
            <div>
              medidas da modelo: altura: 1.63 busto: 80 cintura: 60 quadril: 90
            </div>
            <div>modelo veste tamanho: p</div>
          </Accordion>

          <Accordion title="consultar cep">
            <Cep></Cep>
          </Accordion>
        </RightColumn>
      </Container>

      <Review></Review>

      <Marketing />
    </>
  )
}

export default ProductDetails
