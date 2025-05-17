import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MainImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`

export const ThumbnailGallery = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover {
      border-color: #000;
    }
  }
`
export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #444;
  }

  .size-selector {
    display: flex;
    gap: 0.5rem;
    margin: 0.5rem 0 1rem 0;
  }

  .size-button {
    padding: 0.5rem 1rem;
    border: 1px solid #333;
    background: transparent;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s, color 0.3s;
    color: #000;

    &.selected {
      background: #000;
      color: #000;
    }

    &:hover {
      background: #333;
      color: #fff;
    }
  }

  button {
    background: black;
    color: white;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: fit-content;

    &:hover {
      background: #333;
    }
  }
`
export const DescriptionArea = styled.div`
  border-top: 1px solid #000;
`
