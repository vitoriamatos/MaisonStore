import styled from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Container = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1224px;
`

export const SessionContainer = styled.div`
  display: block;
  margin-top: 100px;
`

export const ContainerSlide = styled.div`
  display: block;

  .slick-slide {
    padding: 0 10px; /* Espaçamento lateral entre os slides */
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  position: relative;
  display: inline-block; /* Para que o sublinhado tenha o mesmo tamanho do texto */
  margin-bottom: 40px;
  &::after {
    content: '';
    display: block;
    width: 50px; /* Ajuste o tamanho conforme necessário */
    height: 3px; /* Espessura do sublinhado */
    background-color: black; /* Cor do sublinhado */
    margin-top: 5px;
  }
`
export const Tag = styled.div`
  background-color: rgb(224, 224, 224);

  border-radius: 10px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  font-size: 12px;

  &.selected {
    border: 1px solid black;
  }
`
export const TagArea = styled.div`
  display: flex;
  margin-bottom: 20px;
`
