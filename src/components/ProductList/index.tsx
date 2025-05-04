import { ProductType } from '../../models/Product'

import Products from '../Products'
import {
  Container,
  ContainerSlide,
  SessionContainer,
  Tag,
  TagArea,
  Title
} from './styles'
import Slider from 'react-slick'

type Props = {
  products: ProductType[]
  background: 'withe' | 'black'
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  )
}

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  )
}

const getEspecificacoes = (product: ProductType) => {
  const espec = product.especificacoes[0]

  if (!espec) return []

  const medidas = espec.medidas_modelo?.[0]

  return [
    {
      ref: espec.ref ?? [],
      descricao: espec.descricao ?? '',
      composicao: espec.composicao ?? '',
      medidas_modelo: [
        {
          altura: medidas?.altura ?? 0,
          busto: medidas?.busto ?? 0,
          cintura: medidas?.cintura ?? 0,
          quadril: medidas?.quadril ?? 0,
          modelo_veste: medidas?.modelo_veste ?? ''
        }
      ]
    }
  ]
}

const ProductList = ({ products }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '50px'
  }

  return (
    <Container>
      <SessionContainer>
        <Title>novidades fresquinhas e estilosas</Title>

        <TagArea>
          <Tag className="selected">Feminino</Tag>
          <Tag>Masculino</Tag>
        </TagArea>

        <ContainerSlide>
          <Slider {...settings}>
            {products.map((product) => (
              <Products
                key={product.id}
                id={product.id}
                nome={product.nome}
                descricao={product.descricao}
                preco={product.preco}
                tamanho={product.tamanho}
                cores={product.cores}
                categoria={product.categoria}
                subcategoria={product.subcategoria}
                avaliacoes={product.avaliacoes}
                imagem_cor={product.imagem_cor}
                imagens_produto={product.imagens_produto}
                especificacoes={getEspecificacoes(product)}
              />
            ))}
          </Slider>
        </ContainerSlide>
      </SessionContainer>
    </Container>
  )
}

export default ProductList
