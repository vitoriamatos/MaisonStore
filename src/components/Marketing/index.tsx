import {
  Container,
  List,
  ListItem,
  ListItemText,
  MainContainer,
  Image,
  Text,
  MarketingList,
  MarketingListItem,
  MarketingImage,
  MarketingText,
  MarketingContainer,
  MarketingLink
} from './styles'
import frete from '../../assets/images/fast-delivery.png'
import bag from '../../assets/images/bag.png'
import credit from '../../assets/images/credit-card.png'
import back from '../../assets/images/return.png'
import marketing1 from '../../assets/images/marketing1.webp'
import marketing2 from '../../assets/images/marketing2.webp'
import marketing3 from '../../assets/images/marketing3.webp'

const Marketing = () => (
  <>
    <Container>
      <MainContainer>
        <List>
          <ListItem>
            <ListItemText>
              <Image src={frete} />
              <Text>Frete Grátis</Text>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Image src={bag} />
              <Text>Retire na loja após 3 dias</Text>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Image src={credit} />
              <Text>Parcelamento sem juros</Text>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Image src={back} />
              <Text>30 dias para devolução grátis</Text>
            </ListItemText>
          </ListItem>
        </List>
      </MainContainer>
    </Container>

    <Container>
      <MarketingContainer>
        <MarketingText>Aproveite também</MarketingText>
        <Container>
          <MarketingList>
            <MarketingListItem>
              <MarketingImage src={marketing1} />
              <MarketingLink href="">Vem conferir</MarketingLink>
            </MarketingListItem>
            <MarketingListItem>
              <MarketingImage src={marketing2} />
              <MarketingLink href="">Vem conferir</MarketingLink>
            </MarketingListItem>
            <MarketingListItem>
              <MarketingImage src={marketing3} />
              <MarketingLink href="">Vem conferir</MarketingLink>
            </MarketingListItem>
          </MarketingList>
        </Container>
      </MarketingContainer>
    </Container>
  </>
)

export default Marketing
