import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

export const LeftColumn = styled.div`
  flex: 2;
`

export const RightColumn = styled.div`
  flex: 1;
  border: 1px solid #e6e6e6;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  height: fit-content;
`

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
`

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`

export const ProductInfo = styled.div`
  flex: 1;
`

export const ProductName = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: #666;
`

export const RemoveButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const QuantityText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
`

export const FreightBox = styled.div`
  margin-top: 2rem;
`

export const CepInputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`

export const SmallLink = styled.a`
  font-size: 0.8rem;
  color: #888;
  text-decoration: underline;
  cursor: pointer;
`

export const DeliveryOptions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OptionBox = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;

  .title-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .message {
    font-size: 0.85rem;
    color: #444;
  }

  .free {
    color: green;
    font-weight: bold;
  }

  .price {
    color: #000;
    font-weight: bold;
  }
`

export const SummarySection = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 0.95rem;

  &:last-of-type {
    font-weight: bold;
  }
`
