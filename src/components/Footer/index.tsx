// Footer.tsx
import {
  FooterContainer,
  FooterGrid,
  Column,
  Title,
  LinkItem,
  IconRow,
  Icon,
  QRCode,
  Certificados
} from './styles'

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex
} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <Title>nos siga nas redes sociais</Title>
          <IconRow>
            <Icon>
              <FaInstagram size={20} />
            </Icon>
            <Icon>
              <FaTiktok size={20} />
            </Icon>
            <Icon>
              <FaYoutube size={20} />
            </Icon>
            <Icon>
              <FaSpotify size={20} />
            </Icon>
          </IconRow>
          <Title>baixe nosso app</Title>
          {/* <QRCode src={qr} /> */}
        </Column>

        <Column>
          <Title>departamentos</Title>
          <LinkItem>novidades</LinkItem>
          <LinkItem>feminino</LinkItem>
          <LinkItem>masculino</LinkItem>
          <LinkItem>básicos</LinkItem>
          <LinkItem>jeans</LinkItem>
          <LinkItem>acessórios</LinkItem>
        </Column>

        <Column>
          <Title>sobre nós</Title>
          <LinkItem>quem somos</LinkItem>
          <LinkItem>lojas</LinkItem>
          <LinkItem>blog</LinkItem>
          <LinkItem>yc change</LinkItem>
          <LinkItem>jeans youcom</LinkItem>
          <LinkItem>termos de uso</LinkItem>
        </Column>

        <Column>
          <Title>precisa de ajuda?</Title>
          <LinkItem>central de atendimento</LinkItem>
          <LinkItem>central de privacidade</LinkItem>
          <LinkItem>trocas e devoluções</LinkItem>
          <LinkItem>segurança digital</LinkItem>
          <Title style={{ marginTop: '1rem' }}>reclamações?</Title>
          <LinkItem>PROCON-RJ</LinkItem>
          <LinkItem>PROCON-SC</LinkItem>
          <LinkItem>PROCON-AM</LinkItem>
          <LinkItem>PROCON-MANAUS</LinkItem>
        </Column>

        <Column>
          <Title>formas de pagamento</Title>
          <IconRow>
            <FaCcVisa size={32} />
            <FaCcMastercard size={32} />
            <FaCcAmex size={32} />
          </IconRow>
        </Column>
      </FooterGrid>
    </FooterContainer>
  )
}

export default Footer
