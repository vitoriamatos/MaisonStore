import styled from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Container = styled.div`
  display: block;
`

export const SessionContainer = styled.div`
  display: block;
  margin-top: 50px;
`

export const SessionArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`
export const Image = styled.img`
  width: 100%;
`

export const ImagePromo = styled.img`
  width: 100%;
  margin-top: 80px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Title = styled.h4``
