import { useState } from 'react'
import {
  CepBody,
  CepInput,
  CepInputArea,
  ConsultarButton,
  Note,
  OptionBox,
  OptionsContainer,
  SmallLink
} from './styles'

const Accordion = () => {
  const [cep, setCep] = useState('')
  const [frete, setFrete] = useState<null | number>(null)
  const handleCalcularFrete = () => {
    // Simulação de valor de frete. Aqui você pode chamar uma API real.
    if (cep.length === 9) {
      setFrete(cep.startsWith('00') ? 0 : 16.84) // Exemplo fictício
    } else {
      alert('Digite um CEP válido no formato 00000-000')
    }
  }
  return (
    <CepBody>
      <CepInputArea>
        <div>
          <label htmlFor="cep">digite seu cep*</label>
          <CepInput
            type="text"
            id="cep"
            placeholder="00000-000"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength={9}
          />
        </div>
        <ConsultarButton onClick={handleCalcularFrete}>
          consultar
        </ConsultarButton>
      </CepInputArea>

      <SmallLink href="#">não sei meu cep</SmallLink>

      {frete !== null && (
        <OptionsContainer>
          <OptionBox>
            <div className="title-line">
              <span className="icon">🏬</span>
              <span>retirar na loja</span>
              <span className="free">grátis</span>
            </div>
            <p className="message">
              <strong>retire seu pedido</strong> na loja e ganhe{' '}
              <strong>15% off</strong> em uma nova compra na retirada
            </p>
          </OptionBox>

          <OptionBox>
            <div className="title-line">
              <span className="icon">🚚</span>
              <span>receber em casa</span>
              <span className="price">a partir de R$ {frete.toFixed(2)}</span>
            </div>
          </OptionBox>
          <Note>* escolha a forma de entrega na próxima etapa</Note>
          <SmallLink href="#">ver outras opções de entrega</SmallLink>
        </OptionsContainer>
      )}
    </CepBody>
  )
}

export default Accordion
