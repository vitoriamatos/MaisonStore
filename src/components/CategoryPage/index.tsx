import { useGetFeaturedProductQuery } from '../../services/api'
import Loader from '../../components/Loader'
import styled from 'styled-components'
import bannerCategoria from '../../assets/images/banner3.png'

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 24px;
`

const Container = styled.div`
  padding: 16px;
`

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
`

const FilterButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 24px 0 16px;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  max-width: 1200px; // controla a largura máxima do grid
  margin: 0 auto; // centraliza horizontalmente
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const ProductName = styled.p`
  font-size: 14px;
  margin: 0;
`

const ProductPrice = styled.strong`
  font-size: 16px;
  color: #000;
`

const CategoryPage = () => {
  const { data: product, isLoading } = useGetFeaturedProductQuery()

  if (isLoading) return <Loader />

  return (
    <>
      <HeroImage src={bannerCategoria} alt="Banner da categoria" />
      <Container>
        <TopBar>
          <FilterButton>ordenar e filtrar</FilterButton>
        </TopBar>
        <Title>roupas femininas</Title>
        <Grid>
          {product?.map((item) => (
            <ProductCard key={item.id}>
              <ProductImage src={item.imagens_produto[0]} alt={item.nome} />
              <ProductName>{item.nome}</ProductName>
              <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>
            </ProductCard>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default CategoryPage
