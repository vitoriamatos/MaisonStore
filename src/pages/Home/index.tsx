import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { useEffect, useState } from 'react'
import { useGetFeaturedProductQuery } from '../../services/api'
import Loader from '../../components/Loader'
import BannerPerfil from '../../components/BannerPerfil'
import logo from '../../assets/images/banner.png'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import Session from '../../components/Session'
import Marketing from '../../components/Marketing'

type ProductType = {
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
  especificacoes: [
    {
      ref: number[]
      descricao: string
      composicao: string
      medidas_modelo: [
        {
          altura: number
          busto: number
          cintura: number
          quadril: number
          modelo_veste: string
        }
      ]
    }
  ]
}

const ProductType = () => {
  const { data: product, isLoading } = useGetFeaturedProductQuery()
  // const [restaurant, setRestaurant] = useState<Restaurant[]>([])
  const images = [banner1, banner2, banner3]
  if (product) {
    return (
      <>
        <BannerPerfil restaurantName="" restaurantInfo="" images={images} />
        <Session />
        <ProductList products={product} background="withe" />
        <ProductList products={product} background="withe" />
        <ProductList products={product} background="withe" />
        <Marketing />
      </>
    )
  }

  return <Loader />
}
export default ProductType
