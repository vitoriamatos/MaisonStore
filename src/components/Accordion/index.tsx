import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
`

const Content = styled.div<{ isOpen: boolean }>`
  margin-top: 0.5rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-line;
`

type AccordionProps = {
  title: string
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </Wrapper>
  )
}

export default Accordion
