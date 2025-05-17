import { Button, Container, Subtitle, Title } from './styles'

const Review = () => {
  return (
    <>
      <Container>
        <div>
          <Title>Avaliações:</Title>

          <Subtitle>
            poxa, ninguém comentou sobre essa peça ainda... seja vc a primeira
            pessoa!{' '}
          </Subtitle>

          <Button>Faça um comentário</Button>
        </div>
      </Container>
    </>
  )
}

export default Review
