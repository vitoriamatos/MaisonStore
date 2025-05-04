export type ProductType = {
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
