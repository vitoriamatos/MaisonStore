import styled from 'styled-components'
import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${Colors.withe};
  z-index: 1;
  padding: 40px 16px 0 16px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0);
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
  header {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    header {
      display: flex;
      justify-content: right;
      padding-bottom: 20px;
    }

    overflow-y: auto;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.black};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${Colors.black};
  }
`
export const Quantity = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const TextContainer = styled.div`
  display: block;
  margin-left: 20px;
  width: 100%;
`

export const CartList = styled.div`
  background-color: ${Colors.gray};
  padding: 10px;
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  position: relative;
  footer {
    display: flex;
    justify-content: right;
  }
`

export const List = styled.li`
  list-style-type: none;
`
export const Title = styled.h3`
  color: ${Colors.black};
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const Price = styled.h4`
  color: ${Colors.black};
  font-weight: 400;
`
export const Image = styled.img`
  width: 200px;
`

export const TrashImage = styled.img`
  display: flex;
  justify-content: right;
  position: absolute;
  bottom: 20px;
  width: 5%;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FreightContainer = styled.div`
  margin-top: 24px;

  h3 {
    text-transform: lowercase;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
    color: ${Colors.black};
  }
`

export const CepInput = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.black};
  border-radius: 4px;
  margin-bottom: 8px;
  marging-right: 20px;
  width: 100%;
`

export const ConsultarButton = styled.button`
  background-color: ${Colors.black};
  color: ${Colors.withe};
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
  width: 50%;
  height: 60%;
  margin-top: 20px;
  margin-left: 10px;
`

export const SmallLink = styled.a`
  display: block;
  font-size: 12px;
  color: #0071ce;
  text-decoration: underline;
  margin-bottom: 16px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const OptionBox = styled.div`
  border: 1px solid ${Colors.gray};
  background-color: #f6f6f6;
  border-radius: 4px;
  padding: 10px;

  .title-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    text-transform: lowercase;

    .icon {
      margin-right: 8px;
    }

    .free {
      color: green;
      font-weight: bold;
      font-size: 14px;
    }

    .price {
      font-weight: bold;
      font-size: 14px;
    }
  }

  .message {
    margin-top: 8px;
    font-size: 13px;
    strong {
      font-weight: bold;
    }
  }
`

export const Note = styled.p`
  font-size: 12px;
  color: #555;
  margin-top: 8px;
`
export const CepHeader = styled.div`
  background-color: ${Colors.gray};
  border: 1px solid ${Colors.darkGray};
  padding: 10px;
`
export const CepBody = styled.div`
  border: 1px solid ${Colors.darkGray};
  border-top: none;
  padding: 10px;
`

export const CepInputArea = styled.div`
  display: flex;
`
