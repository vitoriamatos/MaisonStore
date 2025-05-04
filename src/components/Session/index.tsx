//import { Container, List } from './styles'

// type Props = {
//   background: 'withe' | 'black'
//   session: Restaurant[]
// }
import banner1 from '../../assets/images/session1.png'
import banner2 from '../../assets/images/session2.png'
import banner3 from '../../assets/images/session3.png'
import promo from '../../assets/images/banner4.png'
import {
  Container,
  SessionArea,
  Image,
  Title,
  TitleContainer,
  SessionContainer,
  ImagePromo
} from './styles'
const Session = () => (
  <Container className="container">
    <SessionContainer>
      <SessionArea>
        <div>
          <Image src={banner1} alt="" />
          <TitleContainer>
            <Title>blusas e camisestas a partir de 39,90</Title>
          </TitleContainer>
        </div>

        <div>
          <Image src={banner2} alt="" />
          <TitleContainer>
            <Title>calças e shorts a partir de 59,90</Title>
          </TitleContainer>
        </div>

        <div>
          <Image src={banner3} alt="" />
          <TitleContainer>
            <Title>vestidos a partir de 79,90</Title>
          </TitleContainer>
        </div>
      </SessionArea>
      <ImagePromo src={promo} alt="promo"></ImagePromo>
    </SessionContainer>
  </Container>
)
export default Session
