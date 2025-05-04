import styled from 'styled-components'
import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const CardContainer = styled.div`
  border-radius: 4px;

  padding: 8px;
  position: relative;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${Colors.black};
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${Colors.black};

  @media (max-width: ${breakpoints.desktop}) {
    height: 100%;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DescriptionContainer = styled.div`
  display: block;
`
export const Stars = styled.div`
  margin: auto 0;
  padding-right: 10px;
  display: flex;
`
export const StarsLabel = styled.h4`
  width: 21px;
  height: 14px;
  margin: auto;
  margin-right: 10px;
  color: ${Colors.red};
`
export const StarsImage = styled.img`
  width: 21px;
  margin: auto;
`
export const Image = styled.img`
  width: 340px;
  height: 350px;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 280px;
  }
`

export const CircleList = styled.ul`
  list-style: none;

  padding: 0;
`
export const CircleListItem = styled.li`
  display: flex;
  margin-right: 10px;
`
export const CircleArea = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Colors.darkYellow}; /* Cor interna */
  border: 1px solid black; /* Borda externa */
  margin-right: 10px;
  box-shadow: inset 0 0 0 4px white; /* Espaço entre a borda e a cor interna */
`
export const ButtonArea = styled.div`
  width: 100%;
  displa: block;
`
