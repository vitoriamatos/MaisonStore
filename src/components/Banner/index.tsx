import { Image, TextArea, Title } from './styles'
import banner from '../../assets/images/banner.png'
import Header from '../Header'
import React from 'react'

const BannerPerfil = () => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <div>
      <Header></Header>
      <TextArea>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </TextArea>
    </div>
  </Image>
)

export default BannerPerfil
