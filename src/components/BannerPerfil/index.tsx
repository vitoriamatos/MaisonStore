import React from 'react'
import Slider from 'react-slick'
import {
  ContainerOverlay,
  Image,
  ImageContainer,
  Subtitle,
  TagOverlay,
  TextArea,
  Title,
  TitleOverlay
} from './styles'
import Header from '../Header'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type Props = {
  restaurantName: string
  restaurantInfo: string
  images?: string[]
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 2 }}
      onClick={onClick}
    >
      {/* <FaArrowRight size={30} color="#fff" /> */}
    </div>
  )
}

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 2 }}
      onClick={onClick}
    >
      {/* <FaArrowLeft size={30} color="#fff" /> */}
    </div>
  )
}

const BannerPerfil = ({
  restaurantName,
  restaurantInfo,
  images = []
}: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    // arrows: false // As setas padrão serão exibidas
  }

  return (
    <>
      <Header />
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <ImageContainer>
              <Image style={{ backgroundImage: `url(${image})` }} />
              <ContainerOverlay>
                <TagOverlay>
                  <Subtitle>{restaurantInfo}</Subtitle>
                </TagOverlay>
                <TitleOverlay>
                  <TextArea>
                    <Title>{restaurantName}</Title>
                  </TextArea>
                </TitleOverlay>
              </ContainerOverlay>
            </ImageContainer>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default BannerPerfil
