import styled from 'styled-components'

import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`
export const ContainerOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  left: 18rem;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    top: 69%;
    left: 10rem;
  }
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 1px;

  @media (max-width: ${breakpoints.desktop}) {
    height: 115%;
  }
`

export const TitleOverlay = styled.div`
  margin-top: 6rem;
`
export const TagOverlay = styled.div`
  margin-top: -7rem;
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  text-align: left;
  color: ${Colors.withe};
`

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: 100;
  max-width: 600px;
  text-align: left;
  color: ${Colors.withe};
`

export const TextArea = styled.div`
  display: flex;
  justify-content: left;
`
