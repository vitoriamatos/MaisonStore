import Tag from '../Tag'
import star from '../../assets/images/star.png'
import {
  CardContainer,
  Description,
  Title,
  Infos,
  TitleContainer,
  Stars,
  StarsImage,
  Image,
  StarsLabel,
  DescriptionContainer,
  CircleArea,
  CircleList,
  CircleListItem,
  ButtonArea
} from './styles'
import Button from '../Button'

type Props = {
  id: string
  nome: string
  descricao: string
  preco: number
  tamanho: string
  cores: string[]
  categoria: number
  subcategoria: number
  avaliacoes: number
  imagem_cor: number
  imagens_produto: string[]
  especificacoes: {
    ref: number[]
    descricao: string
    composicao: string
    medidas_modelo: {
      altura: number
      busto: number
      cintura: number
      quadril: number
      modelo_veste: string
    }[]
  }[]
}

const Products = ({
  id,
  nome,
  descricao,
  imagens_produto,
  preco,
  categoria,
  especificacoes
}: Props) => (
  <CardContainer>
    <Image src={imagens_produto[2]} alt={imagens_produto[0]} />
    <Infos>{/* <Tag key={id}>{categoria}</Tag> */}</Infos>
    <TitleContainer>
      <Title>{nome}</Title>
      <Stars></Stars>
    </TitleContainer>

    <DescriptionContainer>
      <Description>R$ {preco}</Description>
      <CircleList>
        <CircleListItem>
          <CircleArea></CircleArea>
          <CircleArea></CircleArea>
        </CircleListItem>
      </CircleList>
    </DescriptionContainer>

    <ButtonArea>
      <Button type="link" title="Saiba mais 2" to={`/produto/${id}`}>
        Saiba mais
      </Button>
    </ButtonArea>
  </CardContainer>
)
export default Products
