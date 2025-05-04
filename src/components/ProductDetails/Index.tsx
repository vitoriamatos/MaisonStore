import { useParams } from 'react-router-dom'
import { useGetFeaturedProductQuery } from '../../services/api'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
`

const ImageGallery = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  img {
    width: 200px;
    border-radius: 8px;
  }
`

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data: products, isLoading } = useGetFeaturedProductQuery()

  if (isLoading) return <p>Carregando...</p>
  const idNumber = Number(id)
  const product = products?.find((item) => item.id === id)

  console.log(idNumber)
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <Container>
      <h1>{product.nome}</h1>
      <p>{product.descricao}</p>
      <p>Preço: R$ {product.preco.toFixed(2)}</p>
      <p>Composição: {product.especificacoes[0].composicao}</p>
      <p>
        Modelo veste: {product.especificacoes[0].medidas_modelo[0].modelo_veste}
      </p>

      <ImageGallery>
        {product.imagens_produto.map((img, index) => (
          <img key={index} src={img} alt={`Produto imagem ${index + 1}`} />
        ))}
      </ImageGallery>
    </Container>
  )
}

export default ProductDetails
