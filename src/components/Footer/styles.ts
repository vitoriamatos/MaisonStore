// styles.ts
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 40px 20px;
  border-top: 1px solid #ccc;
`

export const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

export const Column = styled.div`
  flex: 1 1 200px;
  margin: 20px;
  min-width: 160px;
`

export const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`

export const LinkItem = styled.p`
  margin: 5px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

export const IconRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`

export const Icon = styled.div`
  cursor: pointer;
`

export const QRCode = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`

export const Certificados = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 50px;
    height: auto;
  }
`
